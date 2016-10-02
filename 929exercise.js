var x = 100;
var y = 100;
var s = 10; 
var offset = 20;  

function setup() {
	
	createCanvas(600,600);
}

function draw() {
  
  for(var i = 0; i < 10; i += 1){
  			ellipse((x+(i*offset)), y, s, s);
  }

}