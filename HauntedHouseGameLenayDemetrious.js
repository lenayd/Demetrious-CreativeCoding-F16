/* 
Lenay Demetrious Midterm Project
This is the code for a game. The plot of the game is that the user is walking 
their dog, which breaks free from them and enters an abandoned-looking house. 
The house is a haunted house, and there are many ways to die and/or get trapped
within the house if the user makes the wrong choices. Each room/screen has two 
choices. Depending on which choice the user makes on that screen, as well as 
their previous choices, the user will either ultimately die, get trapped, or 
escape the haunted house alive. If the user dies or gets trapped, they will 
have the option to play again. If the user escapes, they will not have this 
option.  
*/

//setting up the variables globally that we will need for all the functions
var enter_house_bool = false; 
var parlour_bool = false; 
var stair_bool = false; 
var bathroom_death_bool = false; 
var main_menu_bool = true;
var gbye_bool = false;  
var kitchen_bool = false; 
var knife_death_bool = false; 
var dining_bool = false;  
var mouse_bool = false; 
var bathroom_death_bool = false; 
var photo_death_bool = false; 
var bedroom_bool = false; 
var closet_death_bool = false; 
var window_escape_bool = false; 
var escape_bool = false; 
var cellar_death_bool = false; 
var trapped_bool = false; 
var chandelier_death_bool = false; 
var death_bool = false; 
var ellipse_start_x = 550; 
var ellipse_start_y = 350; 
var ellipse_offset = 100; 


function setup() {

}

//mouseClicked function controls a boolean that is triggered when mouse is clicked
function mouseClicked(){
  mouse_bool = true; 

}

//setting up the logic needed for all the screens 
function draw() {
  if(main_menu_bool == true){
    main_menu(); 
  }

  if(enter_house_bool == true){
      enter_house(); 
  }
  else if(parlour_bool == true){
      parlour();
  }
  else if(stair_bool == true){
      stairs(); 
  }
  else if(dining_bool == true){
    dining_room();
  }
  else if(bathroom_death_bool == true){
      bathroom_death();
  }
  else if(gbye_bool == true){
    goodbye(); 
  }
  else if(kitchen_bool == true){
    kitchen(); 
  }
  else if(knife_death_bool == true){
    knife_death();
  }
  else if(death_bool == true){
    death();
  }
  else if(bathroom_death_bool == true){
    bathroom_death();
  }
  else if(photo_death_bool == true){
    photo_death();
  }
  else if(bedroom_bool == true){
    bedroom();
  }
  else if(closet_death_bool == true){
    closet_death();
  }
  else if(window_escape_bool == true){
    window_escape();
  }
  else if(escape_bool == true){
    escape();
  }
  else if(cellar_death_bool == true){
    cellar_death();
  }
  else if(trapped_bool == true){
    trapped();
  }
  else if(chandelier_death_bool == true){
    chandelier_death();
  }
}

//draws the left button for all the screens
function left_button(){
  stroke(0);
  fill(255,0,0); 
  rect(200, 370,300,150);
}

//draws the right button for all the screens
function right_button(){
  stroke(0);
  fill(255,0,0);
  rect(700, 370,300,150); 
}

//draws the play button, which is also used as a miscellaneous center button for other screens 
function play_button(){
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  textFont("Impact");
  text("PLAY", 570, 375); 
}

//this is the main menu screen 
function main_menu(){
  createCanvas(1270, 580); 
  background(255,0,0);
  play_button(); 
  textSize(100); 
  fill(0);
  textFont("Impact");
  text("Haunted House Escape!", 160,120);
  textSize(60); 
  textFont("Impact");
  text("a game by Lenay Demetrious", 265, 200);
  //if the user hits the play button, they will begin the game 
  if (mouse_bool == true){
      if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
        enter_house_bool = true; 
        mouse_bool = false; 
        main_menu_bool = false;
      }
  }
}

