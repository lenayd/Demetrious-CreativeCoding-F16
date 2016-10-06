function setup() {
	createCanvas(1000,500);
}

function draw() {
  push(); 
  translate(230, 70);
  strokeWeight(2); 
  fill(255,0,127); 
  rotAmount = map(mouseX, 0, width, 0, PI/4);
  rotate(rotAmount); 
  rect(0,0,60,40);
  pop(); 
  push(); 
  translate(450,80); 
  strokeWeight(2); 
  fill(255,0,127); 
  rotAmount = map(mouseX, 0, width, 0, PI/2);
  rotate(rotAmount); 
  rect(0,0,60,40); 
  pop(); 
  push(); 
  translate(660, 95); 
  strokeWeight(2); 
  fill(255,0,127); 
  rotAmount = map(mouseX, 0, width, 0, 3*PI/4);
  rotate(rotAmount); 
  rect(0,0,60,40); 
  pop(); 
  push(); 
  translate(860, 100); 
  strokeWeight(2); 
  fill(255,0,127); 
  rotAmount = map(mouseX, 0, width, 0, 2*PI);
  rotate(rotAmount); 
  rect(0,0,60,40); 
  pop();   
}