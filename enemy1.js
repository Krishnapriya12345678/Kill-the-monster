class Enemy1 extends BaseClasseny{
    constructor(x,y,width,height){
        super(x,y,width,height)
        this.image=loadImage("images/Monster-02.png")
            }



display(){
  if(this.body.speed < 10){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.visible = this.visible - 5;
         tint(255,this.visible);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      }
    
      score(){
       
        if (this.visible < 0 && this.visible > -100){
          score=score+4
        }
      


        }
        










    }































