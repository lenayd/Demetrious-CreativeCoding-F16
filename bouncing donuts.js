var donutArray = []; 
var doh; 

function preload(){
	doh = loadSound("assets/dohsound.mp3"); 
}

function setup() {
	createCanvas(600,500);
	background(255);

}

function keyPressed(){
	temp_donut = new donut(mouseX, mouseY); 
	donutArray.push(temp_donut); 
}

function draw() {
	background(255);  
	for(i = 0; i < donutArray.length; i += 1){
		donutArray[i].animate(); 
		donutArray[i].show(); 
	}

  
}

function donut(xVal, yVal){
	this.x = xVal; 
	this.y = yVal; 
	this.s = 50;  
	this.inner = 25; 
	this.xvel = 5; 
	this.yvel = 5; 
	this.animate = function(){
		this.x += this.xvel; 
		this.y += this.yvel; 
		if(this.x >= width || this.x <= 0){
			this.s += 3; 
			this.inner += 3; 
			this.xvel = -this.xvel; 
			doh.play(); 
			this.r = random(0,255); 
			this.g = random(0,255); 
			this.b = random(0,255); 
		}
		if(this.y >= height || this.y <= 0){
			this.s += 3; 
			this.inner += 3; 
			this.yvel = -this.yvel; 
			doh.play();
			this.r = random(0,255); 
			this.g = random(0,255); 
			this.b = random(0,255);  
	}
	this.show = function(){
		strokeWeight(2); 
		fill(this.r,this.g,this.b); 
		ellipse(this.x, this.y, this.s, this.s); 
		fill(255);  
		ellipse(this.x, this.y, this.inner, this.inner); 
	}

	}
}; 