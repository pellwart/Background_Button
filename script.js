let btn = document.getElementById('switch');




//Creates random number
function getRandom() {

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}

//Changes background color
function changeBackground() {

    var background = document.getElementsByTagName('body')[0];
    background.style.background = getRandom();

}




btn.addEventListener('click', () => {

    

    changeBackground();
    

});


