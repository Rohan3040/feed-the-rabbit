var garden,rabbit;
var gardenImg,rabbitImg;
var red_leaf;
var red_leaf_image;
var leaf;
var leaf_image;
var orange;
var orange_image;
var apple;
var apple_image;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
red_leaf_image=loadImage("redImage.png")
leaf_image=loadImage("leaf.png");
orange_image=loadImage("orangeLeaf.png");
apple_image=loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  spawn_red_leaf();
  spawn_leaf()
  spawn_orange()
  spawn_apple();
}

function spawn_red_leaf(){
  if (frameCount%60==0){
  red_leaf=createSprite(random(0,400),0,10,10)
  red_leaf.velocityY=3
  red_leaf.addAnimation("redleafmoving",red_leaf_image)
  red_leaf.scale=0.06
  }
}

function spawn_leaf(){
  if (frameCount%30==0){
  leaf=createSprite(random(60,360),0,10,10)
  leaf.velocityY=5
  leaf.addAnimation("leafmoving",leaf_image)
  leaf.scale=0.06
  }
}

function spawn_orange(){
  if (frameCount%120==0){
    orange=createSprite(random(120,260),0,10,10)
    orange.velocityY=2
    orange.addAnimation("orangemoving",orange_image)
    orange.scale=0.06
  }
}

function spawn_apple(){
  if (frameCount%80==0){
    apple=createSprite(random(30,380),0,10,10)
    apple.velocityY=4
    apple.addAnimation("applemoving",apple_image)
    apple.scale=0.06
  }
}

