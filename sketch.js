const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bBall, ground, sling, hoop, over;
var timer = 60;
var score = 0;

const Ready = 0;
const Play = 1;
const End = 2;
var gameState = Ready;


function setup(){
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  bBall = new Ball(200, 200, 40, 40);
  ground = new Ground(400, 380, 800, 10);
  ground1 = new Ground(624, 230, 70, 5);
  ground2 = new Ground(590, 210, 5, 45);
  ground3 = new Ground(657, 167, 5, 130);
  sling = new SlingShot(bBall.body,{x:185, y:215});
  hoop = new Hoop(660, 230, 0, 0);
  player1 = new Player(120, 270, 0, 0);
  Engine.run(engine);
}

function draw(){
  background("skyblue"); 
  
  if(gameState === Ready){
    fill("black");
    textFont("century gothic");
    noStroke();
    textSize(35);
    text("Basketball Stars!", 10, 35);

    textSize(16);
    text("Hey, I am Damian and I love Basketball.", 60,80);
    text("My friend, Joey, has challenged me to a game of freethrow shooting.", 60,100);
    text("He has attempted this challenge and he is currently the champion with 20 points in one minute", 60,120);
    text("My goal is to either tie him or break his record.", 60,140);
    text("Help me break his record!", 60,160);
    text("You can have as many attempts as you would like in 60 seconds ", 60,200);
    text("To play, you have to drag the ball backwards to shoot", 60,220);
    text("If you miss to hit the basket, press the 'SPACE' key for another try ", 60,240);
    text("You must do all of this in 60 seconds", 60,260);
    text("Press 'S' to start the game", 60,280);

  } else if(gameState === Play){
      if (frameCount % 75 == 0 && timer > 0) {
        timer--                 
        }
    
        if(timer===0){
          gameState = End;
        }
    
        if(bBall.body.position.x>589 && bBall.body.position.x<659 && bBall.body.position.y>193 && bBall.body.position.y<253){
          score = score+2;
          Matter.Body.setPosition(bBall.body,{x:185, y:220});
          sling.attach(bBall.body);
        }
    
        ground.display();
        player1.display();
        bBall.display();
        ground1.display();
        ground2.display();
        ground3.display();
        sling.display();
        hoop.display();
     
        fill("black");
        textFont("century gothic");
        noStroke();
        textSize(35);
        text("Basketball Stars!", 10, 35);
        
    
        fill("black");
        textFont("century gothic");
        noStroke();
        textSize(23);
        text("Time Remaining: "+ timer,10,60);
    
        fill("black");
        textFont("century gothic");
        noStroke();
        textSize(28);
        text("Score: " + score, 665, 30);

  } else if(gameState === End){
      if(score >= 20){
        textSize(32);
        text("You Have Reached The Goal!", 160, 200);
        
        textSize(23);
        text("Press 'Ctrl + R' to Retry!", 540,55);
      }

      if(score < 20){
        textSize(34);
        text("Better Luck Next Time!", 205,200);

        textSize(23);
        text("Press 'Ctrl + R' to Restart!", 510,55);
      }
      
      fill("black");
      textFont("century gothic");
      noStroke();
      textSize(28);
      text("Score: " + score, 665, 30);
  }
}

function mouseDragged(){
  if(gameState === Play){
    Matter.Body.setPosition(bBall.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  if(gameState === Play){
    sling.fly();
  }
}

function keyPressed(){
  if(keyCode === 32){
		Matter.Body.setPosition(bBall.body,{x:185, y:220})
    sling.attach(bBall.body);
  } else if(keyCode === 83){
    gameState = Play;
  }
}