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

    strippedText = strippedText.replace(/<br>\s*/g, ",").match(/[^ ,]+/g).join(',');//remove new lines and anything with a space
    arrtext = strippedText.toString().split(',');

    /////end of text area preparation

    //Word List parse and capital letters/////
    //get only the text from the word list///
    var orgwordlist = wordlist.toString().replace(/\n\s*/g, "XXX");

    var temporalDivElementWl = document.createElement("divTempwl");
    temporalDivElementWl.innerHTML = orgwordlist;
    var strippedTextWl = temporalDivElementWl.textContent || temporalDivElementWl.innerText || ""; //--> this is the text from the word list

    //let's add capital letters if the band three checkbox is false
    if(document.getElementById('band3').checked == false && document.getElementById('band2').checked == false) {
        var wrds = [];
        wrds = orgwordlist;
        wrds = wrds.toString().split('XXX');
        for (var t = 0; t < wrds.length; t++) {
            if (t == 0) { //add a new line for the first item in the list, in case there is no line break before
                nt = '\n' + wrds[0].charAt(0).toUpperCase() + wrds[0].slice(1)+'\n';
            } else if (t > 0) { //for the rest of the items in the list
                nt = wrds[t].charAt(0).toUpperCase() + wrds[t].slice(1)+'\n';
            }
            document.getElementById("divwl").value += nt;
        }
    }
    ////////End of Word List parse and capital letters/////

    var arrwl = new Array(strippedTextWl); //copy the data from the temporary div divTempwl
    arrwl = orgwordlist.toString().replace(/\n\s*/g, '').replace(/[ ]/g, '').split('XXX'); //array after split

    var arrtext = new Array(strippedText);
    arrtext = strippedText.toString().replace(/\!/g, '').replace(/\./g, '').replace(/\;/g, '').replace(/\?/g, '').replace(/\"/g, '').replace(/\–/g, '').replace(/\-/g, '').split(','); 

    var orgtextf = text.toString();
    var temporalDivElement = document.createElement("divftemp");
    temporalDivElement.innerHTML = orgtextf;
    var strippedText1 = temporalDivElement.textContent || temporalDivElement.innerText || ""; //--> this is the text from the unseen, cleaned of HTML tags

    var wordCounter = 1;
    var array3 = []; //test
    var arrSText = []; //test
    var temporalDivSLElement = document.createElement("divSLtemp");

    if(document.getElementById("wholeWord").checked == false) { 
        
         for (var b = 0; b < arrwl.length; b++) {
            
            if (strippedText.indexOf(arrwl[b]) > -1 && arrwl[b].length !=0){//words containing other words   

                    temporalDivSLElement.innerHTML +=arrwl[b]+',';
                    arrSText  +=arrwl[b]+',';

                document.getElementById("divsl").innerHTML += wordCounter++ + '. ' + arrwl[b] + '<br>';
                document.getElementById("divurl").innerHTML += '<div><a href="https://www.morfix.co.il/' + arrwl[b] + '" target="_blank">' + arrwl[b] + '</a></div>';
            }
        }
    }
    
        else {
           for(var z = 0; z < arrtext.length; z++) {

                for (var b = 0; b < arrwl.length; b++) { //words are the same
                    if (arrtext[z] === arrwl[b] && arrtext[z].length != 0){//words containing other words
                        
                        // if(arrtext[z].length == arrwl[b].length){
                        //     array3.push(arrwl[b] + ' length --> ' + arrwl[b].length + '  arrtext ' + arrtext[z] + '  length: '+arrtext[z].length);
                        // }

                        temporalDivSLElement.innerHTML +=arrwl[b]+',';
                        document.getElementById("divsl").innerHTML += wordCounter++ + '. ' + arrwl[b] + '<br>';
                        document.getElementById("divurl").innerHTML += '<div><a href="https://www.morfix.co.il/' + arrwl[b] + '" target="_blank">' + arrwl[b] + '</a></div>';
                    }
                }
            } 
       }
    console.log('hbs --> ' + array3);

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
        if(count == 1)
            document.getElementById("wordsInText").innerHTML = '<span class="headlines">' + '1/ ' + arrwl.length + ' word found</span>';
        else
            document.getElementById("wordsInText").innerHTML = '<span class="headlines">' + count + ' / ' + arrwl.length + ' words found</span>';
    }


}


function myCSSclass() {
    var highlightText = document.getElementById("myBlueText").checked;
    var colorText = document.getElementById("colorText").checked;
    var ulText = document.getElementById("ulText").checked;

    var answer = '';
    var answer1 = '';
    var answer2 = '';
    var answer3 = '';
    var answer4 = ' myText'; //bold

    if (highlightText == true) {
        answer = ' myBlueText ';
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
</script>