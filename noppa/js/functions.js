
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

document.getElementById('dice').addEventListener('click', function() {
   
    var randomNumber = Math.floor(Math.random() * 6) + 1;
  

    document.getElementById('dice').src = './kuva/' + randomNumber + '.png';
  });
  
