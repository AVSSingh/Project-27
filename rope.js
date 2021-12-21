class Rope{
    constructor(bodyA, bodyB){
        var options={
            bodyA:bodyA,
            pointB:bodyB,
            stiffness:0.0003,
            length:10
        }
        this.pointB=bodyB;
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB= this.rope.pointB;
        strokeWeight(8)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}