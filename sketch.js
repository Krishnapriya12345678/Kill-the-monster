const World=Matter.World
const Bodies=Matter.Bodies
const Engine=Matter.Engine


var engine,world
var score=0

var connect
var hero1,eny1,eny2,eny3
var ground1
var backgroundImg
var family,familyImage

function preload() {

  backgroundImg=loadImage("images/GamingBackground.png")
  
}
function setup() {
  createCanvas(2000, 800);
  
  family = createSprite(1800,650,150,150)
//family.shapeColor=("black")
familyImage=loadImage("images/family1.png")

  engine=Engine.create()

world=engine.world


hero1=new Hero(600,200,100,100)
eny1=new Enemy(800,100,50,50)
ground1=new Ground(240,800,4000,20)
box1=new Squares(700,700,50,50)
box2=new Squares(700,650,50,50)
box3=new Squares(700,550,50,50)
box4=new Squares(700,450,50,50)
box5=new Squares(700,350,50,50)
box6=new Squares(700,250,50,50)
box7=new Squares(700,150,50,50)
box8=new Squares(700,100,50,50)
box9=new Squares(700,50,50,150)
box10=new Squares(900,700,50,50)
box11=new Squares(900,750,50,50)
box12=new Squares(900,650,50,50)
box13=new Squares(900,550,50,50)
box14=new Squares(900,450,50,50)
box15=new Squares(900,350,50,50)
box16=new Squares(1300,750,50,50)
box17=new Squares(1300,650,50,50)
box18=new Squares(1300,550,50,50)
box19=new Squares(1300,450,50,50)
box20=new Squares(1300,350,50,50)
box21=new Ground(1100,700,30,700)
eny2= new Enemy(1100,250,50,50)
box22=new Ground(1450,700,30,1000)
eny3= new Enemy1(1450,100,50,50)
box23=new Ground(800,700,30,700)
//console.log(hero1)
connect=new Fly(hero1.body,{x:200,y:400})
//connect.hide()





}

function draw() {
  background(backgroundImg);

  Engine.update(engine)
drawSprites()
  family.addImage("fam",familyImage)

hero1.display()
ground1.display()
connect.display()
box1.display()
box2.display()
box3.display()
box4.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
eny1.display()
eny2.display()
eny3.display()


eny1.score()
eny2.score()
eny3.score()
fill("red")
textSize(20)

text("SCORE "+score,100,100)
fill("blue")
text("THANK YOU FOR SAVING US",1600,500)



}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
connect.fly()
}


function keyPressed(){
  if(keyCode=32){
  connect.attach(hero1.body)
  }
}















