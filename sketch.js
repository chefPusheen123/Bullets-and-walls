var moving;
var fixed;
var ob

function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  fixed=createSprite(200,200,50,50);
  ob=createSprite(600,200,50,50);
}

function draw() {
  background(0);  
  drawSprites();
  moving.y=mouseY;
  moving.x=mouseX;
  moving.shapeColor="Blue";
  fixed.shapeColor="blue";
  ob.shapeColor="purple"
 
     if(isTouching(moving,ob)){
moving.shapeColor="pink";
ob.shapeColor="pink";

     }
    }


