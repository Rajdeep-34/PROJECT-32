const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var ground;
var sling;
var player;

function preload(){
  img = loadImage("player.png"); 
}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;


  block1 = new Block(1240,440,30,40);
  block2 = new Block(1270,440,30,40);
  block3 = new Block(1300,440,30,40);
  block4 = new Block(1330,440,30,40);
  block5 = new Block(1360,440,30,40);
  block6 = new Block(1390,440,30,40);
  block7 = new Block(1420,440,30,40);

  block8 = new Block(1240,400,30,40);
  block9 = new Block(1270,400,30,40);
  block10 = new Block(1300,400,30,40);
  block11 = new Block(1330,400,30,40);
  block12 = new Block(1360,400,30,40);
  block13 = new Block(1390,400,30,40);
  block41 = new Block(1420,400,30,40);

  block42 = new Block(1240,360,30,40);
  block43 = new Block(1270,360,30,40);
  block44 = new Block(1300,360,30,40);
  block45 = new Block(1330,360,30,40);
  block46 = new Block(1360,360,30,40);
  block47 = new Block(1390,360,30,40);
  block48 = new Block(1420,360,30,40);


  block49 = new Block(1270,320,30,40);
  block50 = new Block(1300,320,30,40);
  block51 = new Block(1330,320,30,40);
  block52 = new Block(1360,320,30,40);
  block53 = new Block(1390,320,30,40);

  block54 = new Block(1270,280,30,40);
  block55 = new Block(1300,280,30,40);
  block56 = new Block(1330,280,30,40);
  block57 = new Block(1360,280,30,40);
  block58 = new Block(1390,280,30,40);

  block59 = new Block(1270,240,30,40);
  block60 = new Block(1300,240,30,40);
  block61 = new Block(1330,240,30,40);
  block62 = new Block(1360,240,30,40);
  block63 = new Block(1390,240,30,40);

  block64 = new Block(1300,200,30,40);
  block65 = new Block(1330,200,30,40);
  block66 = new Block(1360,200,30,40);

  block67 = new Block(1300,160,30,40);
  block68 = new Block(1330,160,30,40);
  block69 = new Block(1360,160,30,40);

  block70 = new Block(1300,120,30,40);
  block71 = new Block(1330,120,30,40);
  block72 = new Block(1360,120,30,40);

  block73 = new Block(1330,80,30,40);
  block74 = new Block(1330,20,30,40);

  ground = new Ground(750, 600, 1500, 10);


  block14 = new Block(1420,560,30,40);
  block15 = new Block(1450,560,30,40);
  block16 = new Block(1390,560,30,40);
  block17 = new Block(1360,560,30,40);
  block18 = new Block(1330,560,30,40);
  block19 = new Block(1300,560,30,40);
  block20 = new Block(1270,560,30,40);
  block21 = new Block(1240,560,30,40);
  block22 = new Block(1210,560,30,40);

  block23 = new Block(1210,520,30,40);
  block24 = new Block(1420,520,30,40);
  block25 = new Block(1450,520,30,40);
  block26 = new Block(1390,520,30,40);
  block27 = new Block(1360,520,30,40);
  block28 = new Block(1330,520,30,40);
  block29 = new Block(1300,520,30,40);
  block30 = new Block(1270,520,30,40);
  block31 = new Block(1240,520,30,40);

  block32 = new Block(1210,480,30,40);
  block33 = new Block(1420,480,30,40);
  block34 = new Block(1450,480,30,40);
  block35 = new Block(1390,480,30,40);
  block36 = new Block(1360,480,30,40);
  block37 = new Block(1330,480,30,40);
  block38 = new Block(1300,480,30,40);
  block39 = new Block(1270,480,30,40);
  block40 = new Block(1240,480,30,40);
  
  wall1 = new Wall(1500,height/2,20,600);

  wall2 = new Wall(1000,50,20,300);
  wall4 = new Wall(980,50,20,300);
  wall6 = new Wall(960,50,20,300);
  wall3 = new Wall(1000,450,20,300);
  wall5 = new Wall(980,450,20,300);
  wall7 = new Wall(960,450,20,300);

  player = Bodies.circle(150,50,20);
  World.add(world,player);

  sling = new Sling(this.player,{x:150, y:100});

  

}

function draw() {
  background("black");
  Engine.update(engine);

  
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("lime");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block41.display();

  fill("pink");
  block42.display();
  block43.display();
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  block48.display();

  fill("orange");
  block49.display();
  block50.display();
  block51.display();
  block52.display();
  block53.display();

  fill("purple");
  block54.display();
  block55.display();
  block56.display();
  block57.display();
  block58.display();

  fill("gold");
  block59.display();
  block60.display();
  block61.display();
  block62.display();
  block63.display();

  fill("blue");
  block64.display();
  block65.display();
  block66.display();

  fill("magenta");
  block67.display();
  block68.display();
  block69.display();

  fill("yellow");
  block70.display();
  block71.display();
  block72.display();

  fill("cyan");
  block73.display();
  block74.display();

  fill("violet");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  
  fill("skyblue");
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  
  fill("green");
  block32.display();
  block33.display();
  block34.display();
  block35.display();
  block36.display();
  block37.display();
  block38.display();
  block39.display();
  block40.display();
  
  
  ground.display();

  imageMode(CENTER);
  image(img ,player.position.x, player.position.y, 50, 50);

  stroke(40);
  fill("yellow");
  textSize(30);
  text("drag the ball to make the tower fall",350,100);

  wall1.display();

  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();

  sling.display();

}


function mouseDragged(){
  Matter.Body.setPosition(this.player, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
    sling.attach(this.player);

	}
}