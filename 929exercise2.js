var x = 100;
var y = 100;
var s = 10; 
var offset = 20;  

function setup() {
	
	createCanvas(600,600);
}

function draw() {
  
  for(var i = 0; i < 10; i += 1){
  	for(var j = 0; j < 10; j += 1){
  			rect((x+(i*offset)), (y+(j*offset)), s, s);
  		}

  }

}