//Interactive Song Builder by Lenay Demetrious 

//Importing the Minim library to import sound later on in the code
import ddf.minim.*;
//Importing the Video library for the webcam functionality 
import processing.video.*;
//Setting up the variables for the sound bites
AudioSnippet synth; 
AudioSnippet drums; 
AudioSnippet bass; 
AudioSnippet vocals; 
AudioSnippet piano; 
//Setting up the variables for sound loading
Minim minsynth;
Minim mindrums;
Minim minbass;
Minim minvocals;
Minim minpiano; 
//Setting up a variable for the number of pixels of the webcam screen
int numPixels;
//Setting up an array to store the previous frame
int[] previousFrame;
//Setting up a variable for the webcam video 
Capture video;

void setup() {
  //Setting the size of the webcam video
  size(640, 480);
  //Setting up the minim variables for sound loading
  minsynth = new Minim(this);
  mindrums = new Minim(this);
  minbass = new Minim(this);
  minvocals = new Minim(this);
  minpiano = new Minim(this);
  //Loading in each sound bite
  synth = minsynth.loadSnippet("Synth.wav"); 
  drums = mindrums.loadSnippet("Drums.wav"); 
  bass = minbass.loadSnippet("Bass.wav"); 
  vocals = minvocals.loadSnippet("Vocals.wav"); 
  piano = minpiano.loadSnippet("Piano.wav"); 
  drums.play(); 
 //Starting the webcam video
  video = new Capture(this, width, height);
  
  //Starting to capture the images from the webcam
  video.start(); 
  //Setting the numPixels variable to the entire number of pixels within the video
  numPixels = video.width * video.height;
  //Creating an array to store the previously captured frame
  previousFrame = new int[numPixels];
  loadPixels();
}

void draw() {
  if (video.available()) {
    //Reading the new frame from the webcam
    video.read(); 
    //Making the video's pixels[] array available
    video.loadPixels(); 
    int movementSum1 = 0; // Amount of movement in the first section of the screen
    int movementSum2 = 0; // Amount of movement in the second section of the screen
    int movementSum3 = 0; // Amount of movement in the third section of the screen
    int movementSum4 = 0; // Amount of movement in the last section of the screen
    for (int i = 0; i < numPixels; i++) { // For each pixel in the video frame...
      color currColor = video.pixels[i];
      color prevColor = previousFrame[i];
      //Extracting the red, green, and blue components from current pixel
      int currR = (currColor >> 16) & 0xFF;
      int currG = (currColor >> 8) & 0xFF;
      int currB = currColor & 0xFF;
      //Extracting red, green, and blue components from previous pixel
      int prevR = (prevColor >> 16) & 0xFF;
      int prevG = (prevColor >> 8) & 0xFF;
      int prevB = prevColor & 0xFF;
      //Computing the difference of the red, green, and blue values
      int diffR = abs(currR - prevR);
      int diffG = abs(currG - prevG);
      int diffB = abs(currB - prevB);
      //Adding these differences to the running tally of each section's movement sum
      int column = i%video.width;
      int quarterwidth = video.width/4;
      if(column>=0&&column<quarterwidth) movementSum1 += diffR + diffG + diffB;
      else if(column>=quarterwidth&&column<quarterwidth*2) movementSum2 += diffR + diffG + diffB;
      else if(column>=quarterwidth*2&&column<quarterwidth*3) movementSum3 += diffR + diffG + diffB;
      else movementSum4 += diffR + diffG + diffB;
   //Rendering the difference image to the screen
      pixels[i] = color(diffR, diffG, diffB);
   //Saving the current color into the 'previous' buffer
      previousFrame[i] = currColor;
    }
    //To prevent flicker from frames that are all black (no movement),
    //only update the screen if the image has changed.
    if (movementSum1+movementSum2+movementSum3+movementSum4 > 0) {
      updatePixels();
      //Diving the movement sums by 100,000 to make it more readable
      int val1 = movementSum1/100000; 
      int val2 = movementSum2/100000; 
      int val3 = movementSum3/100000; 
      int val4 = movementSum4/100000; 
      //Printing out the total amount of movement per section
      println(val1 + " " + val2 + " " + val3 + " " + val4); 
      //Drawing lines to show the different sections
      stroke(255); 
      line(video.width/4,0,video.width/4, video.height); 
      line(video.width/2,0, video.width/2, video.height); 
      line(video.width*3/4,0,video.width*3/4, video.height); 
      //If movement is detected...
      if(val1 >= 15 && val1 < 50){
        //Rewind the sound bite so it is re-playable
        synth.rewind(); 
        //Play the sound bite
        synth.play(); 
    }
      if(val2 >= 15 && val2 < 50){
        bass.rewind(); 
        bass.play(); 
    }
      if(val3 >= 15 && val3 < 50){
        vocals.rewind(); 
        vocals.play(); 
    }
      if(val4 >= 15 && val4 < 50){
        piano.rewind(); 
        piano.play(); 
      }
      
  }
}
}