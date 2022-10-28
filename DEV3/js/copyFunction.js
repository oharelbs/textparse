function copyFunction(id) {
    //this copies a regular textarea field
    if (id == "divwl") { //divwl is a text field, while the other are divs or contenteditable fields
        if (document.getElementById(id).value.length == 0) {
            alert('Nothing to copy.');
        } else {
            var copyText = document.getElementById(id);
            copyText.select();
            document.execCommand("copy");
            alert("Text has been copied, now paste it somewhere.");
        }
    } else {
        //this copies a div field
        if (document.getElementById(id).innerHTML == "") {
            alert('Nothing to copy.');
        } else {
            var copiedFrom = document.getElementById(id);
            var copiedText = copiedFrom.innerText;
            var myTempTexArea = document.createElement("textarea");
            myTempTexArea.width = "1px";
            myTempTexArea.height = "1px";
            myTempTexArea.background = "transparent";
            myTempTexArea.value = copiedText;
            document.body.append(myTempTexArea);
            myTempTexArea.select();
            document.execCommand('copy');
            document.body.removeChild(myTempTexArea);
            alert("Text has been copied, now paste it somewhere.");
        }
    }
}