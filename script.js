// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;


// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("");
  ballX = width / 2;
  ballY = height / 2;
  ballRadius = 50;
  ballXVelocity = 20;
  ballGrowth = 10;
}

function draw() {
  background(0, 0, 0)
  drawSquares(random(30, 60));
  drawBall(); 
  drawTriangle();
}

function drawTriangle(){
    triangle(30, 75, 58, 20, 86, 75);
    fill("black");
   
}
function drawBall() {
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
  }
  var circumference = getCircumference(); // local variable
  if(circumference >= 1000 || circumference <= 160) {
    ballGrowth *= -1;
  }
  ballX += ballXVelocity;
  ballRadius += ballGrowth; 
  var ballDiameter = ballRadius * 2; // local variable
  fill("white");
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
  return 2 * PI * ballRadius;
}

function drawSquares(num) {
  // a while loop
  while(num > 0) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(20, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(255); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(20, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
    num--;
  }
}

// another way of drawing squares, but with a for loop (same exact result)
// can you spot the (very few) differences?
function drawSquaresAlt(num) {
  // a for loop
  for(var i = 0; i < num; i++) {
    var randomX = random(width); 
    var randomY = random(height); 
    var randomLength = random(20, 80); 
    var randomRed = random(255); 
    var randomGreen = random(255);
    var randomBlue = random(255);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
  }
}

// create an animation function below, then call it in draw()
// see example.js if you need a place to start!
// when you're ready, be sure to change index.html to link to this script instead of example.js