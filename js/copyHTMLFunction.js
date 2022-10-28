function copyHTMLFunction(containerid) {

  //https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
 /* if (document.selection) { alert('line4')
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById('divca'));
    range.select().createTextRange();
    document.execCommand("copy");
  } else 
  */
 if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Text has been copied, now paste it somewhere.");
  }
}