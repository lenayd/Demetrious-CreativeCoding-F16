var xPos; 
var yPos; 
var xVel; 
var yVel;
var xDirection; 
var yDirection;
var bounce;

function preload(){
	bounce = loadSound('assets/boing.mp3'); 
}

function setup(){
  createCanvas(600,500);
  background(255);
  xPos = 1; 
  yPos = 1;
  xVel = 5;
  yVel = 3;
  xDirection = 1; 
  yDirection = 1;
}

function draw(){
  background(255);
  fill(0);
  ellipse(xPos, yPos, 50, 50);
  xPos = xPos + xVel;
  yPos = yPos + yVel;
  if (xPos >= width || xPos <= 0){
  	bounce.play();
    xDirection = -xDirection; 
    xVel = xVel * xDirection; 
  }
  
  if(yPos >= height || yPos <= 0){
  	bounce.play();
    yDirection = -yDirection;
    yVel = yVel * yDirection;
  }
  
}

