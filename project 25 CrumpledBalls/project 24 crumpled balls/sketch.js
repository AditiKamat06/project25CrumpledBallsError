const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,binBase, binRight, binLeft,ball,ground;

function preload() {}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

	slingshot = new Slingshot(ball.body,{x:50,y:600});
	
	ball = new Balls(100,600,30,30);
	ball.shapeColor = color(0,255,0);
	
	ground =  Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );

	binBottom = new Bins (870,700,270,10);
	binBottom.shapeColor=0;
	
	World.add(world ,binBottom);
	World.add(world ,pole);
	World.add(world ,slingshot);
	World.add(world, ball);
	World.add(world, ground);
}

function draw(){
    background(0);
    Engine.update(engine);
	
	ball.display();
	binBottom.display();
	ground.display();
	launcher.display();
}

function mouseDragged(){
   Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY}); 
}
function mouseReleased(){
 slingshot.fly();   
}