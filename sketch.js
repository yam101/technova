let newFont;
let mainText = [];
let bgColour = 200;
let counter = 0;
let person = "You";
let you = [];
let mike = [];

function preload() {
  font = loadFont('fonts/Abaddon Bold.ttf');
  you = [0, 1, 2, 3, 4];
  mike = []

  mainText[0] = "I’m so nervous for my first day of work!";
  mainText[1] = "It’s a new company, a new boss, and a new position, too; I’m a developer!";
  mainText[2] = "I have been coding during my own free time for a few years now, but I have never done it professionally…";
  mainText[3] = "I applied for a job at this tech company because my friend told me to, and I guess they were impressed enough by my projects, because I’m here now…";
  mainText[4] = "I hope everything goes well…";
}

function setup() {
  createCanvas(1000, 600);
  textSize(30);
  textFont(font);
}

function draw() {
  background(bgColour);

  // main text box
  rect(0, 400, 1000, 200);

  // character name box (doesn't show when protagonist is monologuing)
  rect(50, 350, 200, 50);

  // main text 
  text(mainText[counter], 50, 465);

  // character name text
  text(person, 100, 385);

}

function keyPressed() {
  if (keyCode === 32) {
    counter++;

    for (let i = 0; i < mainText.length; i++) {
      if (counter === you[i]) {
        person = "You";
      }
      else if (counter === mike[i]) {
        person = "Mike";
      }
    }

  }
}