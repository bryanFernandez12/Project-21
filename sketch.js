var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
//createSprite(400, 200, 50, 50);
speed = random(223,331);
weight = random(30,52);
thickness = random(22,83);

bullet = createSprite(50,200,50,10);
bullet.velocityX = speed;
wall = createSprite(1200,200,thickness,800);

  
  
}

function draw() {
  background(80,80,80,) 
  
  //bullet.collide(wall);
 
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = (0.8 * weight * speed * speed)/(thickness * thickness * thickness);
    console.log(damage);
    //console.log(speed);
    //console.log(thickness);
    
    
    if(damage > 35)
    {
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage < 35)
    {
      wall.shapeColor=color(0,255,0); 
    }
   
    
    
    }

  
  drawSprites();

  
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
 
    return true
  }
return false;

}