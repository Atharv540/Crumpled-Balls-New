class Dustbin{
    constructor(x,y,width,height,color){
        var options={
            isStatic:true,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("dustbingreen.jpg");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        World.add(world,this.image);
        this.width = width;
        this.height = height;
        this.color = color;
    }
    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        //fill(this.color);
        //rect(this.x,this.y,this.width,this.height);
        image(this.image, 620, 500, 150, 200);
    }
}
