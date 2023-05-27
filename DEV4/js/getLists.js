function getListAWords(element) {
    var boxchecked = element.checked;
    if (boxchecked == false) {
        document.getElementById('divwl').value = "";
    } else {
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/ListA.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;
        });
    }
}

function getListBWords(element) {
    var boxchecked = element.checked;
    if (boxchecked == false) {
        document.getElementById('divwl').value = "";
    } else {
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/ListB.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;

        });
    }
}

function getListCWords(element) {
    var boxchecked = element.checked;
    if (boxchecked == false) {
        document.getElementById('divwl').value = "";
    } else {
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/ListC.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;

        });
    }
}

function getListDWords(element) {
    var boxchecked = element.checked;
    if (boxchecked == false) {
        document.getElementById('divwl').value = "";
    } else {
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/ListD.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;
        });
    }
}

//document.getElementById('band2').checked = false;
//document.getElementById('divwl').value = "";
