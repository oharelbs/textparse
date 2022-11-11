function getWordList(element) {
    var boxchecked = element.checked;
    var elementName = element.name;

     if (boxchecked == false) {
    //     //document.getElementById('divwl').value = "";

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
    var excludedWords = ['\/\^out\n', 'so\n', 'the\n', '\/\^or', '\/\^my\n']; // --> /^beginning of line \n - end of line. Ensures that the word is the only word in that line
    excludedWords = excludedWords.toString().split(','); //'for', 'in', 'one',
    for (var e = 0; e < excludedWords.length; e++) {
        data = data.replace(excludedWords[e], '')
    }
    data = data.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, ""); //replace empty lines
    return data;
}

function uncheckListsAndButtons(elementName) {
    var index;

    var myCheckboxes = ['band0', 'band1', 'band2', 'band3']; /*['ListA', 'ListB', 'ListC', 'ListD', */ //add bands or lists when applicable
    index = myCheckboxes.indexOf(elementName);
    myCheckboxes.splice(index, 1); // 2nd parameter means remove one item only 
    myCheckboxes = myCheckboxes.toString().split(',');

    var listsArray = ['ListA', 'ListB', 'ListC', 'ListD'];
    index = listsArray.indexOf(elementName);
    listsArray.splice(index, 1); // 2nd parameter means remove one item only 
    listsArray = listsArray.toString().split(',');


    //band checkboxes
    //first, clear Lists checkboxes and window, so lists and bands are not mixed
    if (elementName.toString().indexOf('band') > -1) { //if we cicked on Band, clear Lists checkboxes
        for (var i = 0; i < listsArray.length; i++) {
            document.getElementById(listsArray[i]).checked = false;
        }
        document.getElementById('divwl').value = "";

        //now remove check from other band checkboxes. Bands may not show together
        for (var i = 0; i < myCheckboxes.length; i++) {
            document.getElementById(myCheckboxes[i]).checked = false;
            document.getElementById('divwl').value = ""; //this cleans the div before a new band list appears
        }

    } else { //it's a list
        //first, clear band checkboxes and window, so lists and bands are not mixed
        if(document.getElementById('band0').checked == true ||
           document.getElementById('band1').checked == true ||
           document.getElementById('band2').checked == true ||
           document.getElementById('band3').checked == true)
           document.getElementById('band0').checked = false;
           document.getElementById('band1').checked = false;
           document.getElementById('band2').checked = false;
           document.getElementById('band3').checked = false
            document.getElementById('divwl').value = "";
        }
    }
    
