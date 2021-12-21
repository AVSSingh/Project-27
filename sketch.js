
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob,roof,chain;

function preload(){}


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(150,100,20);
	bob2 = new Bob(400,300,20);
	bob3 = new Bob(450,300,20);
	bob4 = new Bob(500,300,20);
	bob5 = new Bob(550,300,20);

	roof = new Roof(450,100,300,30)

	rope1 = new Rope(bob1.body,{x:350,y:100});
	rope2 = new Rope(bob2.body,{x:400,y:100});
	rope3 = new Rope(bob3.body,{x:450,y:100});
	rope4 = new Rope(bob4.body,{x:500,y:100});
	rope5 = new Rope(bob5.body,{x:550,y:100});
	
	
	
	Engine.run(engine);
  
}


function draw() {
	background(225);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	textSize(20);
	text("Drag the ball",120,120);
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();


  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})
}
