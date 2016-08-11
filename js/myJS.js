
var TriStateFSM = [
    { text: "תקין", css: "checked", next: 1 },
    { text: "לא תקין", css: "unchecked", next: 0 },
    { text: "בחר מצב", css: "clear", next: 0 }
]

function OnTriClick(elm) {
    var $tristate = $(elm).find(">:first-child");
    var $desc = $(elm).find(".tristatedesc");
    for (var i = 0; i < TriStateFSM.length; i++) {
        if ($tristate.hasClass(TriStateFSM[i].css)) {
            //Change text to next :
            $desc.text(TriStateFSM[TriStateFSM[i].next].text);
            //Remove current css
            $tristate.removeClass(TriStateFSM[i].css);
            // Add next css
            $tristate.addClass(TriStateFSM[TriStateFSM[i].next].css);

            //return to avoid races.
            return;
        }
    }
}


var TriStateFSM2 = [
    { text: "", css: "checked", next: 1 },
    { text: "", css: "unchecked", next: 0 },
    { text: "מצב", css: "hidden", next: 0 }
]

function OnTriClick2(elm) {
    var $tristate = $(elm).find(">:first-child");
    var $desc = $(elm).find(".tristatedesc");
    for (var i = 0; i < TriStateFSM2.length; i++) {
        if ($tristate.hasClass(TriStateFSM2[i].css)) {
            //Change text to next :
            $desc.text(TriStateFSM2[TriStateFSM2[i].next].text);
            //Remove current css
            $tristate.removeClass(TriStateFSM2[i].css);
            // Add next css
            $tristate.addClass(TriStateFSM2[TriStateFSM2[i].next].css);

            //return to avoid races.
            return;
        }
    }
}