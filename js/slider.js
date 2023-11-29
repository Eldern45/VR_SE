// Muutujate algväärtustamine: praeguse slaidi indeks ja automaatse vahetuse lipp.
var counter = 1;
var autoChange = true;

// Funktsioon slaidi vahetamiseks antud indeksi alusel.
function changeSlide(index) {
    // Märgitakse vastava indeksiga märkeruut valituks.
    document.getElementById('radio' + index).checked = true;
    
    // Uuendatakse muutujat "counter" praeguse indeksiga.
    counter = index;
    
    // Lülitatakse välja automaase slaidivahetust.
    autoChange = false;
}

// Seadistatakse intervall automaatseks slaidivahetuseks iga 4 sekundi tagant.
setInterval(function() {
    // Kui automaatne vahetus on lubatud.
    if (autoChange) {
        // Suurendatakse slaidi indeks.
        counter++;
        
        // Kui jõutakse slaidide lõppu, naasetakse esimese slaidi juurde.
        if (counter > 4) {
            counter = 1;
        }
        
        // Kutsutaske välja slaidi vahetamise funktsioon uue indeksiga.
        changeSlide(counter);
    } else {
        // Lülitatakse automaatne vahetus sisse manuaalse slaidivahetuse korral.
        autoChange = true;
    }
}, 4000);

// Määratakse sündmuste kuulajad slaidide raadionuppudele.
document.querySelectorAll('.slides input').forEach(function(radioBtn, index) {
    radioBtn.addEventListener('change', function() {
        // Kui raadionupp muutub (valitakse), kutsutaske välja slaidi vahetamise funktsioon vastava indeksiga.
        if (this.checked) {
            changeSlide(index + 1);
            
            // Seadistatakse taimer automaatse vahetuse sisselülitamiseks 4 sekundi pärast.
            setTimeout(function() {
                autoChange = true;
            }, 4000);
        }
    });
});
