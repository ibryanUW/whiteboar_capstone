/*
* # INFORMATION ABOUT THIS DOCUMENT
* see README.text
*
*
*
*/

/*  GLOBALS  */
let some_circle;
let some_other_circle;
let name;
let diameter;
let x_coord;
let y_coord;
let mousePosX;
let mousePosY;

/*  CONSTANTS */



function setup() {
  // setup code
  createCanvas(windowWidth, windowHeight);
  // Creating a new polySynth object
  polySynth = new p5.PolySynth();

  diameter = random(50,100);
  some_circle = new ACircle("Sun", 50, windowWidth/2, windowHeight/2);
  //some_other_circle = new ACircle("Other", diameter, 100, 250);
}

//


// Contains data about a tone.
// Is triggered by other custom functions.
function playSynth() {
// What's this thing do?
  userStartAudio();

  // note duration (in seconds)
  let note_dur = 0.5;

  // time from right now
  let time = 0;

  // velocity for some reason?
  let vel = 0.1;

  // What's going on all in here then now?
  polySynth.play('C3', vel, 0, note_dur);
}

// This function simply gets the (x,y) coordinates from the circle
// it's passed as a parameter and checks if, given their boundaries,
// the mouse is inside that space.

// If yes, then make a sound.
// else not, no sound.
function checkCirclePos(some_circle){
  // store current mouse (x,y)
  mousePosX = mouseX();
  mousePosY = mouseY();

  // calculate coordinates of the circumference of the circle.

}

function makeCircleArray() {
  // console.log("inside makeCircleArray");
  //
  // let circle_Array = [];
  //
  // for (let i=0; i<=7; i++){
  //   circle_Array[i] = circle(50*i, 50*i, 10);
  // }
  // console.log(circle_Array);
}


function draw() {
  // put drawing code here
  background(100);
  // console.log("inside draw");
  //
  // makeCircleArray();
  // noLoop();

  var circle1 = circle(some_circle.getXCoord(), some_circle.getYCoord(), some_circle.getDiameter());
  console.log(some_circle.getXCoord() + "," + some_circle.getYCoord());
}
