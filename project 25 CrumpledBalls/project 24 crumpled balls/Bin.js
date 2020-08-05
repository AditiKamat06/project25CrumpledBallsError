class Bins {
    constructor(x,y,width,height,options){
        var options={
        'restitution':0.5,
        'friction':1.0,
        'density':1.5,
        }
        this.x = x; 
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        this.image=loadImage("sprites/dustbin.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        image(this.image, this.body.position.x-150, this.body.position.y-200, 450, 400);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(0,255,0);
        strokeWeight(0);
        rect(0, 0, this.width, this.height);
        pop();
    }
}     