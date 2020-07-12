function checkAllBoxes(element) {

    var all = element.checked;

    var checkboxes = ["myBlueText", "colorText", "ulText"];
    if (all == true) {
        for (var h = 0; h < checkboxes.length; h++) {

            document.getElementById(checkboxes[h]).checked = all;
            document.getElementById(checkboxes[h]).disabled = true;
        }
    } else {
        for (var h = 0; h < checkboxes.length; h++) {

            document.getElementById(checkboxes[h]).checked = all;
            document.getElementById(checkboxes[h]).disabled = false;
        }
    }
}