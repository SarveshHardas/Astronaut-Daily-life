var iss;

function preload()
{
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat=loadAnimation("eat1.png","eat2.png","drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
  bath=loadAnimation("bath1.png","bath2.png");
}

function setup() {
  background(0);
  createCanvas(800,400);
  
  iss=createSprite(400,200,10,10);
  iss.addImage(bg);
  iss.scale=0.2;

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  edge=createEdgeSprites();
  astronaut.bounceOff(edge[0]);
  astronaut.bounceOff(edge[1]);
  astronaut.bounceOff(edge[2]);
  astronaut.bounceOff(edge[3]);

  if(keyDown("DOWN_ARROW"))
  {
    astronaut.changeAnimation("running",gym);
  }

  if(keyDown("UP_ARROW"))
  {
    astronaut.changeAnimation("running",brush);
  }

  if(keyDown("LEFT_ARROW"))
  {
    astronaut.changeAnimation("running",eat);
  }

  if(keyDown("RIGHT_ARROW"))
  {
    astronaut.changeAnimation("running",bath);
  }

  if(keyDown("M"))
  {
    astronaut.addAnimation("running",move);
    astronaut.velocityX=2;
    astronaut.velocityY=2;
  }

  drawSprites();
 textSize(15)
 text("Instruction:",25,50);
 textSize(15)
 text("Up arrow = brushing",25,65);
 textSize(15)
 text("Down arrow = gyming",25,80);
 textSize(15)
 text("Left arrow = eating",25,95);
 textSize(15)
 text("Right arrow = bathing",25,110);
 textSize(15)
 text("M key = moving",25,125);
}