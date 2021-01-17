
class Fly{
    constructor(bodyA,pointB){
    var  options={
    bodyA:bodyA,
    pointB:pointB,
    length:200,
    stiffness:0.3
     }
  this.pointB=pointB
this.Fly=Matter.Constraint.create(options)
World.add(world,this.Fly)
    }
fly(){
this.Fly.bodyA=null; 
}
attach(hero){
    this.Fly.bodyA=hero
      }
  
display(){
    if(this.Fly.bodyA){
    var pointA= this.Fly.bodyA.position;
    var pointB= this.pointB
       
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }


}

}











