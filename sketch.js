let font;
let titleFont;
let mainText = [];
let bgColour = 200;
let counter = 0;
let person = "You";
let you = [];
let mike = [];

function preload() {
  font = loadFont('fonts/Abaddon Bold.ttf');
  titleFont = loadFont('fonts/fibberish.ttf');
  monologue = [0, 1, 2, 3, 4, 5, 6, 7, 16, 20, 21, 22, 23, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  you = [8, 12, 17, 19, 25, 27, 29, 31, 33, 36];
  boss = [9, 10, 11, 13, 14, 15, 18];
  mike = [24, 26, 28, 30, 32, 34, 35];

  // intro monologue scene
  // BACKGROUND: office lounge
  mainText[0] = "I'm so nervous for my first day of work!";
  mainText[1] = "It's a new company, a new boss, and a new position, too; I'm a \ndeveloper!";
  mainText[2] = "I have been coding websites during my free time for a few years \nnow, but I have never done it professionally...";
  mainText[3] = "I applied for a job at this tech company because my friend told me \nto, and I guess they were impressed enough by my projects, because \nI'm here now...";
  mainText[4] = "I hope everything goes well...";
  mainText[5] = "...";
  mainText[6] = "Oh my god, that's my new boss over there!";
  mainText[7] = "I should introduce myself to him.";
  // conversation with boss begins
  // Boss appears
  // BACKGROUND: boss' office
  mainText[8] = "Hi, I'm the new employee, and its my first day here! Where can I \nstart?";
  mainText[9] = "Oh, hey. Welcome to the team.";
  mainText[10] = "We are working on a pretty big project right now, so it would be a \nlittle hard to squeeze you in...";
  mainText[11] = "I guess for now you can help the team document the code for the\nproject.";
  mainText[12] = "Oh... I thought I was going to be working on the development team?";
  mainText[13] = "Hm, well, you're a little new for that, aren't you? ";
  mainText[14] = "Don't want you to end up all confused.";
  mainText[15] = "Maybe we can revisit that later.";
  mainText[16] = "The job description said they needed a new developer because they \nneeded help with the project...";
  mainText[17] = "Oh, okay. I understand...";
  mainText[18] = "So, you should head on over to Mike now. He'll show you where \nto go.";
  mainText[19] = "Okay! Thank you!";
  // BACKGROUND: office lounge
  mainText[20] = "Hmm, that was a bit disappointing. I was really excited to utilize my \nprogramming skills...";
  mainText[21] = "I have a lot of experience in web dev and I was \nhoping I could apply them.";
  mainText[22] = "Well hopefully I'll get to do that on the next project...";
  mainText[23] = "...";
  // conversation with Mike begins 
  // Mike appears
  mainText[24] = "Hey, could you get me a coffee?";
  mainText[25] = "...What?";
  mainText[26] = "Listen, I'm super stressed with this big tech project, so some \ncoffee would really hit the spot right now. Okay?";
  mainText[27] = "Uh... are you Mike?";
  mainText[28] = "Yeah?";
  mainText[29] = "Umm... I'm supposed to be helping you with the project.";
  mainText[30] = "What?";
  mainText[31] = "I'm the new developer here.";
  mainText[32] = "Haha, woah, really? I thought you were our new secretary.";
  mainText[33] = "...I mean, I am just documenting the code...";
  mainText[34] = "Oh, that seems a little more fit for you.";
  mainText[35] = "...Can you still grab me that coffee, though?";
  mainText[36] = "Umm... okay... sure...";
  mainText[37] = "I walk away as fast as I can, trying to hold back the tears in \nmy eyes.";
  // breakdown monologue begins
  // BACKGROUND: all black
  mainText[38] = "...";
  mainText[39] = "I was so excited to work on the project...";
  mainText[40] = "Maybe I should just forget about all of this...";
  mainText[41] = "Applying to this job was such a stupid idea anyways, why did I \never think I could become some big-shot developer?";
  mainText[42] = "I shouldn't have even bothered trying...";
  mainText[43] = "I'm really not cut out for this, am I?";
  mainText[44] = "...What is even the point of this...";
  mainText[45] = "...";
  // PART B BEGINS
}

function setup() {
  createCanvas(1000, 600);
  textSize(30);

}

function draw() {
  background(bgColour);

  // main text box
  rect(0, 400, 1000, 200);

  // character name box (doesn't show when protagonist is monologuing)
  rect(50, 350, 200, 50);

  // main text 
  textFont(font);
  text(mainText[counter], 50, 465);

  // character name text
  textFont(titleFont);
  text(person, 100, 385);

}

function keyPressed() {
  // On space press
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