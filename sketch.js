
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundobject;

var leftside,rightside;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	var ball_options={
		isStatic:false,
		restitution:.3,
		friction:0,
		density:1.2
	}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
  	World.add(world,ball)
  	rectMode(CENTER);
    ellipseMode(RADIUS);


	groundobject=new Ground(width/2,670,width,20)
	leftside = new Ground (1100,600,20,120)
	rightside = new Ground (1350,600,20,120)
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobject.show();
	leftside.show();
	rightside.show();
  ellipse(ball.position.x,ball.position.y,20)

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}





