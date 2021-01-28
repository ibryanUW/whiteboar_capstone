/*
* # INFORMATION ABOUT THIS DOCUMENT
* see README.text
*
*
*
*/

/*  GLOBALS  */


/*  CONSTANTS */



function setup() {
  // setup code
  createCanvas(displayWidth, displayHeight);
  // Creating a new polySynth object
  polySynth = new p5.PolySynth();
}

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


function makeCircleArray() {
  console.log("inside makeCircleArray");

  let circle_Array = [];

  for (let i=0; i<=7; i++){
    circle_Array[i] = circle(50*i, 50*i, 10);
  }
  console.log(circle_Array);
}


function draw() {
  // put drawing code here
  background(100);
  console.log("inside draw");

  makeCircleArray();
  noLoop();
}
