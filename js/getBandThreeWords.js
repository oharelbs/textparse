function getBandThreeWords(element) {
    var boxchecked = element.checked;
        if(boxchecked == false) {
            document.getElementById('divwl').value = "";
        } else {
            document.getElementById('band2').checked = false;
            document.getElementById('divwl').value = "";
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/band3/band3.txt', function(data) {
            document.getElementById('divwl').value = data;
        });
    }
}