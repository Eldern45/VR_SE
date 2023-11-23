var counter = 1;
var autoChange = true;

function changeSlide(index) {
    document.getElementById('radio' + index).checked = true;
    counter = index;
    autoChange = false;
}

setInterval(function() {
    if (autoChange) {
        counter++;
        if (counter > 4) {
            counter = 1;
        }
        changeSlide(counter);
    } else {
        autoChange = true;
    }
}, 4000);

document.querySelectorAll('.slides input').forEach(function(radioBtn, index) {
    radioBtn.addEventListener('change', function() {
        if (this.checked) {
            changeSlide(index + 1);
            setTimeout(function() {
                autoChange = true;
            }, 4000);
        }
    });
});
