function getSampleText(element) {
    var boxchecked = element.checked;
    if(boxchecked == false) {
            document.getElementById('divetext').value = "";
        } else {
            document.getElementById('divetext').value = "";
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/sampleText/sampleText.txt', function(data) {
            document.getElementById('divetext').value = data;
        });
    }
}