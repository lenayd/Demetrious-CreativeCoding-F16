var rectArray = []; 
var asound; 
var bsound; 
var csound; 
var dsound; 
var esound; 
var fsound; 
var gsound;
var abool = false;  
var bbool = false;  
var cbool = false;  
var dbool = false;  
var ebool = false;  
var fbool = false;  
var gbool = false;  
var fillr = 255; 
var fillg = 255; 
var fillb = 255; 
var afillr = 255; 
var bfillr = 255;
var cfillr = 255;
var dfillr = 255;
var efillr = 255;
var ffillr = 255;
var gfillr = 255;
var afillg = 255; 
var bfillg = 255; 
var cfillg = 255; 
var dfillg = 255; 
var efillg = 255; 
var ffillg = 255; 
var gfillg = 255; 
var afillb = 255; 
var bfillb = 255; 
var cfillb = 255; 
var dfillb = 255; 
var efillb = 255; 
var ffillb = 255; 
var gfillb = 255; 

function preload(){
	asound = loadSound("assets/A.mp3"); 
	bsound = loadSound("assets/B.mp3");
	csound = loadSound("assets/C.mp3");
	dsound = loadSound("assets/D.mp3");
	esound = loadSound("assets/E.mp3");
	fsound = loadSound("assets/F.mp3");
	gsound = loadSound("assets/G.mp3"); 
}

function setup() {
	createCanvas(1250,565);
	background(255, 187, 218);

}

function keyPressed(){
	if(keyCode == 65){
		abool = true; 
		bbool = false; 
		cbool = false; 
		dbool = false; 
		ebool = false; 
		fbool = false; 
		gbool = false; 
		temp_rect = new myRect(300,250,'a', asound, 249, 140, 182); 
		rectArray.push(temp_rect); 
	}
	else if (keyCode == 66){
		bbool = true; 
		abool = false; 
		cbool = false; 
		dbool = false; 
		ebool = false; 
		fbool = false; 
		gbool = false; 
		temp_rect = new myRect(300,250,'b', bsound, 117, 137, 191); 
		rectArray.push(temp_rect);
	}
	else if (keyCode == 67){
		cbool = true;
		bbool = false; 
		abool = false; 
		dbool = false; 
		ebool = false; 
		fbool = false; 
		gbool = false;  
		temp_rect = new myRect(300,250,'c', csound, 72, 181, 163); 
		rectArray.push(temp_rect);
	}
	else if (keyCode == 68){
		dbool = true; 
		bbool = false; 
		cbool = false; 
		abool = false; 
		ebool = false; 
		fbool = false; 
		gbool = false; 
		temp_rect = new myRect(300,250,'d', dsound, 133, 202, 93); 
		rectArray.push(temp_rect);
	}
	else if (keyCode == 69){
		ebool = true; 
		bbool = false; 
		cbool = false; 
		dbool = false; 
		abool = false; 
		fbool = false; 
		gbool = false; 
		temp_rect = new myRect(300,250,'e', esound, 252, 169, 133); 
		rectArray.push(temp_rect);
	}
	else if (keyCode == 70){
		fbool = true; 
		bbool = false; 
		cbool = false; 
		dbool = false; 
		ebool = false; 
		abool = false; 
		gbool = false; 
		temp_rect = new myRect(300,250,'f',fsound, 255, 237, 81); 
		rectArray.push(temp_rect);
	}
	else if (keyCode == 71){
		gbool = true;
		bbool = false; 
		cbool = false; 
		dbool = false; 
		ebool = false; 
		fbool = false; 
		abool = false;  
		temp_rect = new myRect(300,250, 'g', gsound, 111, 183, 214); 
		rectArray.push(temp_rect); 
	}
	

}

