function getSampleText(element) {
    var boxchecked = element.checked;
    if(boxchecked == false) {
            document.getElementById('divetext').innerHTML = "";
        } else {
            document.getElementById('divetext').innerHTML = "";
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/sampleText/sampleText.txt', function(data) {
            document.getElementById('divetext').innerHTML = data;
        });
    }
}