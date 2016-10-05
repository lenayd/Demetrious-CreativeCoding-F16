
function setup() {
	createCanvas(600,500);
	background(255);
}

function draw() {
  push(); 
  translate(100,100);
  strokeWeight(2); 
  fill(255,0,127); 
  rect(0,0,60,40);
  pop();
  push(); 
  translate(230, 70);
  strokeWeight(2); 
  fill(255,0,127); 
  rotate(PI/4); 
  rect(0,0,60,40);
  pop(); 
  push(); 
  translate(350,80); 
  strokeWeight(2); 
  fill(255,0,127); 
  rotate(PI/2); 
  rect(0,0,60,40); 
  pop(); 
  push(); 
  translate(460, 95); 
  strokeWeight(2); 
  fill(255,0,127); 
  rotate(3*PI/4); 
  rect(0,0,60,40); 
  pop(); 
  push(); 
  translate(500, 100); 
  strokeWeight(2); 
  fill(255,0,127); 
  rotate(2*PI); 
  rect(0,0,60,40); 
  pop(); 

}