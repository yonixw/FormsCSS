/**************************************
        NAVIGATE MENU
***************************************/

var $selected = null;

function MenuClick(elem) {
    if ($selected) {
        $selected.removeClass("selected");
    }

    $selected = $(elem);
    $selected.addClass("selected");
}

