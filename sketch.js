
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Engine is equal to engine
let engine;
//World is equal to world
let world;
var ball;
var ground;
var wedge;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var wedge_options ={
     isStatic: true
   }
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wedge = Bodies.rectangle(300, 100, 100, 50, wedge_options);
  World.add(world, wedge);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

 // Matter.Body.rotate(angle);
  push()
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(0, 0, 100, 50);
  pop()
  angle+=0.2;
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
}

