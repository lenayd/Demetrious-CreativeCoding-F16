var myBounce; 
var myBounce2;
var myBounce3;  
var myBounce4; 

function setup(){
	createCanvas(500,500);
	myBounce = new Ball(15, 5, 7, 3, 30, 30, 40, 60); 
	myBounce2 = new Ball(15, 10, 10, 90, 50, 250, 150, 200); 
	myBounce3 = new Ball(15, 15, 20, 20, 20, 50, 70, 110); 
	myBounce4 = new Ball(15, 20, 30, 40, 70, 50, 80, 230); 
}

function draw(){
	background(255); 
	myBounce.animate(); 
	myBounce2.animate(); 
	myBounce3.animate(); 
	myBounce4.animate(); 
	myBounce.show(); 
	myBounce2.show(); 
	myBounce3.show(); 
	myBounce4.show(); 
}



function Ball(myX, myY, myXVel, myYVel, radius, red, green, blue){
	this.x = myX; 
	this.y = myY; 
	this.xvelocity = myXVel; 
	this.yvelocity = myYVel; 
	this.rad = radius;  
	this.r = red; 
	this.g = green; 
	this.b = blue; 
	this.animate = function(){
		this.x = this.x + this.xvelocity; 
		this.y = this.y + this.yvelocity; 
		if(this.x >= width){
		  this.xvelocity = -myXVel; 
		}
		if(this.x <= 0){
		  this.xvelocity = myXVel; 
		}
		if(this.y >= height){
			this.yvelocity = -myYVel; 
		}
		if(this.y <= 0){
			this.yvelocity = myYVel; 
		}
	}
	this.show = function(){
		fill(this.r, this.g, this.b); 
		ellipse(this.x, this.y,this.rad, this.rad);
	}
};