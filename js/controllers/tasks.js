
function scrollToCat(id) {
    // based on SO? 25316780

    var element = $("#tab-content"); // The context element of scrolling
    //$("#subheader-" + id.toString(), $(element)) ===> our anchor 

    //pos -1 because we dont wnat floating header when scrolling.
    var pos = $("#subheader-" + id.toString(), $(element)).position().top + $(element).scrollTop() - 1;
    $(element).animate({
        scrollTop: pos
    }, 1000);
}


app.factory('taskService', function () {
    var _taskArray = [
        {
            catid: 0,
            catname: 'א. מפקום-דלת',
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
             catname: 'ב. מפקום-דלת',
             tasks: [
                  {
                      taskID: 60,
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
                     taskID: 61,
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
                     taskID: 610,
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
            catid: 2,
            catname: 'ג. קטגוריה שניה',
            cats: [
                {
                    catid: 100,
                    catname: '1. תת קטגוריה',
                    tasks: [
                        {
                            taskID: 99,
                            favor: true,
                            description: 'Helllo from under',
                            tristate: {
                                css: 'hidden',
                                text: 'מצב',
                            },
                        },
                    ]

                }
            ],
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
                    description: 'FAVOR Hello From the <u>pther</u><br /> side',
                    tristate: {
                        css: 'hidden',
                        text: 'מצב'
                    },
                },
                 {
                     taskID: 103,
                     favor: false,
                     description: 'Hello From the <u>pther</u><br /> side',
                     tristate: {
                         css: 'hidden',
                         text: 'מצב'
                     },
                 },
                  {
                      taskID: 104,
                      favor: false,
                      description: 'Hello From the <u>pther</u><br /> side',
                      tristate: {
                          css: 'hidden',
                          text: 'מצב'
                      },
                  },
                   {
                       taskID: 105,
                       favor: false,
                       description: 'Hello From the <u>pther</u><br /> side',
                       tristate: {
                           css: 'hidden',
                           text: 'מצב'
                       },
                   },
                    {
                        taskID: 106,
                        favor: false,
                        description: 'Hello From the <u>pther</u><br /> side',
                        tristate: {
                            css: 'hidden',
                            text: 'מצב'
                        },
                    },
                     {
                         taskID: 107,
                         favor: false,
                         description: 'Hello From the <u>pther</u><br /> side',
                         tristate: {
                             css: 'hidden',
                             text: 'מצב'
                         },
                     },
                      {
                          taskID: 108,
                          favor: false,
                          description: 'Hello From the <u>pther</u><br /> side',
                          tristate: {
                              css: 'hidden',
                              text: 'מצב'
                          },
                      },
                       {
                           taskID: 109,
                           favor: false,
                           description: 'Hello From the <u>pther</u><br /> side',
                           tristate: {
                               css: 'hidden',
                               text: 'מצב'
                           },
                       },
                        {
                            taskID: 120,
                            favor: false,
                            description: 'Hello From the <u>pther</u><br /> side',
                            tristate: {
                                css: 'hidden',
                                text: 'מצב'
                            },
                        },
                         {
                             taskID: 132,
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

    // Create linaear and recursive from input:
    function recCat(origincat, targetcat) {

        //console.log('Now cat:' + origincat.catid);
        if (origincat.tasks) {
            for (var i = 0; i < (origincat.tasks.length) ; i++) {
                task = origincat.tasks[i];
                addTask(task,targetcat);
            }
        }



        if (origincat.cats) {
            for (var j = 0; j < (origincat.cats.length) ; j++) {
                subcat = origincat.cats[j];
                var newObjSubCat = addCat(subcat.catid, subcat.catname, targetcat);

                // Recursive:
                recCat(subcat, newObjSubCat);
            }
        }
    }

    function init() {
        for (var i = 0; i < _taskArray.length; i++) {
            cat = _taskArray[i];
            var neCatObj = addCat(cat.catid, cat.catname, null);
            recCat(cat, neCatObj);
        }

        console.log('done init');
    }

    var _catLinearArray = [];
    var _catObjectArray = [];

    function getCatSchema() {
        return {
            catid: 0,
            catname: '',
            catparent: null,
            cats: [], // sub cats - may be empty.
            tasks: [], // tasks - may be empty.
        };
    }

    // return cat object
    function addCat(id, name, parent) {
        var catObj = getCatSchema();
        catObj.catid = id;
        catObj.catname = name;
        catObj.catparent = parent;

        // Add to parent or root
        if (parent) {
            parent.cats.push(catObj);
        }
        else {
            if (_catObjectArray) {
                _catObjectArray.push(catObj);
            } else {
                _catObjectArray = [catObj];
            }
        }

        // anyway add to linear array:
        if (_catLinearArray) {
            _catLinearArray.push(catObj);
        } else {
            _catLinearArray = [catObj];
        }

        return catObj;
    }

    function getTaskSchema() {
        return {
            taskID: 0,           // id of the task in db.
            favor: false,        // did someone make it favor?
            description: '',     // the html view of the task
            tristate: {          // object for handling the status of task
                css: '',         //
                text: '',        //
            },                   //
            taskparent: null,    // task cat parent
            notes: [],           // notes of the task
            rank: 0,             // rank of the task (4 level of broken effect)
            extrainfo: '',       // Extra info about this task like broken cretiria etc...
        };
    }

    // return void
    function addTask(task, parent) {

        var taskObj = getTaskSchema();
        taskObj.taskID          = task.taskID       ; 
        taskObj.favor           = task.favor        ; 
        taskObj.description     = task.description  ; 
        taskObj.tristate        = task.tristate     ; 
        taskObj.taskparent      = parent               ; 
        taskObj.notes           = task.notes        ; 
        taskObj.rank            = task.rank         ; 
        taskObj.extrainfo       = task.extrainfo    ;

        parent.tasks.push(taskObj);

        return taskObj;
    }

    init();

    return { catLinearArray: _catLinearArray, catObjectArray: _catObjectArray };

});

app.controller('noteDialog', function ($scope, $mdDialog, $mdMedia, selectedTask) {
    $scope.selectedTask = selectedTask;

    $scope.getFavIcon = function () {
        return selectedTask.favor ? 'star' : 'star_border';
    }

    $scope.toggleFavs = function () {
        $scope.selectedTask.favor = !$scope.selectedTask.favor;
    }

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
});

app.controller('task-filter-dialog', function ($scope, $mdDialog, $mdMedia, filterarray) {
    $scope.filterArray = filterarray;

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

});

app.controller('tasks', function ($scope, $mdDialog, $mdMedia,
    $anchorScroll, $mdSidenav, $log, taskService) {

    /**************************************
            Create and destroy dialog boxes
    ***************************************/


    $scope.$on('$routeChangeStart', function (next, current) {
        //SO? 14765719 ; 2864740
        //$("#note-dialog").dialog('destroy').remove()
        //$("#sig-dialog").dialog('destroy').remove()
    });


    /**************************************
            Scrollign and breadcrumbs
    ***************************************/
  

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

    $scope.selectedTask = { taskID: -1, notes: [] }; // The task of the notes.

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

    function _getNoteByID(task, noteid) {
        for (var i = 0; i < task.notes.length; i++) {
            if (task.notes[i].noteID == noteid)
                return task.notes[i];
        }

        // If we got here, no id is present:
        console.log("tasks::_getNoteByID(task,noteid) cant find note with id:" + noteid);
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
            templateUrl: './js/views/task_notes.html',
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

        if (note.noteid == -1) {
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
        else {
            var noteObj = _getNoteByID(task, note.noteid);
            if (!noteObj) return;

            noteObj.noteOwner = note.owner;
            noteObj.noteText = note.text;
        }
    }

    /**************************************
          Category Array
  ***************************************/
    // Load subcats into view
    $scope.openCat = function (id) {

    }

    // Scroll to cat, sopposed  o be only subcat.
    $scope.goCat = function (id) {
        scrollToCat(id);
    }

    /**************************************
           RIGHT MENU
   ***************************************/
    $scope.openSideMenu = function () {
        $mdSidenav('rightmenu')
              .toggle()
              .then(function () {
                  //$log.debug("toggle right is done");
              });
    }

    /**************************************
           TASK ARRAY
   ***************************************/

    function _getTaskByID(id) {
        for (var i = 0; i < $scope.taskArray.length; i++) {
            for (var j = 0; j < $scope.taskArray[i].tasks.length ; j++) {
                if ($scope.taskArray[i].tasks[j].taskID == id)
                    return $scope.taskArray[i].tasks[j];
            }
        }

        // If we got here, no id is present:
        console.log("tasks::_getTaskByID(id) cant find task with id:" + id);
        return null;
    }

    // Get count of finished taks in a category object; return int.
    $scope.getTasksWithStateCount = function (cat) {
        var i = 0;
        for (var j = 0; j < cat.tasks.length ; j++) {
            if (cat.tasks[j].tristate.css != 'hidden')
                i++;
        }

        return i;
    }

    $scope.taskArray = taskService.catLinearArray;

    /**************************************
          Filters
  ***************************************/

    // Each filter get 
    $scope.filters = [
        /*groupFavor:*/
        {
            nonfavor: {
                show: false, value: null, f: function (task, value)
                { return ( task.favor == false); }
            },
            favor: {
                show: false, value: null, f: function (task, value)
                { return ( task.favor == true); }
            }
        },
        /*groupContent:*/
        {
            content: {
                show: false, value: '', f: function (task, value)
                { return (!value || task.description.indexOf(value) > -1); }
                // empty of exist
            }
        },
        /*groupNotes: */
        {
            notes: {
                show: false, value: '', f: function (task, value)
                { return (task.notes && task.notes.length > 0); }
            }
        },
        /* State group*/
        {
            hidden : {
                show: false, value: 'hidden', f: function (task, value)
                { return (task.tristate.css == value); }
            },
            checked: {
                show: false, value: 'checked', f: function (task, value)
                { return (task.tristate.css == value); }
            },
            unchecked: {
                show: false, value: 'unchecked', f: function (task, value)
                { return (task.tristate.css == value); }
            },
        }

    ]

 
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

    $scope.favIcon = 'star_border';
    $scope.toggleFavs = function () {
        if ($scope.favIcon == 'star') { // no filter
            $scope.favIcon = 'star_border';
            $scope.filters[0].favor.show = false;
        }
        else
        {
            $scope.favIcon = 'star';
            $scope.filters[0].favor.show = true;
        }
    }
});


// Filter tasks using settings
app.filter('taskfilter', function () {

    var filterTask = function (task, filters) {
        var result = true;
        for (var g = 0; g < filters.length; g++) {
            // For each group:
            var currentFilterGroup = filters[g];
            var groupResult = false;
            var foundFilter = false;

            for (key in currentFilterGroup) {
                var currentFilter = currentFilterGroup[key];

                // Each on the group is enough
                if (currentFilter.show) {
                    foundFilter = true;
                    groupResult = groupResult || currentFilter.f(task, currentFilter.value);
                }
            };

            // All group must requires be met.
            result =  result && (groupResult || !foundFilter);
        }
        return result;
    }

    return function (items, filters) {
        var filteredArray = [];
        for (var i = 0; i < items.length; i++) {
            if (filterTask(items[i], filters)) {
                filteredArray.push(items[i]);
            }
        }
        return filteredArray;
    }
});

// The sub controller for right menu of categories
app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log, taskService) {

    $scope.goCat = function (id) {
        scrollToCat(id);
        $scope.close();
    }

    $scope.catTree = taskService.catObjectArray;

    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('rightmenu').close()
          .then(function () {
              // $log.debug("close RIGHT is done");
          });
    };
});
