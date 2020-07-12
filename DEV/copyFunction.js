function copyFunction(id) {
    //this copies a regular textarea field
    if (id == "divwl") {

        var copyText = document.getElementById(id);
        copyText.select();
        document.execCommand("copy");
    } else {
        //this copies a div field
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
    }
}
