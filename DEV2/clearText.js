function clearText(id, labelId) {
    if (id === 'divwl') {
        document.getElementById(id).value = "";
        document.getElementById("band2").checked = false;
        document.getElementById("band3").checked = false;
    } else if (id === 'divsl') {
        document.getElementById(id).innerHTML = "";
        document.getElementById('wordsInText').innerHTML = '<span class="headlines">Words Found in Text</span>';
        document.getElementById("divurl").innerHTML = "";
    } else if (id === 'divetext') {
        document.getElementById(id).innerHTML = "";
    } else {
        document.getElementById(id).innerHTML = "";
    }
}