const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var snow;


function preload(){
  BackgroundImage()
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
 snow = new Snow(100,10,50,50);
 snow1 = new Snow(300,0,50,50);
 snow2 = new Snow(500,20,50,50);
 snow3 = new Snow(700,0,50,50);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);

  snow.display();
  snow1.display();
  snow2.display();
  snow3.display();
 
  drawSprites();
}
async function BackgroundImage() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
  if(hour>=06&&hour<=17){
      bg="snow1.jpg"
  }
  else if(hour == 18){
    bg = "snow3.jpg"
  }
  else{
      bg="snow2.jpg"
  }
  backgroundImg = loadImage(bg)
}

