function popMeUp() {

    document.getElementById("divca").innerHTML = "";
    document.getElementById("divsl").innerHTML = "";
    document.getElementById("divurl").innerHTML = "";

    var text = document.getElementById("divetext").innerHTML;
    var wordlist = document.getElementById("divwl").value;

    //   We need to remove commas with spaces after them, as well as single commas. Also, paranthesys and square brackets with everything in them.
    if (wordlist.indexOf(',') > -1) {
        for (ww = 2000; ww > 0; ww--) {
            wordlist = wordlist.toLowerCase().replace(/[,]/g, "\n").replace(/[ ]/g, "\n").replace(/\([^)]*\)|\[[^\]]*\]/g, ''); //remove () and [] and everything in it
        }
    }

    if (text == "") {
        alert('Let\'s add some text first in the Text field');
        return false;
    }

    if (wordlist == "") {
        alert('Try to add some words in the Word List field, one per line');
        return false;
    }

    //if none of the above is empty, populate the word list

    document.getElementById("divwl").value = wordlist;

    //get only the text from the text area
    var orgtext = text.toString().replace(/\n\s*/g, ' XYYX ').replace(/<br>\s*/g, " "); //replace the full stop, otherwise words that end with . will nto be recognized
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = orgtext;
    var strippedText = temporalDivElement.textContent || temporalDivElement.innerText || ""; //this is the text from the unseen, cleaned of HTML tags

    strippedText = strippedText.replace(/<br>\s*/g, ",").match(/[^ ,]+/g).join(','); //remove new lines and anything with a space
    arrtext = strippedText.toString().split(',');

    /////end of text area preparation

    //get only the text from the word list///
    var orgwordlist = wordlist.toString().replace(/\n\s*/g, "XXX");

    var temporalDivElementWl = document.createElement("divTempwl");
    temporalDivElementWl.innerHTML = orgwordlist;
    var strippedTextWl = temporalDivElementWl.textContent || temporalDivElementWl.innerText || ""; //--> this is the text from the word list

    var arrwl = new Array(strippedTextWl); //copy the data from the temporary div divTempwl
    arrwl = orgwordlist.toString().replace(/\n\s*/g, '').replace(/[ ]/g, '').split('XXX'); //array after split

    var arrtext = new Array(strippedText);
    arrtext = strippedText.toString().replace(/\!/g, '').replace(/\./g, '').replace(/\;/g, '').replace(/\?/g, '').replace(/\"/g, '').replace(/\–/g, '').replace(/\-/g, '').split(',');

    var orgtextf = text.toString();
    var temporalDivElement = document.createElement("divftemp");
    temporalDivElement.innerHTML = orgtextf;
    var strippedText1 = temporalDivElement.textContent || temporalDivElement.innerText || ""; //--> this is the text from the unseen, cleaned of HTML tags

    var wordCounter = 1;

    var temporalDivSLElement = document.createElement("divSLtemp");

    var myWord = matchWords(strippedText1, arrwl); //this matches the text to the list of words
    var sepWords = myWord.toString().split("<br>");

    //populate the divurl list words
    for (var sp = 0; sp < sepWords.length; sp++) {
        document.getElementById("divurl").innerHTML += '<div><a href="https://www.morfix.co.il/' + sepWords[sp] + '" target="_blank">' + sepWords[sp] + '</a></div>';
    }

    document.getElementById("divsl").innerHTML += myWord;

    temporalDivSLElement.innerHTML += sepWords;

    var words = temporalDivSLElement.innerHTML.split(',');

    var newHTML = document.getElementById('divetext').innerHTML;

    words.forEach(word =>
        newHTML = newHTML.replace(word, '<span class="' + myCSSclass() + '">' + word + '</span>'))

    document.getElementById("divca").innerHTML = newHTML; //put it all in the Highlighted text field


    var wordsFound = document.getElementById("divsl").innerText;

    if (wordsFound == '') {
        document.getElementById("wordsInText").innerHTML = '<span class="headlines">Nothing was found</span>';
        return;
    } else if (wordsFound != '') {
        //check if one word
        var count = (wordsFound.match(/[a-zA-Z]\n/g)).length;
        if (count == 1)
            document.getElementById("wordsInText").innerHTML = '<span class="headlines">' + '1/ ' + arrwl.length + ' word found</span>';
        else
            document.getElementById("wordsInText").innerHTML = '<span class="headlines">' + count + ' / ' + arrwl.length + ' words found</span>';
    }
}

