function preload(){
  shipImg1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg = loadImage ("sea.png");
  }
  
  function setup(){
    background("blue");
    createCanvas(400,400);
    var sea = createSprite(0,0,200,200);
    sea.addImage("seaImg");
    sea.velocityX= -2;
    sea.scale= 0.3;
    var ship = createSprite(200,200,50,20);
    ship.addAnimation("movingship",shipImg1);
    ship.scale= 0.25;
    
  }
  
  function draw() {
    background(0)
    sea.velocityX=-3;
    //para reiniciar el codigo
    if (sea.x <0){
      sea.x=sea.width/2;
    }
   drawSprites()
  }