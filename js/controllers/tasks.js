app.controller('tasks', function ($scope) {
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
   
 

    // Setup dialog:
    $("#note-dialog").dialog({
        draggable: false,
        dialogClass: "custom-dialog",
        autoOpen: false,
        modal: true,
        width: "auto",
        height: "auto",

        show: {
            effect: "bounce",
            duration: 1000
        },
        hide: {
            effect: "fade",
            duration: 100
        },
        buttons: {
            "שמור": function () {
                //SO? 10490570
                $scope.$apply(function () {
                    $scope.saveNote();
                });
                $(this).dialog("close");
            },
            "ביטול": function () {
                $(this).dialog("close");
            }
        }
    });

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

    $scope.catArr =
    [
        {
        catID: 0,
        catName: 'קטלנן',
        },
    ];

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

    $scope.taskArray = [
        {
            taskID: 0,
            favor: false,
            description: '<b>Hello</b>',
            tristate : {
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
            tristate : {
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
    ];
});