function matchWords(orgtextf, arrwl) { //this checks if a word matches
    var regexMetachars = /[(){[*+?.\\^$|]/g;
        
    
    for (var i = 0; i < arrwl.length; i++) {
        arrwl[i] = arrwl[i].replace(regexMetachars, "\\$&");
        
        
    }

    var regex = new RegExp("\\b(?:" + arrwl.join("|") + ")\\b", "gi"); // this shows only complete words
    var regexPL = new RegExp("\\b(?:" + arrwl.join("|") + ")[s]+\\b", "gi"); //this shows only words with plural s / present simple s
    var regexES = new RegExp("\\b(?:" + arrwl.join("|") + ")[es]+\\b", "gi"); //this shows only words with plural es / present simple es
    var regexED = new RegExp("\\b(?:" + arrwl.join("|") + ")[ed]+\\b", "gi"); //this shows only words with ed
    var regexD = new RegExp("\\b(?:" + arrwl.join("|") + ")[d]+\\b", "gi"); //this shows only words with d
    //            var regexING = new RegExp("\\b(?:" + arrwl.join("|") + ")[\n\g]+\\b", "gi"); //this shows only words with ing

    // return orgtextf.match(regex);
    var bbb = [];
    var ccc = [];
    var aaa = orgtextf.match(regex);
    var pl = orgtextf.match(regexPL);
    var es = orgtextf.match(regexES);
    var ed = orgtextf.match(regexED);
    var d = orgtextf.match(regexD);
    //          var pg = orgtextf.match(regexING);

    if (aaa) {
        for (var t = 0; t < aaa.length; t++) {
            if (aaa[t].length > 1) {
                bbb += aaa[t] + '<br>';

                
            }
        }
    }
    if (pl) {
        for (var p = 0; p < pl.length; p++) {
            if (pl[p].length > 0) {
                bbb += pl[p] + '<br>';

                
            }
        }
    }
    if (es) {
        for (var ses = 0; ses < es.length; ses++) {
            if (es[ses].length > 1) {
                bbb += es[ses] + '<br>';

                
            }
        }
    }
    if (ed) {
        for (var e = 0; e < ed.length; e++) {
            if (ed[e].length > 1) {
                bbb += ed[e] + '<br>';

                
            }
        }
    }
    if (sd) {
        for (var sd = 0; sd < d.length; sd++) {
            if (d[sd].length > 1) {
                bbb += d[sd] + '<br>';

                
            }
        }
    }
    //  for(var sn = 0; sn < pg.length; sn++) {
    //     if(pg[sn].length > 1) {
    //         bbb += pg[sn] + '<br>';
    //     }
    //  }

    return (bbb)
}

function myCSSclass() {
    var highlightText = document.getElementById("mudgashText").checked;
    var colorText = document.getElementById("colorText").checked;
    var ulText = document.getElementById("ulText").checked;

    var answer = '';
    var answer1 = '';
    var answer2 = '';
    var answer3 = '';
    var answer4 = ' myText'; //bold

    if (highlightText == true) {
        answer = ' mudgashText ';
    }
    if (colorText == true) {
        answer1 = ' colorText ';
    }
    if (ulText == true) {
        answer2 = ' ulText ';
    }
    if (highlightText == false && colorText == false && ulText == false) {
        answer3 = 'unFormattedText';
    }

    return answer + answer1 + answer2 + answer3 + answer4;
}
