const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;

  var holder_options={
    isStatic: true
  }
holder = Bodies.rectangle(800,12,200,20,holder_options);
World.add(world,holder);

var ball_options = {
  restitution : 1.0,
  density : 1.0
  }
ball  = Bodies.circle(820,400,40,ball_options);
World.add(world,ball);

var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 400
}
var string = Constraint.create(options);
World.add(world,string);

fill(0);
}


function draw() {
  background(0); 
  Engine.update(engine); 

text("Press space bar to oscillate the pendulum to left and right with mouse",630,700);
text("Press Enter to stop the Pendulum from oscillating",680,730);
 
fill ("white");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

fill("white");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(2);
stroke("red");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y);

if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}
else if (keyCode === ENTER){
ball.position.x = 820;
}

}
