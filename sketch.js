var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50,650,10);
	dust1 = new Dustbin(650,675,200,20,"white");
  dust2 = new Dustbin(760,635,20,100,"white");
	dust3 = new Dustbin(540,635,20,100,"white");
	dust4 = new Dustbin(400,690,800,10,"brown");
	dust5 = new Dustbin(650,675,200,20);
	sling = new SlingShot(paper1.body,{x:200, y:350});

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  dust1.display();
  dust2.display();
  dust3.display();
  //dust4.display();
	dust5.display();
	paper1.display();
	sling.display();

  drawSprites();



}
function keyPressed(){
    if(keyDown("space")){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-18});
    }
}
function mouseDragged(){
	Matter.Body.setPosition(paper1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	sling.fly();
}
