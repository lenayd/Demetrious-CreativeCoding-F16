var url; 
var globalData; 
var terms; 
var baseurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
var apikey = '00139f0960fa42e2a4f51d47a8ceafb6'; 
var query; 
var index = 0;
var responseLen;
var heading;
var queens; 
var brooklyn; 
var bronx; 
var titletype; 

function preload(){
	queens = loadImage('assets/queens.png'); 
	brooklyn = loadImage('assets/brooklyn.png'); 
	bronx = loadImage('assets/bronx.png'); 
	titletype = loadFont('assets/type.otf'); 
}

function setup() {
	createCanvas(1100,600);
	terms = ["brooklyn", "queens", "bronx"]; 
	query = terms[index]; 
	url = baseurl + "?api-key=" + apikey + "&q=" + query; 
	setInterval(loadNewData, 5000); 

}

function gotData(myData){
	globalData = myData;
}

function loadNewData(){
	heading = terms[index];
	index += 1; 
	if(index > 2){
		index = 0; 
	}
	query = terms[index]; 
	url = baseurl + "?api-key=" + apikey + "&q=" + query;
	myData = loadJSON(url, gotData);
	gotData;
	printSnippet();

}

function printSnippet(){
	if(globalData){
		background('#ff8106'); 
		if(terms[index] == 'queens'){
			image(queens, 250, 0, 600, height); 
		}
		if(terms[index] == 'brooklyn'){
			image(brooklyn, 250, 0, 600, height); 
		}
		if(terms[index] == 'bronx'){
			image(bronx, 250, 0, 600, height); 
		}
		if(globalData.response.docs.length < 10){
			responseLen = globalData.response.docs.length; 
		}
		else{
			responseLen = 10; 
		}
		textSize(50); 
		textFont(titletype);
		fill(255);  
		text(heading, 450, 50);
		for(i=0; i<globalData.response.docs.length; i++){
			var snippet = globalData.response.docs[i].snippet;
			//textFont("arial"); 
			textSize(10);
			text(snippet, 30, 90+(50*i));  
			}
		
}
}



