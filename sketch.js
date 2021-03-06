const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;''
var box,ground;
var Box1;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world=engine.world; 

Ground1=new Ground(400,380,800,20);
Box1=new Box(200,200,50,50);
Box2=new Box(240,100,50,50);
}

function draw() {
  background(0);
  Engine.update(engine);  
Box1.display();
Box2.display();
Ground1.display();
}