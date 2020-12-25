class TrashIMG{
    constructor(x,y){

        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,10,10,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("SPRITES/dustbingreen.png");

        //World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,600,290,200,200);
        
    }
}