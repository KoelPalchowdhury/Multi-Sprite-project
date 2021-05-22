var ball1, ball2, ball3,ball4,ball5,ball6, edges;

function setup() {
  createCanvas(400, 400);
  ball1 = createSprite(random(5, 200), random(5, 200), random(10,100), random(10,100));
  ball1.shapeColor = "red";
  ball1.velocityX = 4;
  ball1.velocityY = 1;
 ball2 = createSprite(random(5, 200), random(5, 200), random(10,100), random(10,100));
  ball2.shapeColor = "cyan";
  ball2.velocityX = 3;
  ball2.velocityY = 7;
   ball3 = createSprite(random(5, 200), random(5, 200), random(10,100), random(10,100));
  ball3.shapeColor = "lightgreen";
  ball3.velocityX = 7;
  ball3.velocityY = 2;
   ball4 = createSprite(random(5, 200), random(5, 200), random(10,100), random(10,100));
  ball4.shapeColor = "pink";
  ball4.velocityX = 6;
  ball4.velocityY = 2;
   ball5 = createSprite(random(5, 200), random(5, 200), random(10,100), random(10,100));
  ball5.shapeColor = "yellow";
  ball5.velocityX = 10;
  ball5.velocityY = 9;
   ball6 = createSprite(random(5, 200), random(5, 200), random(10,100), random(10,100));
  ball6.velocityX = 4;
  ball6.velocityY = 8;

  ball6.velocityX = 4;
  ball6.velocityY = 8;
  edges=createEdgeSprites()
 
}
function draw() {
    background(220);
    ball1.bounce(ball2)
  ball1.bounce(ball3)
  ball2.bounce(ball3)
  ball4.bounce(ball1)
  ball4.bounce(ball2)
  ball4.bounce(ball3)
  ball5.bounce(ball1)
  ball5.bounce(ball2)
  ball5.bounce(ball3)
  ball5.bounce(ball4)
  ball6.bounce(ball2)
  ball6.bounce(ball3)
  ball6.bounce(ball4)
  ball1.bounce(ball6)
  ball6.bounce(ball5)
  ball1.bounceOff(edges);
  ball2.bounceOff(edges);
  ball3.bounceOff(edges);
  ball4.bounceOff(edges);
  ball5.bounceOff(edges);
  ball6.bounceOff(edges);
  drawSprites();
    
  }
  