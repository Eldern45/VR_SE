// script.js

function loadContent(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.open();
        document.write(this.responseText);
        document.close();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
