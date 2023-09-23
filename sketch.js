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

  // intro monologue scene
  // BACKGROUND: office lounge
  mainText[0] = "I'm so nervous for my first day of work!";
  mainText[1] = "It's a new company, a new boss, and a new position, too; I'm a \ndeveloper!";
  mainText[2] = "I have been coding websites during my free time for a few years now, \nbut I have never done it professionally...";
  mainText[3] = "I applied for a job at this tech company because my friend told me \nto, and I guess they were impressed enough by my projects, because \nI'm here now...";
  mainText[4] = "I hope everything goes well...";
  mainText[4] = "...";
  mainText[5] = "Oh my god, thats my new boss over there!";
  mainText[6] = "I should introduce myself to him.";
  // conversation with boss begins
  // Boss appears
  // BACKGROUND: boss' office
  mainText[7] = "Hi, I'm the new employee, and its my first day here! Where can I \nstart?";
  mainText[8] = "Oh, hey. Welcome to the team.";
  mainText[9] = "We are working on a pretty big project right now, so it would be a \nlittle hard to squeeze you in...";
  mainText[10] = "I guess for now you can help the team document the project.";
  mainText[11] = "Oh... I thought I was going to be working on the development team?";
  mainText[12] = "Hm, well, you're a little new for that, aren't you? ";
  mainText[13] = "Don't want you to end up all confused.";
  mainText[14] = "Maybe we can revisit that later.";
  mainText[15] = "The job description said they needed a new developer because they \nneeded help with the project...";
  mainText[16] = "Oh, okay. I understand...";
  mainText[17] = "So, you should head on over to Mike now. He'll show you where \nto go.";
  mainText[18] = "Okay! Thank you!";
  // BACKGROUND: office lounge
  mainText[19] = "Hmm, that was a bit disappointing. I was really excited to utilize my \nprogramming skills...";
  mainText[20] = "I have a lot of experience in web dev and I was \nhoping I could apply them.";
  mainText[20] = "Well hopefully I'll get to do that on the next project...";
  mainText[21] = "...";
  // conversation with Mike begins 
  // Mike appears
  mainText[22] = "Hey, could you get me a coffee?";
  mainText[23] = "...What?";
  mainText[24] = "Listen, I'm super stressed with this big tech project, so some \ncoffee would really hit the spot right now. Okay?";
  mainText[25] = "Uh... are you Mike?";
  mainText[26] = "Yeah?";
  mainText[27] = "Umm... I'm supposed to be helping you with the project.";
  mainText[28] = "What?";
  mainText[29] = "I'm the new developer here.";
  mainText[30] = "Haha, woah, really? I thought you were our new secretary.";
  mainText[31] = "...I mean, I am just documenting the code...";
  mainText[32] = "Oh, that seems a little more fit for you.";
  mainText[33] = "...Can you still grab me that coffee, though?";
  mainText[34] = "Umm... okay... sure...";
  mainText[33] = "I walk away as fast as I can, trying to hold back the tears in my eyes.";
  // breakdown monologue begins
  // BACKGROUND: all black
  mainText[34] = "...";
  mainText[34] = "I was so excited to work on the project...";
  mainText[35] = "Maybe I should just forget about all of this...";
  mainText[36] = "Applying to this job was such a stupid idea anyways, why did I ever think I could become some big-shot developer?";
  mainText[37] = "I shouldn’t have even bothered trying...";
  mainText[38] = "I’m really not cut out for this, am I?";
  mainText[39] = "...What is even the point of this...";
  mainText[39] = "...";
  // PART B BEGINS
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