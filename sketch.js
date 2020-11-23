//Create variables here
var dog, dogImg, dogH;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogH = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock = firebase.database().ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  //add styles here
  if(keyWentDown("F")){
    writeStock(foodS);
    dog.addImage(dogH);
  }

  if(keyWentDown("A")){
    firebase.database().ref('/').update({
      Food:20
    })
  }

  fill("white");
  textSize(20);
  text("Food Left"+foodS,170,150);
  text("if Food finished then press A key to refill the Food",20,100);
  text("Note: Press F Key to Feed Drago Milk!",100,50);

  drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(b){

  if(b<=0){
    b= 0;
  }
  else{
    b= b-1;
  }

  firebase.database().ref('/').update({
    Food:b
  })
}

