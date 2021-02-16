/*
* # INFORMATION ABOUT THIS DOCUMENT
* see README.text
*
*
* Credits/Sources:
* ("How p5.sound PolySynth works to generate sound")[https://compform.net/music/p5_sound.html]
*
*/

/*  GLOBALS  */
let oscillator;
let envelope;
let analyzer;

/*  CONSTANTS */



function setup() {
  // setup code
  createCanvas(windowWidth, windowHeight);
  // Creating a new polySynth object
  polySynth = new p5.PolySynth();

  envelope = new p5.Env();

  envelope.setADSR(0.01, 0.05, 0.75, 0.25); // middling
  // synth.envelope.setADSR(0, 0, 1, 0); // no envelope
  // synth.envelope.setADSR(.01, 0, 1, 2); // long release
  // synth.envelope.setADSR(.01, .1, .1, 0); // quick decay

  envelope.setRange(1.0, 0.0);

  oscillator = new p5.Oscillator('triangle');
  oscillator.amp(envelope); // set amplitude
  oscillator.freq(220); // set frequency
  oscillator.start(); // start oscillating
}


// Contains data about a tone.
// Is triggered by other custom functions.
function playSynth() {
// // What's this thing do?
//   userStartAudio();
//
//   // note duration (in seconds)
//   let note_dur = 0.5;
//
//   // time from right now
//   let time = 0;
//
//   // velocity for some reason?
//   let vel = 0.1;
//
//   // What's going on all in here then now?
//   polySynth.play('C3', vel, 0, note_dur);

  const note = floor(map(mouseX/4, 0, 400, 20, 80));
  const freq = midiToFreq(note);
  oscillator.freq(freq);
  envelope.triggerAttack();
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

  // First, get (x,y) coordinates of current circle
  var curr_circle_mid_x = some_circle.getXCoord();
  var curr_circle_mid_y = some_circle.getYCoord();

  // use getDiameter and split in half
  var radius = some_circle.getDiameter()/2;

  // make sure this all is giving out data...
  console.log(curr_circle_mid_x + "," + curr_circle_mid_y);
  console.log(radius);
}


function draw() {
  // put drawing code here
  background('#010006');

  console.log("X: " + mouseX);
  console.log("Y: " + mouseY);
  fill('#F2AE30');
  // Middle, static circle
  circle(windowWidth/2,windowHeight/2, 420);


  fill('#D45828');
  let circle_0 = circle(100, 200, 50);
  if (mouseX <= 125 && mouseX >= 75 && mouseY <= 225 && mouseY >= 175){
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();


  fill('#3D58AE');
  let circle_1 = circle(100, 250, 30);
  if (mouseX <= 115 && mouseX >= 85 && mouseY <= 265 && mouseY >= 235){
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();

  fill('#67889C');
  let circle_2 = circle(500, 250, 60);
  if (mouseX <= 530 && mouseX >= 470 && mouseY <= 280 && mouseY >= 220) {
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();

  fill('#73030D');
  let circle_3 = circle(700, 100, 50);
  if (mouseX <= 725 && mouseX >= 675 && mouseY <= 125 && mouseY >= 75) {
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();

  fill('#F2AE30');
  let circle_4 = circle(100, 700, 50);
  if (mouseX <= 125 && mouseX >= 75 && mouseY <= 725 && mouseY >= 675) {
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();

  fill('#F27507');
  let circle_5 = circle(500, 500, 10);
  if (mouseX <= 505 && mouseX >= 495 && mouseY <= 505 && mouseY >= 495) {
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();

  fill('#73030D');
  let circle_6 = circle(1650, 700, 250);
  if (mouseX <= 1775 && mouseX >= 1525 && mouseY <= 825 && mouseY >= 575) {
    playSynth();
  } else {
    envelope.triggerRelease();
  }
  noFill();

  fill('white');
  // fill('#756450');
  let circle_7 = circle(1500, 100, 50);
  if (mouseX <= 1525 && mouseX >= 1475 && mouseY <= 125 && mouseY >= 75) {
    playSynth();
  } else {
    envelope.triggerRelease();
  }
}


// Checking to see if the window should be redrawn because the user or browser
// resized it.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
