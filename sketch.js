let newFont;

function preload() {
  font = loadFont('fonts/Abaddon Bold.ttf');
}

function setup() {
  createCanvas(1000, 600);
  textSize(30);
  textFont(font);
}

function draw() {
  background(200);

  // main text box
  rect(0, 400, 1000, 200);

  // character name box (doesn't show when protagonist is monologuing)
  rect(50, 350, 200, 50);

  // main text 
  text("I’m so nervous for my first day of work!", 50, 465);

  // character name text
  text("You", 100, 385);

}

