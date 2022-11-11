function getWordList(element) {
    var boxchecked = element.checked;
    var elementName = element.name;

    if (boxchecked == false) {

        uncheckListsAndButtons(element.name)

    } else {
        uncheckListsAndButtons(element.name);
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/' + elementName + '.txt', function (data) {

            if (elementName.toString().indexOf('band') > -1) { //band lists are standalone; we do not join lists
                document.getElementById('divwl').value = "";
                document.getElementById('divwl').value = excludeWord(data);
            }
            //lists are done via uncheckListsAndButtons function
 
        });
    }
}

function uncheckListsAndButtons(elementName) {
    var index;

    var myCheckboxes = ['band0', 'band1', 'band2', 'band3'];//add bands when applicable
    index = myCheckboxes.indexOf(elementName);
    myCheckboxes.splice(index, 1); // 2nd parameter means remove one item only 
    myCheckboxes = myCheckboxes.toString().split(',');

    var listsArray = ['ListA', 'ListB', 'ListC', 'ListD']; //add lists when applicable
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
        var myCheckboxes = ['band0', 'band1', 'band2', 'band3']; //add bands or lists when applicable
        myCheckboxes = myCheckboxes.toString().split(',');

        for (var i = 0; i < myCheckboxes.length; i++) {
            if (document.getElementById(myCheckboxes[i]).checked == true) { //only uncheck and clear if band is checked
                document.getElementById(myCheckboxes[i]).checked = false;
                document.getElementById('divwl').value = ""; //this cleans the div before a new band list appears
            }
        }
        var checkedLists = [];
        for (var i = 0; i < listsArray.length; i++) {
            if (document.getElementById(listsArray[i]).checked == true) {
                checkedLists.push(listsArray[i])
            }
        }
        populateDivWithCheckedLists(checkedLists.toString(), elementName);

    }
}

function populateDivWithCheckedLists(checklists, elementName) {
    var existingData; console.log('84')
    if(document.getElementById('divwl').value == '') {
        existingData = '';
    } else {
        existingData = document.getElementById('divwl').value;
    }

    console.log(checklists)
    if(checklists =='') {document.getElementById('divwl').value = ""; return;}
    else {
        document.getElementById('divwl').value = '';
        
        checklists = checklists.toString().split(',');
    for (var i = 0; i < checklists.length; i++) {
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/' + checklists[i] + '.txt', function (data) {
            if(checklists.length == 1){console.log('99'); document.getElementById('divwl').value = excludeWord(data);}
            else {console.log('100'); document.getElementById('divwl').value += '\n' + excludeWord(data);
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