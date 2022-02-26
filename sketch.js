var sword,metalball1,metalball2,metalball3,bow
var swordImage, metalball1Image, metalball2Image,metalball3Image, backgroundImage,bowImage

var score =0;

function preload(){
    backgroundImage = loadImage("background.jpg");
  
    metalball1Image = loadImage("metal ball1.jpg");
    metalball2Image = loadImage("metal ball2.jpg")
    metalball3Image = loadImage("metal ball3.jpg");
    swordImage = loadImage("sword.jpg");
    bowImage=loadImage("bow.jpg");

function setup() {
    createCanvas(400, 400);
    
    //creating background
    scene = createSprite(0,0,400,400);
    scene.addImage(backgroundImage);
    scene.scale = 2.5
    
    // creating bow to shoot sword
    bow = createSprite(380,220,20,50);
    bow.addImage(bowImage); 
    bow.scale = 1;
    
    score = 0  
    metalball1= new Group();
    metalball2= new Group();
    metalball3= new Group();
      
  }
  
  function draw() {
   background(0);
    // moving ground
    scene.velocityX = -3 
  
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    
    //moving bow
    bow.y = World.mouseY
    
    // release sword when space key is pressed
    if (keyDown("space")) {
      createSword();  
    }
    
    //creating continous enemies
    var select_ball = Math.round(random(1,4));
    
    if (World.frameCount % 100 == 0) {
      if (select_ball == 1) {
        metalball1();
      } else if (select_ball == 2) {
        metalball2();
      } else if (select_ball == 3) {
        metalball3();
      } 
    }
    
    if (swordGroup.isTouching(metalball1)) {
      
      metalball1.destroyEach();
      
      
      swordGroup.destroyEach();
      score=score+1;
    }
  
    if (swordGroup.isTouching(metalball2)) {
      metalball2.destroyEach();
      swordGroup.destroyEach();
      score=score+3;
    }
  
    if (swordGroup.isTouching(metaball3)) {
      metalball3.destroyEach();
      swordGroup.destroyEach();
      score=score+2;
    }
  
   
  
    drawSprites();
    text("Score: "+ score, 300,50);
  }
  
  function metalball1() {
    var metal = createSprite(0,Math.round(random(20, 370)), 10, 10);
    metal.addImage(metalball1Image);
    metal.velocityX = 3;
    metal.lifetime = 150;
    metal.scale = 0.1;
    metal.add(metal1);
  }
  
  function metalball2() {
    var metal2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
    metal2 .addImage(metalball2Image);
    metal2 .velocityX = 3;
    metal2 .lifetime = 150;
    metal2 .scale = 0.1;
    metal2 .add(metal2);
  }
  
  function metalball3() {
    var metal3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
    metal3.addImage(metalball3Image);
    metal3.velocityX = 3;
    metal3.lifetime = 150;
    metal3.scale = 0.1;
    metal3.add(metal3);
  }
  
 
  
  // Creating  swords for bow
   function createSword() {
    var sword= createSprite(100, 100, 60, 10);
    sword.addImage(swordImage);
    sword.x = 360;
    sword.y=bow.y;
    sword.velocityX = -4;
    sword.lifetime = 100;
    sword.scale = 0.3;
    
    
    swordGroup.add(sword);
     
   }
}
