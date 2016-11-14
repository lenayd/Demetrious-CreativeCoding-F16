var xPos; 
var yPos; 
var xVel; 
var yVel;
var xDirection; 
var yDirection;
var donut; 
var doh;  
var simp; 
var homer; 
var logo; 
var type; 
var play = false; 
var openhomer; 
var toxic; 
var myToxicSym1; 
var myToxicSym2; 
var myToxicSym3; 
var myToxicSym4; 
var myToxicSym5; 
var homerxvel = 10; 
var homerx = 850; 
var homery = 250; 
var win = false; 
var lose = false; 

function preload(){
	donut = loadImage("assets/donut.png"); 
	doh = loadSound("assets/dohsound.mp3"); 
	simp = loadSound("assets/simp.mp3"); 
	homer = loadImage("assets/homer.png"); 
	logo = loadImage("assets/logo.png"); 
	type = loadFont("assets/Simpsonfont.ttf");
	openhomer = loadImage("assets/openhomer.gif");
	toxic = loadImage("assets/toxic.png");
}

function setup(){
  myToxicSym1 = new toxicsymbol(); 
  myToxicSym2 = new toxicsymbol(); 
  myToxicSym3 = new toxicsymbol(); 
  myToxicSym4 = new toxicsymbol(); 
  myToxicSym5 = new toxicsymbol(); 
  createCanvas(1270,575);
  simp.play(); 
  background(209, 178, 234); 
  image(logo,350,50, 500, 200); 
  image(homer, 850, 280, 300, 500); 
  textFont(type); 
  textSize(50); 
  text("the game", 500,280); 
  textSize(20); 
  text("by   lenay   demetrious", 495, 310); 
  textSize(40); 
  text('press   "P"   to   play', 420,420); 
  xPos = 1; 
  yPos = 1;
  xVel = random(1,5);
  yVel = random(1,5);
  xDirection = 1; 
  yDirection = 1;
}

function draw(){
	if(play == true){
	win = false; 
	lose = false; 
  	simp.stop();
  	background(209,178,234);
  	myToxicSym1.animate(); 
  	myToxicSym1.show(homerx, homery); 
  	myToxicSym2.animate(); 
  	myToxicSym2.show(homerx, homery); 
  	myToxicSym3.animate(); 
  	myToxicSym3.show(homerx, homery); 
  	myToxicSym4.animate(); 
  	myToxicSym4.show(homerx, homery); 
  	myToxicSym5.animate(); 
  	myToxicSym5.show(homerx, homery); 
  	image(openhomer, homerx, homery); 
  	image(donut, xPos, yPos, 70, 70);
 	xPos = xPos + xVel;
  	yPos = yPos + yVel;
  	if (xPos >= width || xPos <= 0){
  	doh.play(); 
    xDirection = -xDirection; 
    xVel = xVel * xDirection; 
  }
  
  	if(yPos >= height || yPos <= 0){
  	doh.play(); 
    yDirection = -yDirection;
    yVel = yVel * yDirection;
  }
	if(xPos >= homerx && xPos <= (homerx+100)){
		if(yPos <= (homery+300) && yPos >= homery){
			println("win");
			win = true; 
			play = false; 
		}
	}
  }
  if(win == true){
  	background(209, 178, 234);
  	textFont(type); 
  	textSize(100); 
  	text("You won!", 480, height/2);
  }
  if(lose == true){
  	background(209, 178, 234);
  	textFont(type); 
  	textSize(50); 
  	text('You   lost.   Press   "P"   to   play   again', 220, height/2);
  }
}


function keyPressed(){ 
	println(keyCode);
	if(keyCode == 80){
		play = true; 
		win = false; 
		lose = false;
		myToxicSym1 = new toxicsymbol(); 
  		myToxicSym2 = new toxicsymbol(); 
  		myToxicSym3 = new toxicsymbol(); 
  		myToxicSym4 = new toxicsymbol(); 
  		myToxicSym5 = new toxicsymbol();  
	}
	if(keyCode == 37){
		homerx -= homerxvel; 
	}
	if(keyCode == 39){
		homerx += homerxvel; 
	}
}


function toxicsymbol(){
	this.x = random(1,100); 
	this.y = random(1,100); 
	this.xvel = random(1,5); 
	this.yvel = random(1,5); 
	this.xdirection = 1; 
	this.ydirection = 1; 
	this.animate = function(){
		this.x += this.xvel; 
		this.y += this.yvel; 
		if(this.x >= width || this.x <= 0){
			doh.play(); 
			this.xdirection = -this.xdirection; 
			this.xvel = this.xvel * this.xdirection; 
		}
		if(this.y >= height || this.y <= 0){
			doh.play(); 
			this.ydirection = -this.ydirection; 
			this.yvel = this.yvel * this.ydirection; 
		}
	this.show = function(homerx, homery){
		this.homx = homerx; 
		this.homy = homery; 
		image(toxic, this.x, this.y, 70, 70); 
		if(this.x >= this.homx && this.x <= (this.homx+100)){
		if(this.y <= (this.homy+300) && this.y >= this.homy){
			println("win");
			lose = true; 
			play = false; 
		}
	}

	}
}
};




