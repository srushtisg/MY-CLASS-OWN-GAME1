var sun;
var asteroid1;var asteroid2;var spaceship;var laser;var night;

function preload(){
sunImage = loadImage("sun.jpg");
asteroidImage = loadImage("Asteroid.jpg");
spaceshipImage = loadImage("spaceship.png");
laserImage = loadImage("laser.jpg");
backgroundImg = loadImage("night.jpg");
}

function setup(){
    canvas = createCanvas(2000,2000);
    sun = createSprite(750,330,20,50);
    sun.addImage("sun",sunImage);
    sun.scale = 0.1;
     spaceship = createSprite(mouseX,mouseY,20,50 );
    spaceship.addImage("spaceship",spaceshipImage);
    spaceship.scale = 0.2;
   // spaceship.xPosition = World.mouseX;
   // spaceship.yPosition = World.mouseY;
   asteroid1 = createSprite(100,10,20,50);
   asteroid1.addImage("asteroid1",asteroidImage);
   asteroid1.scale = 0.1;
}
function draw(){
 background(backgroundImg);
 
 drawSprites();
}