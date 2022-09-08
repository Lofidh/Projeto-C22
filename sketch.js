const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var barco

var canvas, angle, tower, ground, cannon;
var bolaCanhao
var cannonBallMatriz = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
 angleMode(DEGREES)
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  angle = 15
cannon = new Cannon(180,110,130,100,angle)
barco = new Navio(width-79,height-60,170,170,-80)
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  cannon.exibir()
  Matter.Body.setVelocity(barco.body,{x:-1,y:0})
  
  barco.exibir()

  console.log(barco.exibir)

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
  for(var i = 0;i<cannonBallMatriz.length;i++){
    showBalls(cannonBallMatriz[i])

  }  
}
function keyReleased(){
  if(keyCode===32){
    cannonBallMatriz[cannonBallMatriz.length-1].tiro()

  }
}
function keyPressed(){
  if(keyCode===32){
    bolaCanhao = new CannonBall (cannon.x,cannon.y) 
    cannonBallMatriz.push(bolaCanhao)
  }
}
function showBalls(bolaCanhao){
  if (bolaCanhao){
    bolaCanhao.exibir()
  }
}
