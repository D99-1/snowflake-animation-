
var makkapakka,makkapakkaimg
var umb,umbI
var bgImg

function preload() {
makkapakkaimg = loadImage("fazemakkapakka.jpg")
umbI = loadImage("OIP.jpg")
}
function setup() {
  createCanvas(800,400);
 makkapakka = createSprite(400,300,20,50)
 makkapakka.addImage(makkapakkaimg)
 makkapakka.scale = 0.1;
 umb = createSprite(400,200,20,50)
 umb.addImage(umbI)
 umb.scale = 0.2;
}

function draw() {
  background("black");  
  

  createSnowflake();
  createSnowflakee();
  ds();
}
 
  

function createSnowflake(){
  if(frameCount%10===0){
  snowflake = createSprite(random(0,350), 0, 50, 50);
  snowflake.shapeColor = "blue"
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.scale = 0.1;
  }
}
function createSnowflakee(){
  if(frameCount%10===0){
  snowflake = createSprite(random(600,800), 0, 50, 50);
  snowflake.shapeColor = "blue"
  snowflake.velocityX = -2;
  snowflake.velocityY = 4;
  snowflake.scale = 0.1;
  }
}
function ds(){
  drawSprites();
}