function clearList() {
    
    document.getElementById("divwl").value = "";
    var myCheckboxes = ['ListA', 'ListB', 'ListC', 'ListD', 'band1', 'band2', 'band3']; //add band1 when applicable
        myCheckboxes = myCheckboxes.toString().split(',');
        for (var i = 0; i < myCheckboxes.length; i++) {
                document.getElementById(myCheckboxes[i]).checked = false;
    }
}