//first screen user sees after they hit play 
function enter_house(){   
  createCanvas(1270, 580);
  background(255);
  textSize(30);
  fill(0); 
  text("You are walking your dog after work.", 100, 100)
  text("As you walk him, he breaks free from his leash and runs away from you fast.", 100, 150)
  text("You run after him toward the direction of his barking.", 100, 200)
  text("You come across an old, decrepit house. You hear him barking inside.", 100, 250)
  text("You enter the house. It is deadly silent.", 100, 300)
  left_button(); 
  right_button(); 
  textSize(50);
  fill(0);
  text("Go left", 290, 460); 
  text("Go right", 770, 460); 
  //if the user hits the left button, they will enter the parlour
  if (mouse_bool == true){
      if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){ 
        parlour_bool = true; 
        mouse_bool = false; 
        enter_house_bool = false;
     }
     //if the user hits the right button, they will enter the kitchen
      if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
        kitchen_bool = true; 
        mouse_bool = false; 
        enter_house_bool = false;
      }
    }


}
//parlour screen 
function parlour(){
  death_bool=false;
  createCanvas(1270, 580);
  background(255);
  textSize(30);
  fill(0); 
  text("You enter a parlour. It is dark. The electricity seems to be out.", 100, 100);
  text("The moonlight barely illuminates the room. You see a coffee table, couch, and door.", 100, 150);
  text("The door is partially open and light shines through the crack.", 100, 200);
  text("The coffee table has some old photographs on it.", 100, 250);
  text("Perhaps the pictures might explain who owns/owned this house?", 100, 300);
  left_button(); 
  right_button(); 
  textSize(40); 
  fill(0); 
  text("Observe photos", 230, 460);
  textSize(50);
  text("Go to door", 750, 460);
  //if the user hits the left button, they will enter the stairs function
  if (mouse_bool == true){ 
      if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){ 
        stair_bool = true; 
        mouse_bool = false; 
        parlour_bool = false; 
     }
     //if the user hits the right button, they will enter the bathroom
      if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
        dining_bool = false;
        bathroom_death_bool = true; 
        mouse_bool = false; 
        parlour_bool = false; 
      }
    }

}

//stairs function 
function stairs(){
  createCanvas(1270, 580);
  background(255);
  textSize(30);
  textFont("Impact");
  fill(0); 
  text("One picture shows a woman lying on the floor with a slit in her throat.", 100,100);
  text("Another picture shows a severed hand.", 100, 150); 
  text("The third picture is of a bloody chainsaw.", 100, 200); 
  text("You hear a faint creaking of a door. It could just be the wind...", 100, 250);
  left_button(); 
  right_button(); 
  textSize(40); 
  fill(0); 
  text("Keep observing", 225, 460); 
  textSize(26); 
  text("Leave room and go upstairs", 705, 460); 
  //if the user hits the left button, they will enter the photo_death function 
  if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){
    if(mouse_bool == true){     
      photo_death_bool = true; 
      mouse_bool = false;
      stair_bool = false; 
      }
    }
  //if the user hits the right button, they will enter the bedroom
  if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
    if(mouse_bool == true){ 
      bedroom_bool = true; 
      mouse_bool = false; 
      stair_bool = false; 
    }
  }

  }



