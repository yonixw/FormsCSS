app.controller('tasks', function ($scope) {
    /**************************************
            TRI STATE CHECKBOX
    ***************************************/

    var TriStateFSM = [
        { text: "", css: "checked", next: 1 },
        { text: "", css: "unchecked", next: 0 },
        { text: "מצב", css: "hidden", next: 0 }
    ]

    function _clickTri(numplace) {
        // Get task by place on the list:
        var task = $scope.taskArray[numplace];

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

    $scope.OnTriClick = function (numplace) {
        _clickTri(numplace);
    }

    /**************************************
           TASK ARRAY
   ***************************************/

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
                    noteOwner: 'מקשחר',
                    noteText: 'הכל סבבה'
                },
                {
                    noteID: 3,
                    noteOwner: '2מקשחר',
                    noteText: 'הכל סבבה2'
                },
            ]
        },
    ];
});