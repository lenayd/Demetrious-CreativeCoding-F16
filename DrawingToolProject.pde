/*
This is a program for a simple geometric drawing tool. The user has three options for shapes to draw: square,
circle, and triangle. In addition, the user has three options for shape colors: red, green, and blue. If, say, 
the user would like to draw a red triangle, they would click on the triangle button, then the red button, and then 
finally click within the drawing space (the empty space outside of the toolbox on the left of the sketchbook), and 
a red triangle will instantly be drawn. This can be done for any shape and any color available on the toolbar. If
a shape is picked, but no color, the shape will by default be drawn black. If a color is picked, but no shape, no
shape will appear if the user clicks within the drawing space. The shapes have a set size written within the code--
this means that the user does not have an option to change the size of the shape they wish to draw. 
*/

int squareSize;
int circleSize;
int triXcenter;
int triYcenter;
int triwidth;
int triheight;
int x1; 
int x2;
int x3;
int y1;
int y2;
int y3;
boolean drawCircles;
boolean red;
boolean blue;
boolean green;
boolean drawSquares; 
boolean drawTriangles;


void setup() {
  //the background's size and color is set
  size (600,600);
  background(255,255,255);
  //assigning variables we will need later on
  circleSize = 50;
  squareSize = 50;
  triwidth = 100;
  triheight = 100;
  drawCircles = false;
  red = false;
  blue = false;
  green = false;
  drawSquares = false;
  drawTriangles = false;
  //drawing a line that separates the toolbar space from the drawing space
  line(100,0,100,600);
  fill(0,0,0);
  //creating the buttons for the various shapes in the toolbar
  ellipse( 50,50, circleSize,circleSize);
  fill(0,0,0);
  rect(25, 125, squareSize, squareSize);
  fill(0,0,0);
  triangle(50,220,75,270,25,270); 
  //creating the buttons for the various colors in the toolbar
  stroke(255,0,0);
  fill(255,0,0);
  rect(25,320,squareSize,squareSize);
  stroke(0,255,0);
  fill(0,255,0);
  rect(25,420, squareSize,squareSize);
  stroke(0,0,255);
  fill(0,0,255);
  rect(25,520, squareSize, squareSize);
  
}


void draw(){ 
}


void mouseClicked(){
    //if the user clicks on the circle button
    if((mouseX < 75 && mouseX > 25)&&(mouseY > 25 && mouseY < 75)){
      drawCircles = true;
      drawSquares = false;
      drawTriangles = false;
    }
    //if the user clicks on the red button
    else if((mouseX < 75 && mouseX > 25)&&(mouseY > 320 && mouseY < 370)){
      red = true;
      blue = false; 
      green = false;
    }
    //if the user clicks on the green button
    else if((mouseX < 75 && mouseX > 25)&&(mouseY > 420 && mouseY < 470)){
      red = false; 
      blue = false;
      green = true;
    }
    //if the user clicks on the blue button
    else if((mouseX < 75 && mouseX > 25)&&(mouseY  > 520 && mouseY < 570)){
      red = false; 
      blue = true;
      green = false;
    }
    //if the user clicks on the square button
    else if((mouseX < 75 && mouseX > 25)&&(mouseY > 125 && mouseY < 175)){
      drawSquares = true; 
      drawCircles = false;
      drawTriangles = false;
    }
    //if the user clicks on the triangle button
    else if((mouseX < 75 && mouseX > 25)&&(mouseY > 220 && mouseY < 270)){
      if(get(mouseX, mouseY) == -16777216){
        drawTriangles = true; 
        drawSquares = false;
        drawCircles = false;
      }
    }
    
    //if the user clicks within the drawing space
    if(mouseX > 125){
      //if the circle was chosen
      if(drawCircles == true){
        drawSquares = false;
        drawTriangles = false;
        //if no color was chosen, black circles will be drawn
        if(red == false && blue == false && green == false){
          fill(0,0,0);
          stroke(0,0,0);
          ellipse(mouseX,mouseY,circleSize,circleSize);
    }
        //if red was chosen, red circles will be drawn
        else if(red == true){
          fill(255,0,0);
          stroke(255,0,0);
          ellipse(mouseX,mouseY,circleSize,circleSize);
    }
        //if blue was chosen, blue circles will be drawn
        else if(blue == true){
          fill(0,0,255);
          stroke(0,0,255);
          ellipse(mouseX,mouseY,circleSize,circleSize);
    }
        //if green was chosen, green circles will be drawn
        else{
          fill(0,255,0);
          stroke(0,255,0);
          ellipse(mouseX,mouseY,circleSize,circleSize);
    }
      }
    //if the user clicks within the drawing space
    if(mouseX>125){
      //if the square was chosen
      if(drawSquares == true){
         drawCircles = false; 
         drawTriangles = false;
         //if no color was chosen, black squares will be drawn
         if(red == false && blue == false && green == false){
           fill(0,0,0);
           stroke(0,0,0);
           rect(mouseX,mouseY,squareSize,squareSize);
     }
       //if red was chosen, red squares will be drawn
        else if(red == true){
           fill(255,0,0);
           stroke(255,0,0);
           rect(mouseX,mouseY,squareSize,squareSize);
     }
       //if blue was chosen, blue squares will be drawn
       else if(blue == true){
           fill(0,0,255);
           stroke(0,0,255);
           rect(mouseX,mouseY,squareSize,squareSize);
     }
       //if green was chosen, green squares will be drawn
       else{
           fill(0,255,0);
           stroke(0,255,0);
           rect(mouseX,mouseY,squareSize,squareSize);
     }
      }
      }
     //if the user clicks within the drawing space
     if(mouseX>125){
       //if the triangle was chosen
        if(drawTriangles == true){
          drawCircles = false;
          drawSquares = false;
          //the center of the triangle is the pixel the user clicked on
          triXcenter = mouseX;
          triYcenter = mouseY;
          //setting the vertices of the triangle in relation to the center
          x1 = triXcenter - 25; 
          y1 = triYcenter + 25;
          x2 = triXcenter;
          y2 = triYcenter - 25;
          x3 = triXcenter + 25;
          y3 = triYcenter + 25;
          //if no color was chosen, black triangles will appear
          if(red == false && blue == false && green == false){
            fill(0,0,0);
            stroke(0,0,0);
            triangle(x1, y1, x2, y2, x3, y3);
      }
          //if red was chosen, red triangles will appear
          else if(red == true){
            fill(255,0,0);
            stroke(255,0,0);
            triangle(x1, y1, x2, y2, x3, y3);
      }
          //if blue was chosen, blue triangles will appear
          else if(blue == true){
            fill(0,0,255);
            stroke(0,0,255);
            triangle(x1, y1, x2, y2, x3, y3);
      }
          //if green was chosen, green triangles will appear
          else{
            fill(0,255,0);
            stroke(0,255,0);
            triangle(x1, y1, x2, y2, x3, y3);
      }
     }
    
    }
    }
}
    
      


  


 
    
  
  

  
  
  
  