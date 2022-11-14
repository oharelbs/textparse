function getWordList(element) {
    var boxchecked = element.checked;
    var elementName = element.name;
    var checkedLists = [];

    var myCheckboxes = ['band0', 'band1', 'band2', 'band3']; //add bands when applicable
    myCheckboxes = myCheckboxes.toString().split(',');

    var listsArray = ['ListA', 'ListB', 'ListC', 'ListD']; //add lists when applicable
    listsArray = listsArray.toString().split(',');

    //band checkboxes
    //first, clear Lists checkboxes and window, so lists and bands are not mixed
    if (elementName.toString().indexOf('band') > -1) { //if we clicked on Band, clear Lists checkboxes
        for (var i = 0; i < listsArray.length; i++) {
            document.getElementById(listsArray[i]).checked = false;
        }

        for (var i = 0; i < myCheckboxes.length; i++) {
            if (document.getElementById(myCheckboxes[i]).checked == true) {
                checkedLists.push(myCheckboxes[i])
            }
        }

    } else { //it's a list
        //first, clear band checkboxes and window, so lists and bands are not mixed
        for (var i = 0; i < myCheckboxes.length; i++) {
            document.getElementById(myCheckboxes[i]).checked = false;
        }

        for (var i = 0; i < listsArray.length; i++) {
            if (document.getElementById(listsArray[i]).checked == true) {
                checkedLists.push(listsArray[i])
            }
        }
    }
    
    populateDivWithCheckedLists(checkedLists.toString());
}

function populateDivWithCheckedLists(checklists) {
    var existingData;
    if (document.getElementById('divwl').value == '') {
        existingData = '';
    } else {
        existingData = document.getElementById('divwl').value;
    }

    if (checklists == '') {
        document.getElementById('divwl').value = "";
        return;
    } else {
        document.getElementById('divwl').value = '';

        checklists = checklists.toString().split(',');
        for (var i = 0; i < checklists.length; i++) {
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/' + checklists[i] + '.txt', function (data) {
                if (checklists.length == 1) {
                    document.getElementById('divwl').value = excludeWord(data);
                } else {
                    document.getElementById('divwl').value += '\n' + excludeWord(data);
                    var divtext = document.getElementById('divwl').value;
                    document.getElementById('divwl').value = divtext.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');
                }
            });
        }
    }
}

function excludeWord(data) {
    var excludedWords = ['\/\^out\n', 'so\n', 'the\n', '\/\^or', '\/\^my\n']; // /^beginning of line \n - end of line. Ensures that the word is the only word in that line
    excludedWords = excludedWords.toString().split(',');
    for (var e = 0; e < excludedWords.length; e++) {
        data = data.replace(excludedWords[e], '')
    }

    data = data.split(/\r?\n/).filter(line => line.trim() !== '').join('\n'); //remove extra lines
    return data;
}