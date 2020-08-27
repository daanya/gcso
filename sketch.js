var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50);
  wall = createSprite(1000,200,60,height/2)
  car.shapeColor = "white";
  wall.shapeColor = "white";
  car.velocityX = speed;
}

function draw() {
  background(0);  
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/22509;
    if(damage>180){
      car.shapeColor = "red";
    }
    if (damage<180&&damage>80){
      car.shapeColor = "yellow";
    }
    if (damage<80){
      car.shapeColor = "green";
    }
  }
  drawSprites();
}