var type;   
var tempK; 
var myData; 
var globalData; 
var tempF; 
var back; 
var cityinput; 
var inputButton; 
var city = "New York, ny"; 
var heading = "New York City"; 


function preload(){
	type = loadFont('assets/adam.otf');

}



function setup() {
	createCanvas(600,500);
	baseURL = 'http://api.openweathermap.org/data/2.5/weather?'; 
	APIkey = "43c8edfe75881be8df8ecbee7f44f34f"; 
	url = baseURL + "q=" + city + "&appid=" + APIkey; 
	myData = loadJSON(url, gotData); 
	cityinput = createInput("city, country"); 
	cityinput.position(200, 300); 
	inputButton = createButton("submit"); 
	inputButton.position(340, 300); 
	inputButton.mousePressed(readValue); 

}

function draw() {
	if(globalData){
	tempK = globalData.main.temp; 
  	tempF = int(tempK * (9/5) - 459.67); 
  		if(tempF >= 80){
  			back = '#D21034'; 
  		}
  		if(tempF <= 60){
  			back = '#3081EE'; 
  		}
  		if(tempF > 60 && tempF < 80){
  			back = '#62BD18'; 
  		}
  		background(back); 
  		fill(255); 
  		textFont(type);
  		textSize(50);  
  		text(heading, 90, 100); 
  		textSize(80); 
  		text(str(tempF)+"°F", 210, 200);  		
}

}

function gotData(myData){
	globalData = myData; 
}

function readValue(){
	city = cityinput.value(); 
	heading = split(city, ","); 
	baseURL = 'http://api.openweathermap.org/data/2.5/weather?'; 
	APIkey = "43c8edfe75881be8df8ecbee7f44f34f"; 
	url = baseURL + "q=" + city + "&appid=" + APIkey; 
	myData = loadJSON(url, gotData); 
}


