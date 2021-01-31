var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  background("Yellow")
  textSize(35)

  text("Don't worry, we don't store you name, or any other info.", 50, 180)
  textSize(20)

  text("Times people visited: " + playerCount + " and counting! (*this is not a very accurate number)", 20, 210)
  textSize(18)
  text("please help in increasing it, by sharing this website to as many people as possible", 20, 240)
  textSize(23)
  text("What this page wants to tell you:", 40, 475)
  text("I am sorry for being so un-attractive... but i hope u find my share of attraction in the up coming pages", 20, 500)


  drawSprites()
}
