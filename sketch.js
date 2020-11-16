//Create variables here
var database;
var dog, dogImg, dogHImg;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogHImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.databsae;
  createCanvas(500, 500);

  dog = createSprite(250,250);
  dog.addImage("dog image",dogImg);
  dog.scale=0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  drawSprites();
  //add styles here

  fill("white");
  textSize(20);
  text("Note: Press UP_ARROW Key to Feed Drago Milk!",100,50);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHImg);
  }
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x= 0;
  }
  else{
    x= x-1;
  }

  database.ref('/').update({
    Food:x
  })
}

