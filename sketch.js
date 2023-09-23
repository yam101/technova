let newFont;

function preload() {
  font = loadFont('fonts/Abaddon Bold.ttf');
}

function setup() {
  createCanvas(1000, 600);
  textSize(22);
  textFont(font);
}

function draw() {
  background(200);
  rect(0, 400, 1000, 200);
  rect(50, 350, 200, 50);
  text("some random text", 500, 500);
}

