function getBandThreeWords(element) {
    var boxchecked = element.checked;
    if (boxchecked == false) {
        if (document.getElementById('lista').checked = true) {
            document.getElementById('divwl').value = "";
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/lists/ListA.txt', function (data) {
                document.getElementById('divwl').value = data;
            });
        }
        //            document.getElementById('divwl').value = "";
    } else {
        //            document.getElementById('band1').checked = false;
        document.getElementById('band2').checked = false;
        document.getElementById('divwl').value = "";
        jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band3.txt', function (data) {
            var existingData = document.getElementById('divwl').value;
            if (existingData == '')
                document.getElementById('divwl').value = data;
            else
                document.getElementById('divwl').value = existingData + '\n' + data;
        });
    }
}