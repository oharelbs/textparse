
function downloadInnerHtml(){
var content = document.getElementById('divca').innerHTML;
var converted = htmlDocx.asBlob(content);
saveAs(converted, 'test.docx');
}
/*function downloadInnerHtml(elId) {
    var filename = 'myFile';
    var elHtml = document.getElementById('divca').innerHTML;
    alert(elHtml)
    var link = document.createElement('a');
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + 'text/doc' + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
   }
   var fileName =  'tags.docx'; // You can use the .txt extension if you want
   downloadInnerHtml(fileName, 'main');
   */