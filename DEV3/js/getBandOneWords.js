function getBandOneWords(element) {
    
    var boxchecked = element.checked;
        if(boxchecked == false) {
            if(document.getElementById('band2').checked = true) {
                document.getElementById('divwl').value = "";
                jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band2.txt', function(data) {
                    document.getElementById('divwl').value = data;
                }
            }




            
        } else {
            document.getElementById('band2').checked = false;
            document.getElementById('band3').checked = false;
            document.getElementById('divwl').value = "";
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/bandWords/band1.txt', function(data) {
            document.getElementById('divwl').value = data;
        });
    }
}