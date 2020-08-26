

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimg;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1350, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground=new box(width/2,745,width,40);
 b1=new Paper(200,200,40);
Engine.run(engine);
 l1=new launch(b1.body,{x:150,y:500}); 
  base1=new box(600,600,400,20);
  base2=new box(1000,300,300,20);
  
  block2=new box1(518,570,50,80);
  block3=new box1(570,570,50,80);
  block4=new box1(620,570,50,80);
  block5=new box1(674,570,50,80);
  block6=new box1(726,570,50,80);
  block7=new box1(466,479,50,80);
  block8=new box1(516,465,50,80);
  block9=new box1(570.5,465,50,80);
  block10=new box1(623.5,465,50,80);
  block11=new box1(674,465,50,80);
  block12=new box1(570,365,50,80);
  block13=new box1(620,365,50,80);
  block14=new box1(595,265,50,80);
  b15=new box1(1000,200,40,70);
  b16=new box1(957,200,40,70);
  b17=new box1(1044,200,40,70);
  b18=new box1(913,200,40,70);
  b19=new box1(1087,200,40,70);
  b20=new box1(1000,150,40,70);
  b21=new box1(957,150,40,70);
  b22=new box1(1044,150,40,70);
  b23=new box1(1000,100,40,70);
}


function draw() {
  rectMode(CENTER);
  background(220,150,255);
ground.display();
b1.display();
l1.display();
base1.display();
base2.display();

block2.display() ;
block3.display() ;
block4.display() ;
block5.display() ;
block6.display() ;
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
b15.display();
b16.display();

b17.display();

b18.display();
b19.display();
b20.display();
b21.display();
b22.display();
b23.display();
 drawSprites();
 fill("red");
 textSize(20);
 text("press space to get one more chance!",200,200);
}


function mouseDragged(){
  Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  l1.fly();
  
  }
  function keyPressed(){
    if(keyCode===32){
    
       Matter.Body.setPosition(b1.body,{x:150,y:592}); 
        l1.attach(b1.body);
    }}