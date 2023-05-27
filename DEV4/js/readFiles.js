//DEV DEV DEV
function parseTheFile(inputFile) {

    document.getElementById("divetext").innerHTML = '';

    var files = inputFile.files || [];
    if (!files.length) return;
    var file = files[0];

    console.time();
    var reader = new FileReader();

    //check extenstion - should be docx only
    var extension = inputFile.files[0].name.split('.').pop().toLowerCase()
    
    if (extension == 'docx') {
        parseWordDocxFile(inputFile)
    } else if (extension == 'txt') {
        readFile(inputFile)
    } else {
        alert('Only MS Word docx or txt files are accepted');
        return false;
    }
}

/////text////


function readFile(input) {

    document.getElementById("divetext").innerHTML = '';

    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    //check extenstion - should be txt only
    var extension = input.files[0].name.split('.').pop().toLowerCase()
    if (extension != 'txt') {
        alert('The file must be a txt type. If your file is MSWord (docx), click on the docx button.');
        return false;
    }

    reader.onload = function () {
        document.getElementById("divetext").innerHTML = reader.result;

    };

    reader.onerror = function () {
        console.log(reader.error);
        document.getElementById("divetext").innerHTML = reader.error;

    };
}



/////docx////
//taken from https://jstool.gitlab.io/demo/mammoth-js-word-docx-preview-and-convert/

function parseWordDocxFile(inputElement) {

    document.getElementById("divetext").innerHTML = '';

    var files = inputElement.files || [];
    if (!files.length) return;
    var file = files[0];

    console.time();
    var reader = new FileReader();

    //check extenstion - should be docx only
    var extension = inputElement.files[0].name.split('.').pop().toLowerCase()
    if (extension != 'docx') {
        alert('The file must be an MSWord (docx) type. If your file is txt, click on the txt button.');
        return false;
    }


    reader.onloadend = function (event) {
        var arrayBuffer = reader.result;

        mammoth.convertToHtml({
            arrayBuffer: arrayBuffer
        }).then(function (resultObject) {
            document.getElementById('divetext').innerHTML = resultObject.value
        })
        console.timeEnd();

        //We do not need the option below.
        /*mammoth.extractRawText({arrayBuffer: arrayBuffer}).then(function (resultObject) {
        //result2.innerHTML = resultObject.value
        //alert(resultObject.value)
        })

        mammoth.convertToMarkdown({arrayBuffer: arrayBuffer}).then(function (resultObject) {
        //result3.innerHTML = resultObject.value
        //alert(resultObject.value)
        }) */
    };
    reader.readAsArrayBuffer(file);
}