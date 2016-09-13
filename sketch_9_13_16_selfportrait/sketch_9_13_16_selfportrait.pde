size(800,800);
background(215,181,247);
//variables
int hairoriginx = 400;
int hairoriginy = 200;
int haircolorred = 143;
int haircolorgreen = 103;
int haircolorblue = 30;
int strokeweight = 2;
int whitered = 255;
int whitegreen = 255;
int whiteblue = 255;
int eyeshapewidth = 40;
int eyeshapeheight = 25;
int iriswidth = 20;
int blackred = 0;
int blackgreen = 0;
int blackblue = 0;
int pupilwidth = 10;
int pupilheight = 10;
int leftellipsecenterx = 360;
int leftellipsecentery = 305;
int rightellipsecenterx = 440;
int rightellipsecentery = 305;
int mouthred = 255;
int mouthgreen = 0;
int mouthblue = 55;
int skinred = 242;
int skingreen = 220;
int skinblue = 179;
int shirtred = 247;
int shirtgreen = 131;
int shirtblue = 234;
int greenred = 49;
int greengreen = 135;
int greenblue = 32;

//face shape
beginShape();
stroke(blackred, blackgreen, blackblue);
strokeWeight(strokeweight);
fill(skinred, skingreen, skinblue);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx-80;
hairoriginy = hairoriginy + 100;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy + 100;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 80;
hairoriginy = hairoriginy + 50;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 80;
hairoriginy = hairoriginy - 50;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy - 100;
vertex(hairoriginx,hairoriginy);
hairoriginx = 400;
hairoriginy = 200;
endShape(CLOSE);

//left side of hair
beginShape();
strokeWeight(strokeweight);
fill(haircolorred, haircolorgreen, haircolorblue);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx - 80;
hairoriginy = hairoriginy + 100;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy + 200;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx - 20;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy/2;
vertex(hairoriginx,hairoriginy);
hairoriginx = 400;
hairoriginy = 200;
endShape(CLOSE);

beginShape();
strokeWeight(strokeweight);
fill(haircolorred, haircolorgreen, haircolorblue);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx - 100;
hairoriginy = hairoriginy + 50;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy + 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx - 20;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy - 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = 400;
hairoriginy = 200;
endShape(CLOSE);

beginShape();
strokeWeight(strokeweight);
fill(haircolorred, haircolorgreen, haircolorblue);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx - 120;
hairoriginy = hairoriginy + 50;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy + 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx - 20;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy - 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = 400;
hairoriginy = 200;
endShape(CLOSE);

//hairrightside
beginShape();
strokeWeight(strokeweight);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 80;
hairoriginy = hairoriginy + 100;
vertex(hairoriginx, hairoriginy);
hairoriginy = hairoriginy + 200;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 20;
vertex(hairoriginx, hairoriginy);
hairoriginy = hairoriginy - 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = 400;
hairoriginy = 200;
endShape(CLOSE);

beginShape();
strokeWeight(strokeweight);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 100;
hairoriginy = hairoriginy + 50;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy + 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 21;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy - 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = 400;
hairoriginy = 200;
endShape(CLOSE);

beginShape();
strokeWeight(strokeweight);
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 121;
hairoriginy = hairoriginy + 50;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy + 250;
vertex(hairoriginx,hairoriginy);
hairoriginx = hairoriginx + 19;
vertex(hairoriginx,hairoriginy);
hairoriginy = hairoriginy - 250;
vertex(hairoriginx,hairoriginy);
endShape(CLOSE);

//eyes
//left
fill(whitered,whitegreen,whiteblue);
ellipse(leftellipsecenterx,leftellipsecentery,eyeshapewidth,eyeshapeheight);
//right
ellipse(rightellipsecenterx,rightellipsecentery,eyeshapewidth,eyeshapeheight);
//leftiris
fill(greenred, greengreen, greenblue);
ellipse(leftellipsecenterx,leftellipsecentery,iriswidth, eyeshapeheight);
//rightiris
ellipse(rightellipsecenterx,rightellipsecentery,iriswidth, eyeshapeheight);
//leftpupil
fill(blackred, blackgreen, blackblue);
ellipse(leftellipsecenterx,leftellipsecentery,pupilwidth, pupilheight);
//rightpupil
ellipse(rightellipsecenterx,rightellipsecentery,pupilwidth, pupilheight);

//nose
noFill();
arc(390, 337, 40, 40, 0, HALF_PI);

//mouth
strokeWeight(strokeweight);
fill(mouthred, mouthgreen, mouthblue);
arc(400, 380, 80, 80, 0, PI, CHORD);

//shoulders and shirt
//left side
line(380,480,320,490);
//right side
line(420,480,480,490);
line(280,500,290,600);
line(520,500,510,600);
//shirt
beginShape();
strokeWeight(strokeweight);
fill(shirtred, shirtgreen, shirtblue);
vertex(380,480);
vertex(400,495);
vertex(420,480);
vertex(480,490);
vertex(480,500);
vertex(520,500);
vertex(510,600);
vertex(290,600);
vertex(280,500);
vertex(320,500);
vertex(320,490);
endShape();

//neck
beginShape();
stroke(blackred, blackgreen, blackblue);
fill(skinred, skingreen, skinblue);
vertex(380,438);
vertex(400,450);
vertex(420,438);
vertex(420,480);
vertex(400,495);
vertex(380,480);
endShape(CLOSE);


//eyebrows
noFill();
strokeWeight(strokeweight);
arc(360, 295, 59, 40, PI, TWO_PI);
arc(440, 295, 59, 40, PI, TWO_PI);