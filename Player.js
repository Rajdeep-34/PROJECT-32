class Player{
    constructor(x,y,diameter){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter = diameter;
        World.add(world, this.body);
    }

    display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0, 0, this.diameter);

        pop();
    }
}
