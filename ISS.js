var myData; 
var url = 'http://api.open-notify.org/iss-now.json'; 
var ISS; 

function preload(){
	myData = loadJSON(url); 
	ISS = loadImage("assets/iss.png"); 
}

function setup() {
	createCanvas(1190,560);
	stroke(82, 219, 255); 
	fill(82, 219, 255); 
	rect(0,((5*height)/6), width, (height/6)); 
	stroke(52, 204, 255); 
	fill(52, 204, 255); 
	rect(0, ((4*height/6)), width, (height/6)); 
	stroke(51, 171, 249); 
	fill(51, 171, 249); 
	rect(0, (height/2), width, (height/6)); 
	stroke(47, 141, 255); 
	fill(47, 141, 255); 
	rect(0, (height/3), width, (height/6)); 
	stroke(45, 100, 245);
	fill(45, 100, 245); 
	rect(0, (height/6), width, (height/6)); 
	stroke(47, 86, 233); 
	fill(47, 86, 233);
	rect(0, 0, width, (height/6));
	
	
}

function draw() {
	stroke(82, 219, 255); 
	fill(82, 219, 255); 
	rect(0,((5*height)/6), width, (height/6)); 
	stroke(52, 204, 255); 
	fill(52, 204, 255); 
	rect(0, ((4*height/6)), width, (height/6)); 
	stroke(51, 171, 249); 
	fill(51, 171, 249); 
	rect(0, (height/2), width, (height/6)); 
	stroke(47, 141, 255); 
	fill(47, 141, 255); 
	rect(0, (height/3), width, (height/6)); 
	stroke(45, 100, 245);
	fill(45, 100, 245); 
	rect(0, (height/6), width, (height/6)); 
	stroke(47, 86, 233); 
	fill(47, 86, 233);
	rect(0, 0, width, (height/6));
  	var curlat = myData.iss_position.latitude; 
  	var curlon = myData.iss_position.longitude; 
  	var mappedlat = map(curlat, -90, 90, 0, height); 
  	var mappedlon = map(curlon, -180, 180, 0, width); 
  	image(ISS, mappedlat, mappedlon, 70, 70); 

}