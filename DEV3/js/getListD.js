function getListDWords(element) {
    var boxchecked = element.checked;
       if(boxchecked == false) {
           document.getElementById('divwl').value = "";
       } else {
            document.getElementById('band2').checked = false;
            //document.getElementById('divwl').value = "";
            jQuery.get('https://raw.githubusercontent.com/oharelbs/textparse/master/DEV3/lists/ListD.txt', function(data) {
            var existingData = document.getElementById('divwl').value;
            document.getElementById('divwl').value = existingData + data;
        });
   }
}