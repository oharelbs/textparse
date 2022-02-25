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
    var orgtext = text.toString().replace(/\n\s*/g, ' XYYX ').replace(/<br>\s*/g, " "); //replace the full stop, otherwise words that end with . will not be recognized
    var temporaryDivElement = document.createElement("div");
    temporaryDivElement.innerHTML = orgtext;
    var strippedText = temporaryDivElement.textContent || temporaryDivElement.innerText || ""; //this is the text from the unseen, cleaned of HTML tags

    strippedText = strippedText.replace(/<br>\s*/g, ",").match(/[^ ,]+/g).join(','); //remove new lines and anything with a space
    arrtext = strippedText.toString().split(',');

    /////end of text area preparation

    //get only the text from the word list///
    var orgwordlist = wordlist.toString().replace(/\n\s*/g, "XXX");

    var temporaryDivElementWl = document.createElement("divTempwl");
    temporaryDivElementWl.innerHTML = orgwordlist;
    var strippedTextWl = temporaryDivElementWl.textContent || temporaryDivElementWl.innerText || ""; //--> this is the text from the word list

    var arrwl = new Array(strippedTextWl); //copy the data from the temporary div divTempwl
    //arrwl = orgwordlist.toString().replace(/\n\s*/g, '').replace(/[ ]/g, '').split('XXX'); //array after split
    arrwl = orgwordlist.toString().split('XXX'); //array after split

    var arrtext = new Array(strippedText);
    arrtext = strippedText.toString().replace(/\!/g, '').replace(/\./g, '').replace(/\;/g, '').replace(/\?/g, '').replace(/\"/g, '').replace(/\–/g, '').replace(/\-/g, '').split(',');

    var orgtextf = text.toString();
    var temporaryDivElement = document.createElement("divftemp");
    temporaryDivElement.innerHTML = orgtextf;
    var strippedText1 = temporaryDivElement.textContent || temporaryDivElement.innerText || ""; //--> this is the text from the unseen, cleaned of HTML tags

    //var wordCounter = 1;

    var temporaryDivSLElement = document.createElement("divSLtemp");

    var myWord = matchWords(strippedText1, arrwl); //this matches the text to the list of words
    var sepWords = myWord.toString().split("<br>"); //.sort();

    ////////////// this prepares the words for coloring //////////////
    temporaryDivSLElement.innerHTML += sepWords;

    var words = temporaryDivSLElement.innerHTML.split(',');

    var newHTML = document.getElementById('divetext').innerHTML;

    ////////////// this finds and colors the first match it finds for each word //////////////
    // words.forEach(word =>
    //     newHTML = newHTML.replace(word, '<span class="' + myCSSclass() + '">' + word + '</span>'))


    ////////////// this find all of the words and colors them //////////////
    for (var wrds = 0; wrds < words.length - 1; wrds++) {
        newHTML = newHTML.replaceAll(words[wrds], '<span class="' + myCSSclass() + '">' + words[wrds] + '</span>')

    }

    document.getElementById("divca").innerHTML = newHTML; //put it all in the Highlighted text field

    ////////////// count words found //////////////

    //Now we clear the divsl box and add the number of time each word is found
    document.getElementById("divsl").innerHTML = '';
    for (cc = 0; cc < sepWords.length - 1; cc++) { //length-1, because speWords array gives: word, word, word, --> with a trailing comma

        var cw = 0;
        for (dd = 0; dd < sepWords.length; dd++) {

            if (sepWords[cc].toLowerCase() == sepWords[dd].toLowerCase()) {
                cw++;
            }
        }
        document.getElementById("divsl").innerHTML += sepWords[cc] + ' : ' + cw + '<br>';
    }

    //Show unique - remove duplicate from divsl
    var wordNumeralBullet = 0;

    function onlyUnique(value, index, self) {
        if (value != '')
            return self.indexOf(value) === index;
    }

    var divslArray = document.getElementById("divsl").innerHTML;
    divslArray = divslArray.toString().split('<br>');
    var unique = divslArray.filter(onlyUnique);

    document.getElementById("divsl").innerHTML = '';
    document.getElementById("divsl").innerHTML += unique;

    var splitUnique = (document.getElementById("divsl").innerText).toString().split(',');
    splitUnique = splitUnique.sort().join('<br>');

    document.getElementById("divsl").innerHTML = '';
    document.getElementById("divsl").innerHTML += splitUnique;

    //show number of words found    
    if (unique.length - 1 == 0) {
        document.getElementById("wordsInText").innerHTML = '<span class="headlines">I have no words...</span>';
        return;
    } else {
        var divslcount = unique.length - 1;
        document.getElementById("wordsInText").innerHTML = '<span class="headlines">' + divslcount + ' / ' + arrwl.length + ' word(s) found</span>';
    }

    ////////////// this populate the divurl list words //////////////

    var linkedWords = sepWords.filter(onlyUnique);
    linkedWords = linkedWords.toString().split(',').sort();
    
    for (var sp = 0; sp < linkedWords.length; sp++) {
        document.getElementById("divurl").innerHTML += '<div><a href="https://www.morfix.co.il/' + linkedWords[sp] + '" target="_blank">' + linkedWords[sp] + '</a></div>';
    }
}


///////////this section is for identifying the words and returning an array////////////////////

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
    var regexPos = new RegExp("\\b(?:" + arrwl.join("|") + ")[\'s]+\\b", "gi"); //this shows only words with 's
    var regexING = new RegExp("\\b(?:" + arrwl.join("|") + ")[\ing]+\\b", "gi"); //this shows only words with ing

    // return orgtextf.match(regex);
    var bbb = [];

    var aaa = orgtextf.match(regex);
    var pl = orgtextf.match(regexPL);
    var es = orgtextf.match(regexES);
    var ed = orgtextf.match(regexED);
    var d = orgtextf.match(regexD);
    var pos = orgtextf.match(regexPos);
    var pg = orgtextf.match(regexING);

    if (aaa) {
        for (var t = 0; t < aaa.length; t++) {
            if (aaa[t].length > 1) {
                bbb += aaa[t] + '<br>';


            }
        }
    }

    if (pg) {
        for (var pgw = 0; pgw < pg.length; pgw++) {
            if (pg[pgw].length > 1) {
                bbb += pg[pgw] + '<br>';


            }
        }
    }

    if (pos) {
        for (var posw = 0; posw < pos.length; posw++) {
            if (pos[posw].length > 1) {
                bbb += pos[posw] + '<br>';


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