//death screen 
function death(){
  createCanvas(1270, 580); 
  background(255,0,0);
  textSize(100); 
  fill(0); 
  text("You have DIED.", 360,100); 
  textSize(70); 
  text("Try again?", 490,200);
  fill(0); 
  rect(200, 370,300,150); 
  fill(0);
  rect(700, 370,300,150);
  textSize(100); 
  fill(255);
  text("YES", 280, 480);
  text("NO", 790, 480);
  //if the user hits the left button, they will play again
  if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){
    if(mouse_bool == true){     
      main_menu_bool = true; 
      mouse_bool = false; 
      death_bool = false; 
      }
    }
  //if the user hits the right button, a goodbye screen will pop up
  if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
    if(mouse_bool == true){ 
      gbye_bool = true; 
      mouse_bool = false; 
      death_bool = false; 
    }
  }

}
//the goodbye screen 
function goodbye(){
  createCanvas(1270, 580); 
  background(255,0,0);
  textSize(100); 
  fill(0); 
  text("Have a Scary Day!", 300,310); 
  //for loop controls the graphics on this screen 
  for(var i = 0; i < 3; i += 1){ 
    smileyface(ellipse_start_x+(ellipse_offset*i), ellipse_start_y); 
  }
  gbye_bool = false;
}
//function needed for the goodbye screen's graphics
function smileyface(x,y){
  noFill();
  strokeWeight(2);
  ellipse(x, y, 50, 50); 
  fill(0);
  ellipse(x - 10, y - 10, 10, 10); 
  ellipse(x + 10, y - 10, 10, 10); 
  line(x - 5, y + 5, x - 5, y + 10); 
  line(x+5, y +5, x+5, y +10 ); 
  line(x-5, y+10, x+5, y+10);
}
//kitchen screen 
function kitchen(){ 
  createCanvas(1270, 580);
  background(255);
  textSize(30);
  fill(0);
  text("Kitchen state", 100,100);
  left_button(); 
  right_button();
  fill(0);
  textSize(40); 
  text("Observe knives", 230, 460);
  textSize(50);
  text("Go to door", 750, 460);
  //if the user hits the left button they will enter the knife_death function 
  if(mouse_bool == true){
    if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){
      knife_death_bool = true; 
      mouse_bool = false; 
      kitchen_bool = false; 
  }
  //if the user hits the right button they will enter the dining room
      if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
      dining_bool = true; 
      mouse_bool = false; 
      kitchen_bool = false; 
    }
  }
}
//knife_death screen 
function knife_death(){
  createCanvas(1270, 580);
  background(255);
  textSize(50);
  fill(0);
  text("One of the floating knives flies right out to you! Watch out!", 70, 250);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("DUCK", 555, 375); 
  //if the user hits the button, they will die 
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      enter_house_bool = false; 
      mouse_bool = false; 
      knife_death_bool = false; 
      death_bool = true; 
    }
  }
}
//bathroom_death screen
function bathroom_death(){
  createCanvas(1270, 580);
  background(255);
  textSize(50);
  textFont("Impact");
  fill(0);
  text("There's a man holding a chainsaw in the bathroom! AHHHH!", 50, 250);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("RUN", 580, 375); 
  //if the user hits the button, they will die
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      console.log("clicked from bathroom_death function");
      death_bool = true; 
      mouse_bool = false;  
      bathroom_death_bool = false; 
    }
  }
  }

//photo_death screen 
function photo_death(){
  createCanvas(1270, 580);
  background(255);
  textSize(50);
  textFont("Impact");
  fill(0);
  text("A figure emerges from the door. He's holding a chainsaw!", 70, 250);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("RUN", 580, 375); 
  //if the user hits the button, they will die 
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      death_bool = true; 
      mouse_bool = false;  
      photo_death_bool = false; 
    }
  }
  }
//bedroom screen 
function bedroom(){ 
  createCanvas(1270, 580);
  background(255);
  textSize(30);
  textFont("Impact");
  fill(0);
  text("As you climb the stairs, you hear a chainsaw coming from the parlour.", 100,100);
  text("You turn around and a man is behind you holding the chainsaw! You run as fast as you can.", 100, 150); 
  text("On the top of the stairs is a bedroom. You run to it and lock the door.", 100, 200); 
  text("There is a closet in the room and a half-open window. He'll saw down the door any second!", 100, 250);
  left_button(); 
  right_button();
  fill(0);
  textSize(40); 
  text("Hide in closet", 240, 460);
  textSize(40);
  text("Jump out window", 715, 460);
  //if the user hits the left button, they will enter the closet_death function 
  if(mouse_bool == true){
    if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){
      closet_death_bool = true; 
      mouse_bool = false; 
      bedroom_bool = false; 
  }
      //if the user hits the right button, they will enter the window_escape function
      if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
      window_escape_bool = true; 
      mouse_bool = false; 
      bedroom_bool = false; 
    }
  }
  }

//closet_death screen 
function closet_death(){
  createCanvas(1270, 580);
  background(255);
  textSize(50);
  textFont("Impact");
  fill(0);
  text("You hear him saw through the door. He's in the room now!", 50, 250);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("HIDE", 565, 375); 
  //if the user hits the button, they will die
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      death_bool = true; 
      mouse_bool = false;  
      closet_death_bool = false; 
    }
  }
  }

