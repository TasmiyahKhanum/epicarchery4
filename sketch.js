const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var playerBase,baseImg;
var player,aim,angle,arrow;
var dartboard,dartboardimg;
var player,playerImg;
var arrows = [];


function preload() {
  backgroundImg = loadImage("background.png");
  baseImg = loadImage("base.png");
  dartboardimg = loadImage("board.png");
  playerImg = loadImage("player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle=-90;

  var options = {
    isStatic: true
  };

  player = Bodies.rectangle(248,200,100,170,options);
  World.add(world,player);

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  dartboard=Bodies.rectangle(870,200,100,150,options);
  World.add(world,dartboard);
  
  aim = new Archer(350, 260, 120, 100, angle);

}

function draw() {
  background(backgroundImg);
  textSize(12);
  text("Up and down arrow key to move the archer",160,20);
  text("Space to shoot",85,32);
  Engine.update(engine);
  image(baseImg,playerBase.position.x,playerBase.position.y,180,150)
  image(dartboardimg,dartboard.position.x,dartboard.position.y,100,150);
  image(playerImg,player.position.x,player.position.y,100,170);
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  aim.display();
  for(var i=0;i<arrows.length;i++){
    showarrows(arrows[i]);
  }
}

function keyPressed(){
  if(keyCode=== 32){
  arrow = new Arrows(aim.x,aim.y);
    arrows.push(arrow);
  }
}

function keyReleased(){
  if (keyCode === 32) {
    arrows[arrows.length-1].shoot();
    //rotate(aim.x,aim.y);
  }
}

function showarrows(arrow){
  if(arrow){
    arrow.display();
  }
}



