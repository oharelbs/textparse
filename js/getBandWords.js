function getWordList(element) {
    var checkedLists = [];
    var cboxes = ['band0', 'band1', 'band2', 'band3','ListA', 'ListB', 'ListC', 'ListD'];
    cboxesArray = cboxes.toString().split(',');
    for(var i = 0; i<cboxesArray.length; i++) {
        if (document.getElementById(cboxesArray[i]).checked == true) {
        checkedLists.push(cboxesArray[i]);
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
    var excludedWords = ['\/\^at\n', '\/\^out\n', 'so\n', 'the\n', '\/\^or', '\/\^my\n']; // /^beginning of line \n - end of line. Ensures that the word is the only word in that line
    excludedWords = excludedWords.toString().split(',');
    for (var e = 0; e < excludedWords.length; e++) {
        data = data.replace(excludedWords[e], '')
    }

    data = data.split(/\r?\n/).filter(line => line.trim() !== '').join('\n'); //remove extra lines
    return data;
}