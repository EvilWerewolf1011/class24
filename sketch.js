
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create the Bodies Here.

	ground = new Ground(675,600,1400,10)

	  box1 = new Box(1040,567,135,25);
	  box2 = new Box(960,520,25,120);
	  box3 = new Box(1100,520,25,120);

	  ball = new paper(200,500,40)

    	Engine.run(myEngine);
  
}


function draw() {


	keyPressed ();
  
	Engine.update(myEngine);
	rectMode(CENTER);


  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();  
  drawSprites();
 
	
  


}

function keyPressed (){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80});

	}


}



