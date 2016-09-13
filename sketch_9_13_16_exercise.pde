//Lenay Demetrious and Kat LoScalzo
void setup(){
  size(600,500);
  background(255,255,255);
}

void draw(){
  line((width/2),0,(width/2), height);
  line(500, 0, 500, height);
  line(0, (height/3), (width/2), (height/3));
}

void mouseMoved(){
  if(mouseX < (width/2) && mouseY < (height/3)){
    fill(255, 0, 0);
    rect(0,0, (width/2), (height/3));
  }
  else{
    fill(255,255,255);
    rect(0,0, (width/2), (height/3));
  }

  if((mouseX < (width/2)) && (mouseY > (height/3))){
    fill(0,255,0);
    rect(0,(height/3),(width/2),(height*2/3));
  }
  
  else{
    fill(255,255,255);
    rect(0,(height/3),(width/2),(height*2/3));
  }
   if((mouseX > (width/2)) && !(mouseX > 500)){
     fill(0,0,255);
     rect((width/2), 0, (width/2), height);
   }
   else{
     fill(255,255,255);
     rect((width/2), 0, (width/2), height);
   }
   
   if(mouseX==500){
     fill(0,0,0);
     rect(500,0,(width-500),height);
   }
  }

  
  