function draw() {
  if(abool == true){
  	afillr = 249; 
  	afillg = 140; 
  	afillb = 182; 
  	
  }
  if(bbool == true){
  	bfillr = 117
  	bfillg = 137
  	bfillb = 191
  	
  }
  if(abool == false){
  	afillr = 255; 
  	afillg = 255; 
  	afillb = 255; 
  }
  if(bbool == false){
  	bfillr = 255; 
  	bfillg = 255; 
  	bfillb = 255; 
  }
  if(cbool == true){
  	cfillr = 72
  	cfillg = 181
  	cfillb = 163
  }
  if(cbool == false){
  	cfillr = 255;
  	cfillg = 255;
  	cfillb = 255;
  }
  if(dbool == true){
  	dfillr = 133
  	dfillg = 202
  	dfillb = 93
  }
  if(dbool == false){
  	dfillr = 255; 
  	dfillg = 255; 
  	dfillb = 255; 
  }
  if(ebool == true){
  	efillr = 252
  	efillg = 169
  	efillb = 133
  }
  if(ebool == false){
  	efillr = 255; 
  	efillg = 255; 
  	efillb = 255; 
  }
  if(fbool == true){
  	ffillr = 255
  	ffillg = 237
  	ffillb = 81
  }
  if(fbool == false){
  	ffillr = 255; 
  	ffillg = 255; 
  	ffillb = 255; 
  }
  if(gbool == true){
  	gfillr = 111
  	gfillg = 183
  	gfillb = 214
  }
  if(gbool == false){
  	gfillr = 255; 
  	gfillg = 255; 
  	gfillb = 255; 
  }
  if(abool == false && bbool == false && cbool == false && dbool == false && ebool == false && fbool == false && gbool == false){
  	fillr = 255; 
  	fillg = 255; 
  	fillb = 255; 
  }
  background(255, 187, 218); 
  stroke(255,187,218);
  fill(cfillr, cfillg, cfillb); 
  rect(450, 320, 50, 235); 
  fill(dfillr, dfillg, dfillb); 
  rect(500,320,50,235);  
  fill(efillr, efillg, efillb);  
  rect(550,320,50,235); 
  fill(ffillr, ffillg, ffillb); 
  rect(600,320,50,235); 
  fill(gfillr, gfillg, gfillb); 
  rect(650,320,50,235); 
  fill(afillr, afillg, afillb); 
  rect(700,320,50,235); 
  fill(bfillr, bfillg, bfillb); 
  rect(750,320,50,235); 
  fill(0); 
  rect(485,320, 30, 140);
  rect(535, 320, 30, 140);
  rect(635, 320, 30, 140); 
  rect(685, 320, 30, 140);
  rect(735, 320, 30, 140); 
  textSize(30);
  textFont('Verdana'); 
  stroke(0); 
  text('C', 465,530);
  text('D', 515,530);
  text('E', 565,530);
  text('F', 615,530);
  text('G', 665,530);
  text('A', 715,530);
  text('B', 765,530);
  for(i = 0; i < rectArray.length; i += 1){
  	rectArray[i].animate(); 
  	rectArray[i].show(); 
  	rectArray[i].initialize(); 
  }
}

function myRect(xVal,yVal,key, sound, red, green, blue){
	this.x = xVal; 
	this.y = yVal; 
	this.s = 50; 
	this.xvel = 5; 
	this.yvel = 5; 
	this.k = key; 
	this.playsound = sound; 
	this.r = red; 
	this.g = green; 
	this.b = blue; 
	this.initialize = function(){
		println(this.k); 
	} 
	this.animate = function(){
		this.x += this.xvel; 
		this.y += this.yvel; 
		if(this.x >= width || this.x <= 0){
			this.xvel = -this.xvel; 
			this.playsound.play(); 
			
	}
		if(this.y >= height || this.y <= 0){
			this.yvel = -this.yvel; 
			this.playsound.play(); 
			
			

}
	this.show = function(){
		stroke(this.r, this.g, this.b); 
		fill(this.r, this.g, this.b); 
		rect(this.x, this.y, this.s, this.s); 
	}
}
};

