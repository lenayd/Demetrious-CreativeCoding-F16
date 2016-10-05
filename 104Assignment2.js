var transx = 0; 
var transy = 100; 
var rot = 1; 

function setup() {
	createCanvas(900,500);
	background(255);
	for (var i = 0; i < 5; i += 1){
  	transx += 150; 
  	rot += 1; 
  	push(); 
  	translate(transx,transy); 
  	strokeWeight(2); 
  	fill(255, 0, 127); 
  	rotate(PI/rot); 
  	rect(0,0,60,40); 
  	pop(); 
}
}


