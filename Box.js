class Box{
    constructor(x,y,w,h){
var boptions={
    restitution:0.5,
    density:0.05,
}        
this.w=w
this.h=h
this.body=Bodies.rectangle(x,y,w,h,boptions)
    World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("red");
        stroke("blue");
        strokeWeight(3)
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop()
    }
}