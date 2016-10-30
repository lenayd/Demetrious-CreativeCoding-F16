var myGrid; 
var myGrid2; 
var myGrid3; 


function setup() {
	createCanvas(600,500);
	myGrid = new Grid(5, 10, 50, 25, 255, 0, 0, 0); 
	myGrid2 = new Grid(20, 50, 200, 40, 150, 30, 50, PI/8); 
	myGrid3 = new Grid(10, 20, 40, 170, 100, 50, 50, PI/4); 
	
	
}

function draw() {
  myGrid.animate(); 
  myGrid2.animate(); 
  myGrid3.animate(); 
}

function Grid(scale, speed, red, green, blue, xtranslation, ytranslation, rotation){
	this.size = scale; 
	this.vel = speed; 
	this.r = red; 
	this.g = green; 
	this.b = blue; 
	this.rot = rotation; 
	this.x = 1; 
	this.y = 1; 
	this.xtran = xtranslation; 
	this.ytran = ytranslation; 
	this.animate = function(){
	push(); 
	translate(this.xtran, this.ytran); 
	rotate(this.rot); 
		for(var i = 0; i < 50; i += 1){
			for(var j = 0; j < 50; j += 1){
				fill(this.r, this.g, this.b); 
				ellipse(this.x+(i*this.vel), this.y+(j*this.vel), this.size, this.size); 
			}	
		}
	pop(); 
	}
}


