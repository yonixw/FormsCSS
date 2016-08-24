
app.controller('noteDialog', function ($scope, $mdDialog, $mdMedia,  selectedTask) {
    $scope.selectedTask = selectedTask;

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
});

app.controller('task-filter-dialog', function ($scope, $mdDialog, $mdMedia, filterarray) {
    $scope.filterArray = filterarray;

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

    $scope.textDesc = function(filtername, value) {
        switch (filtername) {
            case 'favor':
                return (value) ? 'הצג מועדפים' : 'הצג רגילים';
        }
    }
});

app.controller('tasks', function ($scope, $mdDialog, $mdMedia , $anchorScroll ) {

    /**************************************
            Create and destroy dialog boxes
    ***************************************/


    $scope.$on('$routeChangeStart', function (next, current) {
        //SO? 14765719 ; 2864740
        //$("#note-dialog").dialog('destroy').remove()
        //$("#sig-dialog").dialog('destroy').remove()
    });


    /**************************************
            TRI STATE CHECKBOX
    ***************************************/

    var TriStateFSM = [
        { text: "", css: "checked", next: 1 },
        { text: "", css: "unchecked", next: 0 },
        { text: "מצב", css: "hidden", next: 0 }
    ]

    function _clickTri(id) {
        // Get task by id on the list:
        var task = _getTaskByID(id);
        if (!task) return;

        for (var i = 0; i < TriStateFSM.length; i++) {
            if (task.tristate.css == TriStateFSM[i].css) {
                //Change text to next :
                task.tristate.text = TriStateFSM[TriStateFSM[i].next].text;
                // Change css to next
                task.tristate.css = (TriStateFSM[TriStateFSM[i].next].css);
                //return to avoid races.
                return;
            }
        }
    }

    $scope.OnTriClick = function (id) {
        _clickTri(id);
    }

    /**************************************
           NOTES
   ***************************************/
   
    $scope.selectedTask = {taskID: -1, notes: [] }; // The task of the notes.
 
    // Set dialog values:
    function _setNoteDialog(taskID, noteID, owner, text) {
        $("#input_note_taskid").val(taskID);
        $("#input_note_noteid").val(noteID);
        $("#input_note_owner").val(owner);
        $("#input_note_text").val(text);
    }

    // Get dialog values:
    function _getNoteDialog() {
        return {
            taskid: $("#input_note_taskid").val(),
            noteid: $("#input_note_noteid").val(),
            owner: $("#input_note_owner").val(),
            text: $("#input_note_text").val(),
        };
    }

    function _getNoteByID(task,noteid) {
        for (var i = 0; i < task.notes.length; i++) {
            if (task.notes[i].noteID == noteid)
                return task.notes[i];
        }

        // If we got here, no id is present:
        console.log("tasks::_getNoteByID(task,noteid) cant find note with id:" + noteid );
        return null;
    }

    // Show notes list for specific task:
    $scope.ShowNotes = function (taskID, event) {
        t = _getTaskByID(taskID);
        $scope.selectedTask = t;  

        $mdDialog.show({
            controller: 'noteDialog',
            locals: {
                selectedTask: $scope.selectedTask
            },
            templateUrl: './js/views/tasknotes.html',
            parent: document.querySelector("#tasks-view"),
            targetEvent: event,
            clickOutsideToClose: true,
            title: "הערות",
            fullscreen: false
        })
        .then(function (answer) {
            //$scope.status = 'You said the information was "' + answer + '".';
            //answer
        }, function () {
            //$scope.status = 'You cancelled the dialog.';
            //cancel
        });

       
    }

    // Add note to task:
    $scope.AddNote = function (taskid) {
        // Set note id to -1 because new:
        _setNoteDialog(taskid, -1, "", "");

        // Open dialog:
        $("#note-dialog").dialog("open");
    }

    // Edit existing note
    $scope.editNote = function (taskid, noteid) {
        var task = _getTaskByID(taskid);
        if (!task) return;

        var note = _getNoteByID(task, noteid);
        if (!note) return;

        // Set note id to -1 because new:
        _setNoteDialog(taskid, noteid, note.noteOwner, note.noteText);

        // Open dialog:
        $("#note-dialog").dialog("open");
    }

    // Save note either from adding or editing.
    $scope.saveNote = function () {
        var note = _getNoteDialog();
        var task = _getTaskByID(note.taskid);
        if (!task) return;

        if (note.noteid == -1)
        {
            // Check if no notes
            if (task.notes) {
                task.notes.push({
                    noteID: 0, // value from db
                    noteOwner: note.owner,
                    noteText: note.text
                });
            }
            else {
                task.notes = [{
                    noteID: 0, // value from db
                    noteOwner: note.owner,
                    noteText: note.text
                }];
            }
            
        }
        else
        {
            var noteObj = _getNoteByID(task, note.noteid);
            if (!noteObj) return;

            noteObj.noteOwner = note.owner;
            noteObj.noteText = note.text;
        }
    }

    /**************************************
          Category Array
  ***************************************/

    $scope.goCat = function (id) {
        // based on SO? 25316780

        var element = $("#tab-content"); // The context element of scrolling
        //$("#subheader-" + id.toString(), $(element)) ===> our anchor 

        var pos = $("#subheader-" + id.toString(), $(element)).position().top + $(element).scrollTop();        
        $(element).animate({
            scrollTop: pos
        }, 1000);
    }



    /**************************************
           TASK ARRAY
   ***************************************/

    function _getTaskByID(id) {
        for (var i = 0; i < $scope.taskArray.length; i++) {
            if ($scope.taskArray[i].taskID == id)
                return $scope.taskArray[i];
        }

        // If we got here, no id is present:
        console.log("tasks::_getTaskByID(id) cant find task with id:" + id);
        return null;
    }

    $scope.filters = [
        { filter: false, name: 'favor', value: true },
        { filter: false, name: 'statecss', value: 'hidden' },
        { filter: false, name: 'notes' }, // Filter if have notes... not if doesnt
    ];

    // Filter tasks based on options:
    $scope.filterTask = function (task) {
        var result = true;
        for (var i = 0; i < $scope.filters.length; i++) {
            var filter = $scope.filters[i];

            if (filter.filter) {
                switch (filter.name) {
                    case 'favor':
                        result = result && (task.favor == filter.value);
                        break;
                    case 'statecss':
                        result = result && (task.tristate.css == filter.value);
                        break;
                    case 'notes':
                        result = result && (task.notes && task.notes.length > 0);
                        break;
                }
            }

            if (!result) break; // to exit function.
        }
        return result;
    }

    $scope.filterDialog = function () {
       
        $mdDialog.show({
            controller: 'task-filter-dialog',
            locals: {
                filterarray: $scope.filters
            },
            templateUrl: './js/views/task_filters.html',
            parent: document.querySelector("#tasks-view"),
            targetEvent: event,
            clickOutsideToClose: true,
            title: "סינון",
            fullscreen: false
        })
        .then(function (answer) {
            //$scope.status = 'You said the information was "' + answer + '".';
            //answer
        }, function () {
            //$scope.status = 'You cancelled the dialog.';
            //cancel
        });


    }

    $scope.favor = 0; 


    $scope.taskArray = [
        {
            catid: 0,
            catname: 'מפקום-דלת',
            tasks: [
                 {
                     taskID: 0,
                     favor: false,
                     description: '<b>Hello</b>',
                     tristate: {
                         css: 'checked',
                         text: ''
                     },
                     notes: [
                         {
                             noteID: 0,
                             noteOwner: 'מקשחר',
                             noteText: 'הכל סבבה'
                         },
                         {
                             noteID: 1,
                             noteOwner: '2מקשחר',
                             noteText: 'הכל סבבה2'
                         },
                     ]
                 },
                {
                    taskID: 1,
                    favor: false,
                    description: '<b>Hello From the <u>pther</u> side</b>',
                    tristate: {
                        css: 'hidden',
                        text: 'מצב'
                    },
                    notes: [
                        {
                            noteID: 2,
                            noteOwner: 'מקש222חר',
                            noteText: 'הכל סב<u>sss</u>בה'
                        },
                    ]
                },
                {
                    taskID: 10,
                    favor: false,
                    description: 'Hello From the <u>pther</u><br /> side',
                    tristate: {
                        css: 'hidden',
                        text: 'מצב'
                    },
                },
            ]
        },


        {
            catid: 1,
            catname: 'קטגוריה שניה',
            tasks: [
                {
                    taskID: 100,
                    favor: false,
                    description: 'Hello From the <u>pther</u><br /> side',
                    tristate: {
                        css: 'hidden',
                        text: 'מצב'
                    },
                },
                {
                    taskID: 101,
                    favor: false,
                    description: 'Hello From the <u>pther</u><br /> side',
                    tristate: {
                        css: 'hidden',
                        text: 'מצב'
                    },
                },
                {
                    taskID: 102,
                    favor: true,
                    description: 'Hello From the <u>pther</u><br /> side',
                    tristate: {
                        css: 'hidden',
                        text: 'מצב'
                    },
                },
                 {
                     taskID: 102,
                     favor: false,
                     description: 'Hello From the <u>pther</u><br /> side',
                     tristate: {
                         css: 'hidden',
                         text: 'מצב'
                     },
                 },
                  {
                      taskID: 102,
                      favor: false,
                      description: 'Hello From the <u>pther</u><br /> side',
                      tristate: {
                          css: 'hidden',
                          text: 'מצב'
                      },
                  },
                   {
                       taskID: 102,
                       favor: false,
                       description: 'Hello From the <u>pther</u><br /> side',
                       tristate: {
                           css: 'hidden',
                           text: 'מצב'
                       },
                   },
                    {
                        taskID: 102,
                        favor: false,
                        description: 'Hello From the <u>pther</u><br /> side',
                        tristate: {
                            css: 'hidden',
                            text: 'מצב'
                        },
                    },
                     {
                         taskID: 102,
                         favor: false,
                         description: 'Hello From the <u>pther</u><br /> side',
                         tristate: {
                             css: 'hidden',
                             text: 'מצב'
                         },
                     },
                      {
                          taskID: 102,
                          favor: false,
                          description: 'Hello From the <u>pther</u><br /> side',
                          tristate: {
                              css: 'hidden',
                              text: 'מצב'
                          },
                      },
                       {
                           taskID: 102,
                           favor: false,
                           description: 'Hello From the <u>pther</u><br /> side',
                           tristate: {
                               css: 'hidden',
                               text: 'מצב'
                           },
                       },
                        {
                            taskID: 102,
                            favor: false,
                            description: 'Hello From the <u>pther</u><br /> side',
                            tristate: {
                                css: 'hidden',
                                text: 'מצב'
                            },
                        },
                         {
                             taskID: 102,
                             favor: false,
                             description: 'Hello From the <u>pther</u><br /> side',
                             tristate: {
                                 css: 'hidden',
                                 text: 'מצב'
                             },
                         },
            ]
        }
    ];
});
