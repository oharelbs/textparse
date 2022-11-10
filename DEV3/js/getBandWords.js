function getWordList(element) {
    var boxchecked = element.checked;
    var elementName = element.name;

    if (boxchecked == false) {
        document.getElementById('divwl').value = "";

    } else {
        uncheckListsAndButtons(element.name); //uncheck all checkboxes, except for the element clicked
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/' + elementName + '.txt', function (data) {

            if (elementName.toString().indexOf('band') > -1) { //band lists are standalone; we do not join lists
                document.getElementById('divwl').value = "";
                document.getElementById('divwl').value = excludeWord(data);
            } else { //Lists can be joined
                var existingData = document.getElementById('divwl').value;
                if (existingData == '')
                    document.getElementById('divwl').value = excludeWord(data);
                else
                    document.getElementById('divwl').value = existingData + '\n' + excludeWord(data);
            }
        });
    }
}

function excludeWord(data) {
    //var excludedWords = ['as', 'for', 'in', 'one', 'to', 'out', 'so', 'the', 'or', 'my']; // --> /^beginning of line \n - end of line. Ensures that the word is the only word in that line
    var excludedWords = ['...', ',']; // --> /^beginning of line \n - end of line. Ensures that the word is the only word in that line
    var excludedWords =[]
    excludedWords = excludedWords.toString().split(',');
    for (var e = 0; e < excludedWords.length; e++) {
         data = data.replace(excludedWords[e], '')
    }
    data = data.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, ""); //replace empty lines
    return data;
}

function uncheckListsAndButtons(elementName) {
    var myCheckboxes = ['ListA', 'ListB', 'ListC', 'ListD', 'band0', 'band1', 'band2', 'band3']; //add band1 when applicable

    //remove the element from the array
    var index = myCheckboxes.indexOf(elementName);
    myCheckboxes.splice(index, 1); // 2nd parameter means remove one item only 

    myCheckboxes = myCheckboxes.toString().split(',');
    for (var i = 0; i < myCheckboxes.length; i++) {
        if (elementName.toString().indexOf('band') > -1) { //if element is band, uncheck everything
            document.getElementById(myCheckboxes[i]).checked = false;
            
        } else {                                            //if not band, uncheck only band
            if (myCheckboxes[i].indexOf('band') > -1 && document.getElementById(myCheckboxes[i]).checked == true) {
                document.getElementById(myCheckboxes[i]).checked = false;
                document.getElementById('divwl').value = "";
            }
        }
    }
}
/*
    var myelementLabel = element.id + 'Label';
    var elementLabel = document.getElementById(myelementLabel);
    var nameLabel = elementLabel.getAttribute("labelName");
    document.getElementById(myelementLabel).innerHTML = nameLabel; //change to the value of the checkbox label
    document.getElementById(myelementLabel).innerHTML = nameLabel + ', last updated on ' + getUpdatedTime(elementName); //show when last updated
*/    