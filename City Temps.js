var type; 
var nyc; 
var london; 
var dubai; 
var toronto;  
var tempK; 
var myData; 
var globalData; 
var nyc_bool = true; 
var london_bool = false; 
var dubai_bool = false; 
var toronto_bool = false; 
var mouse = 0; 
var tempF; 
var back; 


function preload(){
	nyc = loadImage("assets/nycreal.png"); 
	london = loadImage("assets/londonreal.png"); 
	dubai = loadImage("assets/dubaireal.png"); 
	toronto = loadImage("assets/torontoreal.png"); 
	type = loadFont('assets/adam.otf');

}



function setup() {
	createCanvas(600,500);
	baseURL = 'http://api.openweathermap.org/data/2.5/weather?'; 
	city = "New York, ny"; 
	APIkey = "43c8edfe75881be8df8ecbee7f44f34f"; 
	url = baseURL + "q=" + city + "&appid=" + APIkey; 
	myData = loadJSON(url, gotData); 
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
  		if(nyc_bool == true){
  			fill(255); 
  			textFont(type);
  			textSize(50);  
  			text('New York City', 90, 100); 
  			textSize(80); 
  			text(str(tempF)+"°F", 210, 200); 
  			image(nyc, -125, 150, 780, 450); 
  		}
  		if(london_bool == true){
  			fill(255); 
  			textSize(50); 
  			text('London', 190, 100); 
  			textSize(80); 
  			text(str(tempF)+"°F", 210, 200); 
  			image(london, 0, 350); 
  		}
  		if(dubai_bool == true){
  			fill(255); 
  			textSize(50); 
  			text('Dubai', 220, 100); 
  			textSize(80); 
  			text(str(tempF)+"°F", 210, 200); 
  			image(dubai, -50, 200, 1000, 300); 
  		}
  		if(toronto_bool == true){
  			fill(255); 
  			textSize(50); 
  			text('Toronto', 175, 100); 
  			textSize(80); 
  			text(str(tempF)+"°F", 210, 200); 
  			image(toronto, -120, 250); 
  		}
}

}

function gotData(myData){
	globalData = myData; 
}

function mouseClicked(){
	mouse += 1; 
	if(mouse == 0){
		nyc_bool = true; 
		london_bool = false; 
		dubai_bool = false; 
		toronto_bool = false;  
		city = "New York, ny"; 
	}
	if(mouse == 1){
		nyc_bool = false; 
		london_bool = true; 
		dubai_bool = false; 
		toronto_bool = false; 
		city = "London, uk"; 
	}
	if(mouse == 2){
		nyc_bool = false; 
		london_bool = false; 
		dubai_bool = true; 
		toronto_bool = false; 
		city = "Dubai, uae"; 
	}
	if(mouse == 3){
		nyc_bool = false; 
		london_bool = false; 
		dubai_bool = false; 
		toronto_bool = true; 
		city = "Toronto, ca"; 
	}
	if(mouse == 4){
		mouse = 0; 
		toronto_bool = false; 
		nyc_bool = true; 
		city = "New York, ny"; 
	}
	url = baseURL + "q=" + city + "&appid=" + APIkey; 
	myData = loadJSON(url, gotData);
}

