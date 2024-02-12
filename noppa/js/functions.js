
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// Funktio, joka käsittelee klikkaustapahtuman nopan kuvan div-elementille (id dice)
document.getElementById('dice').addEventListener('click', function() {
    // Arvotaan satunnaisluku välillä 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;
  
    // Asetetaan uusi kuva img-elementille (src-ominaisuuteen) arvotun luvun perusteella
    document.getElementById('dice').src = './kuva/' + randomNumber + '.png';
  });
  