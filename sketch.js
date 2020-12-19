var balloon, background1, background2, bow, arrow;
var backgroundImage, blueBalloonImage, greenBalloonImage, redBalloonImage, pinkBalloonImage, bowImage, arrowImage;
var score, shots;
var balloonGroup;


function preload() {
  backgroundImage = loadImage("images/background0.png");

  blueBalloonImage = loadImage("images/blue_balloon0.png");
  greenBalloonImage = loadImage("images/green_balloon0.png");
  redBalloonImage = loadImage("images/red_balloon0.png");
  pinkBalloonImage = loadImage("images/pink_balloon0.png");

  bowImage = loadImage("images/bow0.png");

  arrowImage = loadImage("images/arrow0.png");
}

function setup() {
  createCanvas(600, 600);


  background1 = createSprite(300, 300, 600, 600);
  background1.addImage("background", backgroundImage);
  background1.scale = 1.5;
  background1.velocityX = -3;
  background2 = createSprite(900, 300, 600, 600);
  background2.addImage("background", backgroundImage);
  background2.scale = 1.5; 

  bow = createSprite(500,500,20,50);
  bow.addImage("bow", bowImage);
  bow.scale = 1.5;


  shots = 0;
  score = 0;


  balloonGroup = [];
}

function draw() {
  background(255);


  background2.x = background1.x + 600;
  if (background1.x === -300) {
    background1.x = 300;
  }


  bow.y = mouseY;


  if(keyWentDown("SPACE")){
    fireArrow();
  }
  //arrow.velocityY = arrow.velocityY+0.03;


  //balloon.checkPop();
    
  if(arrow != null){
    if(arrow.x <= -60){arrow.lifetime = 0;}
    for(var balloons = balloonGroup.length-1; balloons > -1; balloons = balloons-1){
      if(balloonGroup[balloons].isTouching(arrow)){
        score = score+1;
        balloonGroup[balloons].lifetime = 0;
      }
    }
  }
  //console.log(arrow.x);


  if(frameCount%80 === 0){createBalloon();}


  drawSprites();


  textSize(20);
  fill("brown");
  text("Score: "+score, 500, 25);
  text("Shots: "+shots, 500, 50);
  text("Time: "+Math.round(frameCount/20), 500, 75);
}