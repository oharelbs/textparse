//to do: when importing words, remove empty lines at the end
//https://stackoverflow.com/questions/16369642/javascript-how-to-use-a-regular-expression-to-remove-blank-lines-from-a-string

function getBandOneWords(element) {

    var boxchecked = element.checked;
    if (boxchecked == false) {
        //check if the lists are on, and keep them if they are
        var myListbuttons = ['ListA', 'ListB', 'ListC', 'ListD'];
        myListbuttons = myListbuttons.toString().split(',');
        for (var i = 0; i < myListbuttons.length; i++) {
            if (document.getElementById(myListbuttons[i]).checked == true) {
                document.getElementById('divwl').value = "";
                jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/' + myListbuttons[i] + '.txt', function (data) {
                    document.getElementById('divwl').value = data;
                });
            }
        }
    } else {
        document.getElementById('band2').checked = false;
        document.getElementById('band3').checked = false;
        document.getElementById('divwl').value = "";
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band1.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;
        });
    }
}

function getBandTwoWords(element) {

    var boxchecked = element.checked;
    if (boxchecked == false) {

        //check if the lists are on, and keep them if they are
        var myListbuttons = ['ListA', 'ListB', 'ListC', 'ListD'];
        myListbuttons = myListbuttons.toString().split(',');
        for (var i = 0; i < myListbuttons.length; i++) {
            if (document.getElementById(myListbuttons[i]).checked == true) {
                document.getElementById('divwl').value = "";
                jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/' + myListbuttons[i] + '.txt', function (data) {
                    document.getElementById('divwl').value += data;
                });
            }
        }
    } else {
        if(document.getElementById('band3').checked == true) {
            document.getElementById('band3').checked = false;
            document.getElementById("ListA").checked = false;
            document.getElementById("ListB").checked = false;
            document.getElementById("ListC").checked = false;
            document.getElementById("ListD").checked = false;
            document.getElementById('divwl').value = "";
        }
        
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band2.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;
        });
    }
}

function getBandThreeWords(element) {
    var boxchecked = element.checked;
    document.getElementById('divwl').value = "";
    if (boxchecked == false) {
        //check if the lists are on, and keep them if they are
        var myListbuttons = ['ListA', 'ListB', 'ListC', 'ListD'];
        myListbuttons = myListbuttons.toString().split(',');
        for (var i = 0; i < myListbuttons.length; i++) {
            if (document.getElementById(myListbuttons[i]).checked == true) {
                document.getElementById('divwl').value = "";
                jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/' + myListbuttons[i] + '.txt', function (data) {
                    document.getElementById('divwl').value = data;
                });
            }
        }
    } else {
        if(document.getElementById('band2').checked == true) {
            document.getElementById('band2').checked = false;
            document.getElementById('divwl').value = "";
        }
        //jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band3.txt', function (data) {
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/DEV3/band3/band3.txt', function (data) {
                
            var excludedWords = ['for','in','one','to','out'];
            //console.log(data);
            excludedWords = excludedWords.toString().split(',');
            for(var e = 0; e < excludedWords.length; e++) {
                data = data.replace(excludedWords[e], '')
            }//                data = data.match(/^\s*\n/gm)
                
            // const array = [data];
            //     console.log(array);                
            //     const index = array.toString().indexOf('\nfor');
            //     if (index > -1) { // only splice array when item is found
            //       array.splice(index, 1); // 2nd parameter means remove one item only
            //     }
            data = data.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "");     
            console.log(data); 



            var existingData = document.getElementById('divwl').value;
            if (existingData == '') {
                document.getElementById('divwl').value = data;
            } else {

                document.getElementById('divwl').value = existingData + '\n' + data;
            }
        });
    }
}