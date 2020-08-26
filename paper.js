class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("paperball.jpg")
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        World.add(world,this.image);
        this.radius=radius;
    }
    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        ellipseMode(RADIUS);
        //ellipse(this.x,this.y,this.radius,this.radius);
        image(this.image, this.x-20, this.y-25, 50,50);
    }

}
