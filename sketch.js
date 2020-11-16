const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground;
var Box1,Box2;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,height,400,20);
  Box1 = new Box(200,300,50,50);
  Box2 = new Box(240,100,50,100);

  console.log(Box2.body.position.x);
  console.log(Box2.body.position.y);
  console.log(Box2.body.angle);
}

function draw() {

  background(0);  
  Engine.update(engine);

  /* rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20); */


  
  ground.show();
  Box1.show();
  Box2.show(); 
}