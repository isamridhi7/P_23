var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1;
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
	rectMode(CENTER);
	//engine = Engine.create();
    //world = engine.world;
	
	
	


	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="brown"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
console.log(packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

boxposition = width/2-100;
boxY = 610;

boxleftsprite = createSprite(boxposition,boxY,20,100);
boxleftsprite.shapeColor = "red";

boxleftbody = Bodies.rectangle(boxposition+20 ,boxY,20,100,{isStatic:true});
World.add(world,boxleftbody);

boxbase = createSprite(boxposition+100,boxY+40,200,20);
boxbase.shapeColor = "red";

boxbottombody = Bodies.rectangle(boxposition+100 ,boxY+45-20,200,20,{isStatic:true});
World.add(world,boxbottombody);


boxleftsprite = createSprite(boxposition+200,boxY,20,100);
boxleftsprite.shapeColor = "red";

boxrightbody = Bodies.rectangle(boxposition+200-20 ,boxY,20,100,{isStatic:true});
World.add(world,boxrightbody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
 
}

function keyPressed() {
if(keyCode === LEFT_ARROW){
	helicopterSprite.x = helicopterSprite.x-20
	translation = {x:-20,y:0};
	Matter.Body.translate(packageBody,translation)
}
else if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+20
	translation = {x:20,y:0};
	Matter.Body.translate(packageBody,translation)
}

else  if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);
 
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



