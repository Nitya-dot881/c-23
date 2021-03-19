const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

  
 
    box1=new BOX(160,250,40,80)
    box2=new BOX(170,150,30,30)
   ground=new GROUND(200,390,400,50)

    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    box2.display()
    ground.display()
    
}
