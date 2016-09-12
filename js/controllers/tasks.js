
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

// Factory for gettign tasks per each category.
app.factory('taskService', function () {
    var _taskArray = [
        {
            catid: 0,
            catname: 'א. מפקום-דלת',
            tasksCompleted: 1,
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
                     ],
                     extrainfo: '<b>פה יהיה מידע אחזקתי</b>',
                     rank: 3,
                    
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
                var newObjSubCat = addCat(subcat, targetcat);

                // Recursive:
                recCat(subcat, newObjSubCat);
            }
        }
    }

    function init() {
        for (var i = 0; i < _taskArray.length; i++) {
            cat = _taskArray[i];
            var neCatObj = addCat(cat, null);
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
            tasksCompleted: 0,
            catsCompleted: 0,
            cats: [], // sub cats - may be empty.
            tasks: [], // tasks - may be empty.
        };
    }

    // return cat object
    function addCat(cat, parent) {
        var catObj = getCatSchema();
        catObj.catid = cat.catid;
        catObj.catname = cat.catname;
        catObj.catparent = cat.catparent;
        catObj.tasksCompleted = cat.tasksCompleted;
        catObj.catsCompleted = cat.catsCompleted;

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
        //if (_catLinearArray) {
        //    _catLinearArray.push(catObj);
        //} else {
        //    _catLinearArray = [catObj];
        //}

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

    return { /*catLinearArray: _catLinearArray,*/ catObjectArray: _catObjectArray };

});

// Sub Controller for task note dialog
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

    $scope.rankDict = [
        'ליקוי קל',
        'ליקוי חמור',
        'ליקוי לא משבית',
        'משבית מלחמה',
        'לא מוכר',
    ];

    $scope.ranktext = function (rank) {
        // Default result
        var result = $scope.rankDict[$scope.rankDict.length - 1];

        // If in array
        if (rank && rank < $scope.rankDict.length && rank > -1){
                result = $scope.rankDict[rank];
        }

        // Return:
        return result;
    }
});

// Sub Controller fof filter dialog
app.controller('task-filter-dialog', function ($scope, $mdDialog, $mdMedia, filterarray) {
    $scope.filterArray = filterarray;

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.rankDict = [
        'ליקוי קל',
        'ליקוי חמור',
        'ליקוי לא משבית',
        'משבית מלחמה',
        'לא מוכר',
    ];


});

// Main task view controller
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

    function _clickTri(task) {
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

    $scope.OnTriClick = function (task) {
        $scope.addFillTask(task); // must be first beacuse using css before change
        _clickTri(task);
    }

    /**************************************
           NOTES
   ***************************************/

    $scope.selectedTask = { taskID: -1, notes: [] }; // The task of the notes.

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

  
    // Save note either from adding or editing.
    $scope.saveNote = function () {
        //noteID: 0, // value from db
        //noteOwner: note.owner,
        //noteText: note.text
    }

    /**************************************
          Category Array
  ***************************************/
    // Load subcats into view
    $scope.openCat = function (cat) {
        $scope.linearArrayFromCat(cat, false);
        $mdSidenav('rightmenu').close();
    }

    // Scroll to cat, sopposed  to be only subcat.
    $scope.goCat = function (id) {
        scrollToCat(id);
    }

    $scope.fullCatName = function (cat) {
        var name = ' ';
        while (cat && cat.catname) {
            name = cat.catname + '> ' + name;
            cat = cat.catparent;
        }
        return name;
    }

    // Update cat up to root that a task was completed.
    $scope.addFillTask = function (task) {
        cat = task.taskparent;

        if (task.tristate.css == 'hidden') { // Hidden is not cheked
            if (!cat.tasksCompleted)
                cat.tasksCompleted = 1;
            else
                cat.tasksCompleted++;
        
            // Update father recursive.
            $scope.addFillCat(cat.catparent);
        }
    }

    // Did the user (almost) finished all tasks under cat tree?
    $scope.catCompletedState = function (cat) {
        if (!cat) return;
        if (!cat.tasksCompleted) cat.tasksCompleted = 0;
        if (!cat.catsCompleted) cat.catsCompleted = 0;

        var completed = false;
        var started = false;

        if (cat.tasks && cat.tasks.length > 0) {
            completed = completed || cat.tasksCompleted == cat.tasks.length;
            started = started || cat.tasksCompleted > 0;
        }
        if (cat.cats && cat.cats.length > 0) {
            completed = completed || cat.catsCompleted == cat.cats.length;
            started = started || cat.catsCompleted > 0;
        }

        return { completed: completed , started: started};
    }

    $scope.getCatStatString = function (stat) {
        if (stat.completed) {
            return "lens";
        }
        else if (stat.started) {
            return "timelapse";
        }
        return "panorama_fish_eye";
    }

    // Recursive update when user did some task
    $scope.addFillCat = function (cat) {
        if (!cat) return;

        if (!cat.catsCompleted)
            cat.catsCompleted = 1;
        else
            cat.catsCompleted++;

        // Update father recursive.
        if ($scope.catCompleted(cat)) {
            $scope.addFillCat(cat.catparent);
        }
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

    $scope.linearArrayFromCat = function (cat, recursive) {
        if (!cat) return;

        if (!recursive) { // Init sub cat array.
            $scope.taskArray = [cat];
        }

        if (cat.cats) {
            for (var i = 0; i < cat.cats.length; i++) {
                cat_i = cat.cats[i];

                if (cat) {
                    $scope.taskArray.push(cat_i);
                    $scope.linearArrayFromCat(cat_i, true);
                }
            }
        }
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

    $scope.taskArray = [];// taskService.catLinearArray;

    /**************************************
          Filters and Process
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
        },
         /*groupRank: */
        {
            r0: {
                show: false, value: '', f: function (task, value)
                { return (task.rank && task.rank == 0); }
            },
            r1: {
                show: false, value: '', f: function (task, value)
                { return (task.rank && task.rank == 1); }
            },
            r2: {
                show: false, value: '', f: function (task, value)
                { return (task.rank && task.rank == 2); }
            },
            r3: {
                show: false, value: '', f: function (task, value)
                { return (task.rank && task.rank == 3); }
            },
        }

        /* Dont add ',' at the end! it will create null in an array!*/
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

                // Each on the group is enough to show, none selected ==> show all
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
