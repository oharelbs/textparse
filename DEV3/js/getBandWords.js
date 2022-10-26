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
        document.getElementById('band3').checked = false;
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
        //jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band3.txt', function (data) {
            jQuery.get('/bandWords/band3.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '') {
                document.getElementById('divwl').value = data;
            } else {
                //data = data.match(/^\s*\n/gm)
                document.getElementById('divwl').value = existingData + '\n' + data;
            }
        });
    }
}