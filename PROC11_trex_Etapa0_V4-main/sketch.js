
var trex ,trex_running;
var edges;
var ground, groundimg, invisible;
var nubeImg, nubes;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImg=loadImage("ground2.png");
  nubeImg=loadImage("cloud.png"); 
}

function setup(){
  createCanvas(600,200)

//crear sprite de Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.7;
  //piso
  ground = createSprite(200, 190, 600, 20);
  ground.addImage(groundImg);
  invisible=createSprite(200, 190, 600, 10);
  invisible.visible=false;

  edges = createEdgeSprites();
}



function draw(){
  background("#CCD1D1")
  
  ground.velocityX =-2;
  //regeneración de piso
  if(ground.x < 0){
    ground.x=ground.width/2;
    trex.collide(ground);
  }


  if(keyDown("space") && trex.y >= 100){
    trex.velocityY= -10 
  }
  trex.velocityY=trex.velocityY +0.8;
  trex.collide(ground);
createNubes();
drawSprites ();

}


//fucion de nuves ggwps
function crearnubes(){
  if(frameCount % 60 == 0){
var nube=createSprite(600, 100, 30, 10);
nube.addImage(nubeImg0);
nube,scale=0,5;
nube.y=Math.round(random(10, 100))
nube.velocityX=3;

}

}