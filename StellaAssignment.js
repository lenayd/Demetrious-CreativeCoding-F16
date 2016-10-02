var x = 218; 
var y = 215; 
var w = 200; 
var h = 20; 

function setup() {
	createCanvas(635,450);
	background(51);
	stroke(255);
	strokeWeight(1.25);
	noFill();
	rect(x,y,w,h);
	for(var i = 0; i < 14; i+=1){
		strokeWeight(1.25);
		stroke(255);
		noFill();
		x -= 15; 
		y -= 15; 
		w += 30; 
		h += 30;
		rect(x,y,w,h);
  }
}

function draw() {
	
}