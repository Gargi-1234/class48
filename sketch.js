const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var startButton, clickHereButton
var ball, ground, slingshot1, slingshot1Img
var background1Img, backgroundSprite, background2Img, background3Img
var gate, gateImg, invisibleSprite1, invisibleSprite2, instructionBox2, instructionBox2Img
var block1, block2, block3, block4, block5, block6, block7, block8, block9, blockImg
var block1s, block2s, block3s, block4s, block5s, block6s, block7s, block8s, block9s
var carnival1, carnival1Img, carnival2, carnival2Img, carnival5, carnival5Img, carnival6, carnival6Img
var carnival3, carnival3Img, carnival4, carnival4Img, stone, stoneImg
var openButton, openButtonImg, chest1, chest2, key1chest, key1chest2, bronzeKey, bronzeKeyImg
var ticket, ticketImg, ticketBooth, ticketBoothImg, instructionBox3, instructionBox3Img

var wall1m, wall2m, wall3m, wall4m, wall5m, wall6m, wall7m, wall8m
var wall9m, wall10m, wall13m, wall14m, wall15m, wall16m, wall17m, wall18m
var wall12m, wall21m, wall23m, wall22m, wall19m, wall11m, wall20m
var reset, resetImg
var maze1, maze2, maze3, maze1Img, maze2Img, maze3Img, player1

var lifeBarA, lifeBarImage, lifeBar, lifeBarB
var gameOver, gameOverImg
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard8, cardboard9, cardboard10, cardboard11
var cardboard21, cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20, cardboard22
var cardboardTop, cardboardLeft, cardboardRight, cardboardBottom

var mazeEntrance, mazeEntranceImg, playNow, playNowImg
var instructionBox4, instructionBox4Img, instructionBox5, instructionBox5Img
var welcome, welcomeImg, instructionBox1, instructionBox1Img
var play, clickHere
var gameState = 0 

// maze, maze visuals, map for the maze, entrance and exit , gameState = 3 >> maze , gameState = 4 >> maze end  

