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
        // Get task by place on the list:
        var task = _getTaskByID(id);
        if (!task) return;

        for (var i = 0; i < TriStateFSM.length; i++) {
            if (task.tristate.css == TriStateFSM[i].css) {
                //Change text to next :
                task.tristate.text = TriStateFSM[TriStateFSM[i].next].text;
                // Change css to next
                 task.tristate.css = (TriStateFSM2[TriStateFSM2[i].next].css);
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

    $scope.AddNote = function (id) {
        // Get task by place on the list:
        var task = _getTaskByID(id);
        if (!task) return;

        // notes can be empty
        if (task.notes) {
            task.notes.push({
                noteID: 12,
                noteOwner: 'yoyo',
                noteText: 'הכל סבבה'
            });
        }
        else
        {
            task.notes = [{
                noteID: 12,
                noteOwner: 'yoyo',
                noteText: 'הכל סבבה'
            }];
        }
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