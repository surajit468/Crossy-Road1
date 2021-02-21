var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var carGroup1;
var logGroup1; 

function preload()
{
 
}

function setup() {
  createCanvas(1500,600);
  carGroup1 = new Group();
  logGroup1 = new Group();
   
 }

function draw() {
  background("skyblue");
  //grasses where player can rest
 for(var i=0;i<6;i++) {
   var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
   if(i%2===0) //adding road
   {
     var road= createSprite(683,height-150-(i*400)-grassHeight,width,300)
     road.shapeColor="black";
   }
   bottomGrass1.shapeColor = "green";
 }
 //To create rows of car
 for(var i = 0; i < 40; i++){
car = new Car(2);
carGroup1.add(car.spt);
 }

 //making the logs reappear
for(i=1;i<logGroup1.length;i++) {
  if(logGroup1[i].x<0)
  {
    logGroup1[i].x=width;
  }
}

  drawSprites();
}

