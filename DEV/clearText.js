function clearText(id, labelId) {
    if (id === 'divwl') {
        document.getElementById(id).value = "";
        document.getElementById("band1").checked = false;
        document.getElementById("band2").checked = false;
        document.getElementById("band3").checked = false;
    } else if (id === 'divsl' || id === 'divca') {
        document.getElementById(id).innerHTML = "";
        document.getElementById('wordsInText').innerHTML = '<span class="headlines">Words Found in Text</span>';
        document.getElementById("divurl").innerHTML = "";
        document.getElementById("divsl").innerHTML = "";
} else {
        document.getElementById(id).innerHTML = "";
    }
}