var mar, barco;
var imagen_mar, animacion_barco


function preload(){

  animacion_barco= loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  imagen_mar=loadImage("sea.png");

}

function setup(){
  createCanvas(4168,1667);

  mar = createSprite(2000,100);
  mar.addImage(imagen_mar);

  barco = createSprite(750,400,200,400);
  barco.addAnimation("barco", animacion_barco);
  barco.scale=0.5;


  
}

function draw() {
  
  
  mar.velocityX=-4;

  if (mar.x<0){
    mar.x=mar.width /2;

  }
 



  drawSprites();
 
}