function preload(){
  background1Img = loadImage("images/background.jpg")
  background2Img = loadImage("images/carnival/1.jpg")
  background3Img = loadImage("images/background2.jpg")
  welcomeImg = loadImage("images/welcome.png")
  carnival1Img = loadImage("images/carnival/1.jpg")
  carnival2Img = loadImage("images/carnival/2.jpg")
  carnival3Img = loadImage("images/carnival/3.jpg")
  carnival4Img = loadImage("images/carnival/4.jpg")
  carnival5Img = loadImage("images/carnival/5.jpg")
  carnival6Img = loadImage("images/carnival/6.jpg")
  gateImg = loadImage("images/gate.png")
  play = loadImage("images/play.png")
  clickHere = loadImage("images/clickHere.png")
  ticketImg = loadImage("images/ticket.png")
  ticketBoothImg = loadImage("images/ticketBooth.png")
  instructionBox1Img = loadImage("images/Instruction1.png")
  instructionBox2Img = loadImage("images/Instruction2.png")
  chest1 = loadImage("images/chest1.png")
  chest2 = loadImage("images/chest2.png")
  openButtonImg = loadImage("images/open.png")
  instructionBox3Img = loadImage("images/Instruction3.png")
  blockImg = loadImage("images/block.png")
  stoneImg = loadImage("images/stone.png")
  bronzeKeyImg = loadImage("images/bronzeKey.png")
  instructionBox4Img = loadImage("images/instruction4.png")
  mazeEntranceImg = loadImage("images/maze/maze1.jpg")
  instructionBox5Img = loadImage("images/instruction5.png")
  playNowImg = loadImage("images/playNow.png")
  maze1Img = loadImage("images/maze/maze2.jpg")
  maze2Img = loadImage("images/maze/maze3.jpg")
  maze3Img = loadImage("images/maze/maze4.jpg")
  lifeBarImage = loadImage("images/lifeBar.png")
  gameOverImg = loadImage("images/gameOver.png")
  resetImg = loadImage("images/restart.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  startButton = createSprite(width/2,height/2)
  startButton.addImage(play)
  startButton.scale = 0.9

  gate = createSprite(340,200)
  gate.addImage("carnivalGate",gateImg)
  gate.visible = false
  gate.scale = 1.1

  ticket = createSprite(width/2,height/2)
  ticket.addImage(ticketImg)
  ticket.visible = false
  
  ticketBooth = createSprite(700,220)
  ticketBooth.addImage(ticketBoothImg)
  ticketBooth.visible = false
  
  clickHereButton = createSprite(-705,-310)
  clickHereButton.addImage(clickHere)
  clickHereButton.scale = 0.5

  openButton = createSprite(-310,-370)
  openButton.addImage(openButtonImg)
  openButton.scale = 0.5

  playNow = createSprite(-400,-200)
  playNow.addImage(playNowImg)
  playNow.scale = 0.9
  playNow.visible = false

  key1chest = createSprite(-320,-320)
  key1chest.addImage(chest1)
  key1chest.scale = 0.8
  key1chest.visible = false

  key1chest2 = createSprite(-320,-320,30,30)
  key1chest2.visible = false

  instructionBox1 = createSprite(400,50)
  instructionBox1.addImage(instructionBox1Img)
  instructionBox1.scale = 0.5
  instructionBox1.visible = false

  instructionBox2 = createSprite(650,320)
  instructionBox2.addImage(instructionBox2Img)
  instructionBox2.scale = 0.7
  instructionBox2.visible = false

  instructionBox3 = createSprite(200,100)
  instructionBox3.addImage(instructionBox3Img)
  instructionBox3.scale = 0.4
  instructionBox3.visible = false

  instructionBox4 = createSprite(400,60)
  instructionBox4.addImage(instructionBox4Img)
  instructionBox4.scale = 0.6
  instructionBox4.visible = false

  instructionBox5 = createSprite(610,300)
  instructionBox5.addImage(instructionBox5Img)
  instructionBox5.scale = 0.6
  instructionBox5.visible = false

  invisibleSprite1 = createSprite(100,10)
  invisibleSprite1.visible = false

  invisibleSprite2 = createSprite(300,10)
  invisibleSprite2.visible = false

  ground = new Ground()

  // creating Blocks 

  block1 = new Block(350,334,30,30)
  block2 = new Block(385,334,30,30)
  block3 = new Block(315,334,30,30)
  block4 = new Block(280,334,30,30)
  block5 = new Block(245,334,30,30)

  block6 = new Block(350,304,30,30)
  block7 = new Block(315,304,30,30)
  block8 = new Block(280,304,30,30)

  block9 = new Block(315,274,30,30)
 
  block1s = createSprite(block1.body.position.x,block1.body.position.y,30,30)
  block1s.addImage(blockImg)
  block1s.scale = 0.075
  block1s.visible = false

  block2s = createSprite(block2.body.position.x,block2.body.position.y,30,30)
  block2s.addImage(blockImg)
  block2s.scale = 0.075
  block2s.visible = false

  block3s = createSprite(block3.body.position.x,block3.body.position.y,30,30)
  block3s.addImage(blockImg)
  block3s.scale = 0.075
  block3s.visible = false

  block4s = createSprite(block4.body.position.x,block4.body.position.y,30,30)
  block4s.addImage(blockImg)
  block4s.scale = 0.075
  block4s.visible = false

  block5s = createSprite(block5.body.position.x,block5.body.position.y,30,30)
  block5s.addImage(blockImg)
  block5s.scale = 0.075
  block5s.visible = false

  block6s = createSprite(block6.body.position.x,block6.body.position.y,30,30)
  block6s.addImage(blockImg)
  block6s.scale = 0.075
  block6s.visible = false

  block7s = createSprite(block7.body.position.x,block7.body.position.y,30,30)
  block7s.addImage(blockImg)
  block7s.scale = 0.075
  block7s.visible = false

  block8s = createSprite(block8.body.position.x,block8.body.position.y,30,30)
  block8s.addImage(blockImg)
  block8s.scale = 0.075
  block8s.visible = false

  block9s = createSprite(block9.body.position.x,block9.body.position.y,30,30)
  block9s.addImage(blockImg)
  block9s.scale = 0.075
  block9s.visible = false

  ball = new Ball(30,300,15)

  stone = createSprite(100,100,25,25)
  stone.addImage(stoneImg)
  stone.scale = 0.2
  stone.visible = false

  slingshot1 = new Slingshot(ball.body,{x:60,y:310})

  bronzeKey = createSprite(-325,-250)
  bronzeKey.addImage(bronzeKeyImg)
  bronzeKey.scale = 0.5 
  bronzeKey.visible = false
/*
  wall1m.visible = false
  wall2m.visible = false
  wall3m.visible = false
  wall4m.visible = false
  wall5m.visible = false
  wall6m.visible = false
  wall7m.visible = false
  wall8m.visible = false
  wall9m.visible = false
  wall10m.visible = false
  wall11m.visible = false
  wall12m.visible = false
  wall13m.visible = false
  wall14m.visible = false
  wall15m.visible = false


  lifeBarA.visible = false
  lifeBarB.visible = false
  lifeBar.visible = false
  player1.visible = false
  cardboard1.visible = false
  cardboard2.visible = false
  cardboard3.visible = false
  cardboard4.visible = false
  cardboard5.visible = false
  cardboard6.visible = false
  cardboard7.visible = false
  cardboard8.visible = false
  cardboard9.visible = false
  cardboard10.visible = false
  cardboard11.visible = false
  cardboard12.visible = false
  cardboard13.visible = false
  cardboard14.visible = false
  cardboard15.visible = false
  cardboard16.visible = false
  cardboard17.visible = false
  cardboard18.visible = false
  cardboard19.visible = false
  cardboard20.visible = false
  cardboard21.visible = false
  cardboard22.visible = false
  maze1.visible = false
  maze2.visible = false
  cardboardLeft.visible = false
  cardboardRight.visible = false
  cardboardTop.visible = false
  cardboardBottom.visible = false
  canvasSprite1.visible = false
*/
  carnival6 = createSprite(width/2,height/2)
  carnival6.addImage(carnival6Img)
  carnival6.scale = 0.7
  carnival6.visible = false

  carnival5 = createSprite(width/2,height/2)
  carnival5.addImage(carnival5Img)
  carnival5.scale = 0.7
  carnival5.visible = false

  carnival4 = createSprite(width/2,height/2)
  carnival4.addImage(carnival4Img)
  carnival4.scale = 0.7  
  carnival4.visible = false

  carnival3 = createSprite(width/2,height/2)
  carnival3.addImage(carnival3Img)
  carnival3.scale = 0.7
  carnival3.visible = false

  carnival2 = createSprite(width/2,height/2)
  carnival2.addImage(carnival2Img)
  carnival2.scale = 0.7
  carnival2.visible = false

  carnival1 = createSprite(width/2,height/2)
  carnival1.addImage(carnival1Img)
  carnival1.scale = 0.7
  carnival1.visible = false

  welcome = createSprite(100,100,20,20)
  welcome.addImage(welcomeImg)
  welcome.visible = false

}

function draw() {
    Engine.update(engine);

    console.log(gameState)

    block1s.x = block1.body.position.x
    block1s.y = block1.body.position.y
    block2s.x = block2.body.position.x
    block2s.y = block2.body.position.y
    block3s.x = block3.body.position.x
    block3s.y = block3.body.position.y
    block4s.x = block4.body.position.x
    block4s.y = block4.body.position.y
    block5s.x = block5.body.position.x
    block5s.y = block5.body.position.y
    block6s.x = block6.body.position.x
    block6s.y = block6.body.position.y
    block7s.x = block7.body.position.x
    block7s.y = block7.body.position.y
    block8s.x = block8.body.position.x
    block8s.y = block8.body.position.y
    block9s.x = block9.body.position.x
    block9s.y = block9.body.position.y

    stone.x = ball.body.position.x
    stone.y = ball.body.position.y

  if(gameState === 0){
  background(background1Img);  
  }

  if(mousePressedOver(startButton)){
    startButton.x = 10000
    startButton.y = 10000
    startButton.destroy()
    welcome.visible = true
    welcome.velocityX = 4
  
    ticketBooth.visible = true
   // ticket.visible = true
    gate.visible = true
    gameState = 1
    //text(" instructions ")
  }
  if(gameState === 1){
    
    background(background2Img)
    clickHereButton.x = 705
    clickHereButton.y = 310

    if(mousePressedOver(clickHereButton)){
    
      ticketBooth.visible = false
      gate.visible = false
  
      ticket.visible = true
      ticket.lifetime = 15
  
      clickHereButton.destroy()
  
      carnival1.visible = true
      carnival1.lifetime = 20
      carnival2.visible = true
      carnival2.lifetime = 25
      carnival3.visible = true
      carnival3.lifetime = 30
      carnival4.visible = true
      carnival4.lifetime = 35
      carnival5.visible = true
      carnival5.lifetime = 40
      carnival6.visible = true
      carnival6.lifetime = 45
  
      instructionBox1.visible = true
      invisibleSprite1.velocityX = 2.5
    }
  
    if(invisibleSprite1.isTouching(invisibleSprite2)){
      background(carnival6Img)
      invisibleSprite2.velocityX = 2.5
    }
  

  }

 
  if(gameState === 2){
    background(background3Img)

    ground.display()
    ball.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
   
    stone.visible = true
    block1s.visible = true
    block2s.visible = true
    block3s.visible = true
    block4s.visible = true
    block5s.visible = true
    block6s.visible = true
    block7s.visible = true
    block8s.visible = true
    block9s.visible = true
    
    key1chest.visible = true
    key1chest.x = 320
    key1chest.y = 320

    key1chest2.x = 320
    key1chest2.y = 320

    slingshot1.display()
    
    instructionBox2.visible = true
    instructionBox3.visible = true
    

  if(stone.isTouching(key1chest2)){
    key1chest.addImage(chest2)
    bronzeKey.x = 325
    bronzeKey.y = 250
    bronzeKey.visible = true

    instructionBox2.destroy()
    instructionBox3.destroy()

    instructionBox4.visible = true

    block1.body.position.x = 1000
    block1.body.position.y = 1000
    block2.body.position.x = 1000
    block2.body.position.y = 1000
    block3.body.position.x = 1000
    block3.body.position.y = 1000
    block4.body.position.x = 1000
    block4.body.position.y = 1000
    block5.body.position.x = 1000
    block5.body.position.y = 1000
    block6.body.position.x = 1000
    block6.body.position.y = 1000
    block7.body.position.x = 1000
    block7.body.position.y = 1000
    block8.body.position.x = 1000
    block8.body.position.y = 1000
    block9.body.position.x = 1000
    block9.body.position.y = 1000

    slingshot1.fly();
    ball.body.position.x = 1000
    ball.body.position.y = 1000
   }


  }

  if(gameState === 3){
    background(mazeEntranceImg)
    key1chest.visible = false
    bronzeKey.visible = false
    playNow.x = 400
    playNow.y = 350
    playNow.visible = true

    if(mousePressedOver(playNow)){
      background(mazeEntranceImg)
      playNow.destroy()
      gameState = 4
    }
  
  }

  if(gameState === 4){

  maze1 = createSprite(400,200,800,400)
  maze1.addImage(maze1Img)
  maze1.scale = 0.499

  maze2 = createSprite(400,200,800,400)
  maze2.addImage(maze2Img)
  maze2.scale = 1.1

  canvasSprite1 = createSprite(102,102,200,200)
  canvasSprite1.shapeColor = "black"

  cardboard1 = createSprite(50/2,30/2,10/2,50/2);
  cardboard1.shapeColor = "white";
  
  cardboard2 = createSprite(100/2,100/2,100/2,10/2);
  cardboard2.shapeColor = "white";
  
  cardboard3 = createSprite(100/2,65/2,10/2,80/2);
  cardboard3.shapeColor = "white";
  
  cardboard4 = createSprite(250/2,100/2,100/2,10/2);
  cardboard4.shapeColor = "white";
  
  cardboard5 = createSprite(52/2,150/2,95/2,10/2);
  cardboard5.shapeColor = "white";
  
  cardboard6 = createSprite(50/2,250/2,10/2,100/2);
  cardboard6.shapeColor = "white";
  
  cardboard7 = createSprite(120/2,200/2,150/2,10/2);
  cardboard7.shapeColor = "white";
  
  cardboard8 = createSprite(200/2,150/2,10/2,100/2);
  cardboard8.shapeColor = "white";
  
  cardboard9 = createSprite(150/2,125/2,10/2,152/2);
  cardboard9.shapeColor = "white";
  
  cardboard10 = createSprite(250/2,50/2,100/2,10/2);
  cardboard10.shapeColor = "white";
  
  cardboard11 = createSprite(320/2,150/2,50/2,10/2);
  cardboard11.shapeColor = "white";
  
  cardboard12 = createSprite(300/2,100/2,10/2,100/2);
  cardboard12.shapeColor = "white";
  
  cardboard13 = createSprite(175/2,250/2,150/2,10/2);
  cardboard13.shapeColor = "white";
  
  cardboard14 = createSprite(250/2,200/2,10/2,100/2);
  cardboard14.shapeColor = "white";
  
  cardboard15 = createSprite(250/2,380/2,10/2,50/2);
  cardboard15.shapeColor = "white";
  
  cardboard16 = createSprite(380/2,250/2,55/2,10/2);
  cardboard16.shapeColor = "white";
  
  cardboard17 = createSprite(350/2,175/2,10/2,250/2);
  cardboard17.shapeColor = "white";
  
  cardboard18 = createSprite(50/2,350/2,100/2,10/2);
  cardboard18.shapeColor = "white";
  
  cardboard19 = createSprite(100/2,350/2,10/2,100/2);
  cardboard19.shapeColor = "white";
  
  cardboard20 = createSprite(250/2,350/2,200/2,10/2);
  cardboard20.shapeColor = "white";
  
  cardboard21 = createSprite(180/2,300/2,150/2,10/2);
  cardboard21.shapeColor = "white";
  
  cardboard22 = createSprite(300/2,270/2,10/2,150/2);
  cardboard22.shapeColor = "white";
  
  cardboardLeft = createSprite(5,110,5,180)
  cardboardLeft.shapeColor = "white";
  cardboardRight = createSprite(200,95,5,180)
  cardboardRight.shapeColor = "white";
  cardboardTop = createSprite(90,200,180,5)
  cardboardTop.shapeColor = "white";
  cardboardBottom = createSprite(112,4,180,5)
  cardboardBottom.shapeColor = "white";

  wall1m = createSprite(15,25,15,16)
 // wall1m.visible 

  wall2m = createSprite(15,45,15,25)
  wall2m.shapeColor = "yellow"

  wall3m = createSprite(15,65,15,15)
  wall3m.shapeColor = "white"

  wall4m = createSprite(15,87,15,20)
  wall4m.shapeColor = "red"

  wall5m = createSprite(36,63,26,20)
  wall5m.shapeColor = "red"

  wall6m = createSprite(36,86,26,20)
  wall6m.shapeColor = "blue"

  wall7m = createSprite(60,63,20,20)
  wall7m.shapeColor = "white"

  wall8m = createSprite(62,85,20,20)
  wall8m.shapeColor = "yellow"

  wall9m = createSprite(15,125,15,55)
  wall9m.shapeColor = "white"

  wall10m = createSprite(15,163,15,20)
  wall10m.shapeColor = "yellow"

  wall11m = createSprite(36,163,25,20)
  wall11m.shapeColor = "blue"

  wall12m = createSprite(38,137,21,30)
  wall12m.shapeColor = "red"

  wall13m = createSprite(88,137,80,20)
  wall13m.shapeColor = "blue"

  wall14m = createSprite(36,163,26,20)
  wall14m.shapeColor = "blue"

  wall15m = createSprite(36,163,26,20)
  wall15m.shapeColor = "blue"

  player1 = createSprite(15,20/2,15/2,15/2)
  player1.shapeColor = "red"


  lifeBarA = createSprite(700,60,150,40)
  lifeBarA.shapeColor = "white"
  lifeBarB = createSprite(700,60,150,40)
  lifeBarB.shapeColor = "red"

  lifeBar = createSprite(600,60)
  lifeBar.addImage(lifeBarImage)
  lifeBar.scale = 0.1

  keyPressed()
  playerMovement()


  gameOver = createSprite(400,200)
  gameOver.addImage(gameOverImg)
  gameOver.visible = false

  reset = createSprite(600,300)
  reset.addImage(resetImg)
  reset.scale = 0.2
  reset.visible = false

  
  if(mousePressedOver(reset)){
    restart()
  }
  


  }

  drawSprites();
}

function keyPressed(){

  if(keyCode === 78 ){
    gameState = 3
    instructionBox4.visible = false
  }
 
  if(keyCode === 32)
  {
    gameState = 2
    instructionBox1.visible = false
    slingshot1.attach(ball.body)
  } 
  
  if(keyCode === UP_ARROW){
    //  player1.y = player1.y - 4
     player1.velocityX= 0
     player1.velocityY= -0.5
    }
  
    if(keyCode === DOWN_ARROW){
     // player1.y = player1.y + 4
     player1.velocityX= 0
     player1.velocityY= 0.5
    }
  
    if(keyCode === RIGHT_ARROW){
     // player1.x = player1.x + 4
     player1.velocityX= -0.5
     player1.velocityY= 0
    }
  
    if(keyCode === LEFT_ARROW){
     // player1.x = player1.x - 4
     player1.velocityX= 0.5
     player1.velocityY= 0
    }

}

function playerMovement(){

  if(player1.isTouching(wall1m)){
    maze2.scale = maze2.scale+0.005

  }

  if(player1.isTouching(wall2m)){
    maze1.visible = true
    maze2.visible = false
    maze1.scale = maze1.scale+0.005
    maze2.scale = 1.1

  }

  if(player1.isTouching(cardboard1)){
    lifeBarB.width = lifeBarB.width - 30
     lifeBarB.x = lifeBarB.x + 15
     player1.velocityX = 0
     player1.velocityY = 0
     player1.velocityX = 0
     player1.velocityY = 0
     player1.x = 15
     player1.y = 10
   } 
   if(lifeBarB.width <= 0){
    lifeBarB.visible = false
    gameOver.visible = true
    reset.visible  = true

   }

}

function restart(){
  //gameState = 4
  lifeBarB.width = 150
  lifeBarB.visible = true
  lifeBarB.x = 700
  gameOver.visible = false
  reset.visible = false
}  

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}
