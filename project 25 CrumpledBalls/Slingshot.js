class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB=pointB;
    }

    display(){
        if (this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)

            if (pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointa.x-30,pointA.y-10,15,30);
            }
        }
    }

    fly(){
        this.chain.bodyA=null;
    }
}