//window_escape screen
function window_escape(){
  createCanvas(1270, 580);
  background(255);
  textSize(50);
  textFont("Impact");
  fill(0);
  text("You jump out the window into a bush.", 230, 190);
  text("You see your dog running out of the house back to the road.", 40, 250);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("RUN", 575, 375); 
  //if the user hits the button, they will escape
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      escape_bool = true; 
      mouse_bool = false;  
      window_escape_bool = false; 
    }
  }
  }

//escape screen
function escape(){
  createCanvas(1270, 580); 
  background(0,255,0);
  textSize(100); 
  textFont("Impact");
  fill(0); 
  text("You ESCAPED!", 360,270); 
  textSize(70); 
  text("Good job!", 490,370);
  escape_bool = false; 
  }

//dining room screen
function dining_room(){
  createCanvas(1270, 580);
  background(255);
  textSize(30);
  textFont("Impact");
  fill(0);
  text("You enter a dining room. There isn't any light, once again.", 100,100);
  text("There is a chandelier hanging over head. It looks like it's hanging from a thread.", 100, 150); 
  text("There is a small door with a rusted knob toward your left.", 100, 200); 
  text("Cobwebs are everywhere, and there seems to be dark liquid on the dining table.", 100, 250);
  left_button(); 
  right_button(); 
  fill(0);
  textSize(50);
  text("Go to door", 250, 460);
  textSize(35);
  text("Observe chandelier", 712, 460);
  //if the user hits the left button, they will enter the cellar_death function 
  if(mouse_bool == true){
    if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){
      cellar_death_bool = true; 
      mouse_bool = false; 
      dining_bool = false; 
  }
    //if the user hits the right button, they will enter the chandelier_death function 
      if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
      dining_bool = false; 
      mouse_bool = false; 
      chandelier_death_bool = true; 
    }
  }
}

//cellar_death screen 
function cellar_death(){
  createCanvas(1270, 580);
  background(255);
  textSize(45);
  textFont("Impact");
  fill(0);
  text("You go through the door into the cellar, but as you close the door,", 50, 200);
  text("the knob comes off!", 450, 260);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("BREAK OUT", 495, 375); 
  //if the user hits the button, they will die
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      trapped_bool = true; 
      mouse_bool = false;  
      cellar_death_bool = false; 
    }
  }
  }

//trapped screen 
function trapped(){
  createCanvas(1270, 580); 
  background(255,0,0);
  textSize(100); 
  textFont("Impact");
  fill(0); 
  text("You are TRAPPED.", 300,100); 
  textSize(70); 
  text("Try again?", 480,200);
  fill(0); 
  rect(200, 370,300,150); 
  fill(0);
  rect(700, 370,300,150);
  textSize(100); 
  fill(255);
  text("YES", 280, 480);
  text("NO", 790, 480);
  //if the user hits the left button, they will play again
  if(mouse_bool == true){
    if((mouseX > 200) && (mouseX < 500) && (mouseY > 370) && (mouseY < 520)){
      main_menu_bool = true; 
      mouse_bool = false; 
      trapped_bool = false; 
  }
    //if the user hits the right button, the goodbye screen will pop up 
      if((mouseX > 700) && (mouseX < 1000) && (mouseY > 370) && (mouseY < 520)){
      gbye_bool = true; 
      mouse_bool = false; 
      trapped_bool = false; 
    }
  }
}

//chandelier_death screen 
function chandelier_death(){
  createCanvas(1270, 580);
  background(255);
  textSize(50);
  textFont("Impact");
  fill(0);
  text("The chandelier falls off of the ceiling! Look out!", 150, 230);
  fill(0);
  rect(480, 300, 300, 100);
  textSize(64); 
  fill(255);
  text("AVOID", 550, 375); 
  //if the user hits the button, they will die 
  if(mouse_bool == true){
    if((mouseX > 480) && (mouseX < 780) && (mouseY > 300) && (mouseY < 400)){
      death_bool = true; 
      mouse_bool = false;  
      chandelier_death_bool = false; 
    }
  }
  }







