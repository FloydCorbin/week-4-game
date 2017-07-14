
// Generate a random number between 19 and 120 to display on page load
// Random number
var magicNumber = Math.floor(Math.random() * (120 - 19) + 19);

$('#magic-number').text(magicNumber);

// On page load listener

$(document).ready(function () {
  magicNumber;

  // Variable that sums the value of any of the buttons which receive a click during the game
  var yourGuess = 0;

  // Intended to hold the value of clicked button
  var clickedValue = 0;

  // 4 Buttons generate a different random number between 1 and 12
  var crystal1 = Math.floor(Math.random() * (3 - 1) + 1);

  var crystal2 = Math.floor(Math.random() * (6 - 3) + 3);

  var crystal3 = Math.floor(Math.random() * (9 - 6) + 6);

  var crystal4 = Math.floor(Math.random() * (12 - 9) + 9);

  // console.log('crystal 1: ' + crystal1);
  // console.log('crystal 2: ' + crystal2);
  // console.log('crystal 3: ' + crystal3);
  // console.log('crystal 4: ' + crystal4);
  // console.log('magicNumber: ' + magicNumber);
  // console.log('clickedValue: ' + clickedValue);

  // Define button click events
  // On click listener that pushes the numbers from each button click to the array, yourGuess

  $('#btn-1').on('click', function button1() {
      crystal1 = parseInt(crystal1);
      crystal1 = yourGuess;
      yourGuess += clickedValue;
      if (yourGuess === magicNumber) {
        gameWins++;
      } else if (yourGuess >= magicNumber) {
        gameLosses++;
        location.reload();
      }
      alert('Your guesses total: ' + yourGuess);
      alert('Clicked');
    });

  $('#btn-2').on('click', function () {
      crystal2 = parseInt(crystal2);
      crystal2 = yourGuess;
      yourGuess += clickedValue;
      if (yourGuess === magicNumber) {
        gameWins++;
      } else if (yourGuess >= magicNumber) {
        gameLosses++;
        location.reload();
      }

      alert('Clicked');
    });

  $('#btn-3').on('click', function () {
      crystal3 = parseInt(crystal3);
      crystal3 = yourGuess;
      yourGuess += clickedValue;
      if (yourGuess === magicNumber) {
        gameWins++;
      } else if (yourGuess >= magicNumber) {
        gameLosses++;
        location.reload();
      }
      alert('Clicked');
    });

  $('#btn-4').on('click', function () {
      crystal4 = parseInt(crystal4);
      crystal4 = yourGuess;
      yourGuess += clickedValue;
      if (yourGuess === magicNumber) {
        gameWins++;
      } else if (yourGuess >= magicNumber) {
        gameLosses++;
        location.reload();
      }
      alert('Clicked');
    });

});

//At the completion of the game, we need to recycle our variables
// Define the game run time to run only as long as the addedVariable is less than the randomNumber
