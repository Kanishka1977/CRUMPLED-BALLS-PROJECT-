const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var paper,ground,dustbin1,dustbin2,dustbin3;
var paperImage,dustbinImage;

function preload(){
  paperImage= loadImage("sprites/paper.png");
  dustbinImage= loadImage("sprites/dustbingreen.png");
}

function setup() {
  var canvas=createCanvas(800, 700);
  
  engine = Engine.create();
  world = engine.world;
  
  keyPressed();

	ground=new Ground(600,400,1200,20);
  paper= new Paper(100,40,20);
  

  dustbin1=new Ground(700,320,20,150);
  dustbin2=new Ground(520,320,20,150);
  dustbin3=new Ground(600,390,180,20);

  
  
  Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background("white");
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  image(dustbinImage,510,250,200,160);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	   
	 }
   }
   
   

