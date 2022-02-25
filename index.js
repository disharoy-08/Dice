//for player 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomI = "images/dice"+ randomNum1 +".png";

document.querySelectorAll("img")[0].setAttribute("src", randomI);

//for player 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomII = "images/dice"+ randomNum2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomII);


if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML =  "Player1 is the Winner";
}
else if(randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player2 is the Winner";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
