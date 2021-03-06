class Ground{
    constructor(x,y,w,h){
var boptions={
isStatic:true
}        
this.w=w
this.h=h
this.body=Bodies.rectangle(x,y,w,h,boptions)
    World.add(world,this.body)
    }
    display(){
        fill("blue");
        stroke("red");
        strokeWeight(3)
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}