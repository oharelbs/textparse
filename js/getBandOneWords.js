function getBandOneWords(element) {
    
    var boxchecked = element.checked;
        if(boxchecked == false) {
            document.getElementById('divwl').value = "";  
        } else {
            document.getElementById('band2').checked = false;
            document.getElementById('band3').checked = false;
            document.getElementById('divwl').value = "";
            //jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/band1/band1.txt', function(data) {
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band1.txt', function(data) {
            document.getElementById('divwl').value = data;
        });
    }
}