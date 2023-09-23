let newFont;
let mainText = [];
let bgColour = 200;
let counter = 0;

function preload() {
  font = loadFont('fonts/Abaddon Bold.ttf');

  // intro monologue scene
  mainText[0] = "I’m so nervous for my first day of work!";
  mainText[1] = "It’s a new company, a new boss, and a new position, too; I’m a developer!";
  mainText[2] = "I have been coding during my own free time for a few years now, but I have never done it professionally...";
  mainText[3] = "I applied for a job at this tech company because my friend told me to, and I guess they were impressed enough by my projects, because I’m here now...";
  mainText[4] = "I hope everything goes well...";
  // scene changes to office
  mainText[5] = "Oh my god, thats my new boss over there!";
  mainText[6] = "I should introduce myself to him.";
  // conversation with boss begins
  mainText[7] = "Hi, I'm the new employee, and its my first day here! Where can I start?";
  mainText[8] = "Oh, hey. Welcome to the team.";
  mainText[9] = "We are working on a pretty big project right now, so it would be a little hard to squeeze you in...";
  mainText[10] = "I guess for now you can help the team document the project...";
  mainText[11] = "Oh... I thought I was going to be working on the development team?";
  mainText[12] = "Hm, well, you’re a little new for that, aren’t you? ";
  mainText[13] = "Don’t want you to end up all confused.";
  mainText[14] = "Maybe we can revisit that later.";
  mainText[15] = "The job description said they needed a new developer because they needed help with the project...";
  mainText[16] = "Oh, okay. I understand...";
  mainText[17] = "So, you should head on over to Mike now. He’ll show you where to go.";
  mainText[18] = "Okay! Thank you!";
  mainText[19] = "Hm, that was a bit disappointing, I was really excited to utilize my programming skills… I have a lot of experience in web dev and I was hoping I could apply them.";
  mainText[20] = "Well hopefully I’ll get to do that on the next project...";
  // conversation with colleague begins 
  mainText[21] = "Hey, could you get me a coffee?";
  mainText[22] = "...what?";
  mainText[23] = "Listen, I’m super stressed with this big tech project, so some coffee would really hit the spot right now. Okay?";
  mainText[24] = "Uh... are you Mike?";
  mainText[25] = "Yeah?";
  mainText[26] = "Umm... I’m supposed to be helping you with the project…";
  mainText[27] = "What?";
  mainText[28] = "I’m the new developer here…";
  mainText[29] = "Haha, woah, really? I thought you were our new secretary.";
  mainText[30] = "...I mean, I am just documenting the code…";
  mainText[31] = "Oh, that seems a little more fit for you.";
  mainText[32] = "...Can you still grab me that coffee, though?";
  mainText[33] = "Umm... okay... sure...";
  // breakdown monologue begins
  mainText[34] = "I was so excited to work on the project...";
  mainText[35] = "Maybe I should just forget about all of this...";
  mainText[36] = "Applying to this job was such a stupid idea anyways, why did I ever think I could become some big-shot developer?";
  mainText[37] = "I shouldn’t have even bothered trying...";
  mainText[38] = "I’m really not cut out for this, am I?";
  mainText[39] = "...What is even the point of this...";

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
  text("You", 100, 385);

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    //change text
    //text("test", 400, 400);
    // bgColour = 255;
    counter++;
  }
}