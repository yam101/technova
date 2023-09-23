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
  rect(0, 400, 1000, 200);
  rect(50, 350, 200, 50);
  text("I’m so nervous for my first day of work!", 50, 450);
}

