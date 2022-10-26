function getBandThreeWords(element) {
    var boxchecked = element.checked;
        if(boxchecked == false) {
            document.getElementById('divwl').value = "";
        } else {
//            document.getElementById('band1').checked = false;
            document.getElementById('band2').checked = false;
            document.getElementById('divwl').value = "";
//            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band3.txt', function(data) {
        jQuery.get('bandWords/band3.txt', function(data) {
            document.getElementById('divwl').value = data;
        });
    }
}