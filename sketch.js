var helicopterIMG, helicopterSprite, packageSprite, packageIMG;

var packageBody;

var box1,box2,box3;

var ground;

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	
	packageIMG=loadImage("package.png")
}

function setup() {
	
	createCanvas(800, 700);
	engine = Engine.create();
	
	world = engine.world;
	
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	
	packageSprite.addImage(packageIMG)
	
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	
	helicopterSprite.addImage(helicopterIMG)
	
	helicopterSprite.scale=0.6

ground = new Box(400, 690, 800, 10, "green")



	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:1, isStatic:true});
	
	World.add(world, packageBody);

	box2 = new Box(500,650,20,100,"red");
	
	box3 = new Box(295,650,20,100,"red");
	
	box1 = new Box(400,690,200,20,"red");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  
  background(0);

  packageSprite.x= packageBody.position.x 

  packageSprite.y= packageBody.position.y 

  drawSprites();

 
	box1.display();

	box2.display();

	box3.display();

  Engine.update(engine);
}
function keyPressed() 
{ if (keyCode === LEFT_ARROW)
	 { helicopterSprite.x=helicopterSprite.x-20; 
		translation={x:-20,y:0} 
	 Matter.Body.translate(packageBody, translation) }
	  else if (keyCode === RIGHT_ARROW) { helicopterSprite.x=helicopterSprite.x+20; 
		translation={x:20,y:0} 
		Matter.Body.translate(packageBody, translation) }
		 else if (keyCode === DOWN_ARROW) { 
			 Matter.Body.setStatic(packageBody,false); } }


// MADE BY KARTAVYA :D
// DO NOT COPY