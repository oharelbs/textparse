function copyHTMLFunction(containerid) {

  //https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard
  if (window.getSelection) {

    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Text has been copied, now paste it somewhere.");
  }
}