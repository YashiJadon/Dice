var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".jpg"; //dice1.jpg - dice6.jpg

var randomImageSource = "/DOM/" + randomDiceImage; //DOM/dice1.jpg - DOM/dice6.jpg

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "/DOM/dice" + randomNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}