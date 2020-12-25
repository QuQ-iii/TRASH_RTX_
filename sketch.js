
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var wall1, wall2, wall3,wall4;
var paper,ground;
var trashIMG;


function preload(){

	//nothing yet :p
}

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	
	
	ground = new Ground(600,height,1200,20);

	paper = new Paper(200,300,40);

	wall1 = new Trash(600, 380, 180,10);
	wall2 = new Trash(512, 290, 10,195);
	wall3 = new Trash(685, 250, 10,300);
	wall4 = new Trash(600,100,200,10);

	


	trashIMG = new TrashIMG(600,350);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);
  
  keyDown(paper);
  
  ground.display();
  paper.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  trashIMG.display();
  
}

function keyDown(object1){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(object1.body,object1.body.position,{x:0.5,y:-1});
	  }

}


