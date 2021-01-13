class Food{
    constructor(){
       this.image = image("images/Milk.png");
    }

    getFoodStock(){
      fedTime = firebase.database().ref('FeedTime');
      fedTime.on("value",function(data){
          lastFed = data.val();
      });
    }

    updateFoodStock(){
     firebase.database().ref('/').update({
         
     })
    }

    deductFood(){

    }

    display(){

    }
}