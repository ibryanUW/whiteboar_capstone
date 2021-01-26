function setup() {
  // setup code
  createCanvas(displayWidth, displayHeight);

  // Creating a new polySynth object
  polySynth = new p5.PolySynth();

}


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



function draw() {
  // put drawing code here
  background(100);
  var mid_x = displayWidth/2;
  var mid_y = displayHeight/2;
  circle(mid_x, mid_y, 50);

  // I know the coordinates of the circle
  //print("right_arc_center: " + (mid_x + 25) + " || top_arc_center: " + (mid_y + 25));

  // I know coordinates of the mouse
  //print(displayWidth + ", " + displayHeight);
  console.log("mouseX: " + mouseX + "\n" + "mouseY: " + mouseY);

  // Can I check when they meet?
  if(mouseX >= 514 && mouseX <= 564 && mouseY >= 293 && mouseY <= 343){
      // console.log("inside");

      playSynth();

  }
}
