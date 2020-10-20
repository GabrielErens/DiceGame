


  // Dice 1 Change img
  //Select a Random number between 1-6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  //selects an random img from the img folder frondice1.png - dice6.png
  var diceNumber = "images/dice" + randomNumber1 + ".png";

  // assigns an random dice imige to first dice
  document.querySelectorAll("img")[0].setAttribute("src", diceNumber);



  // dice 2 Chage img
    //Select a Random number between 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    //selects an random img from the img folder frondice1.png - dice6.png
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  // assigns an random dice imige to first dice
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
