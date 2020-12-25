class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic : false,
            restitution : 0.5,
            friction : 1,
            density : 0.5
        }
  //       }
  //     this.r = r;
  //     this.x = x;
  //     this.y = y;
  //     this.body = Bodies.circle(200,200,20,options);
      
  //     World.add(world, this.body);
  //   }
  //   display(){
  //     var pos = this.body.position;
  //     fill("green");

  //     rectMode(CENTER);
  //     ellipse(50,300,20);
  //   }
  // }

    //     }
    // this.x=x;
		// this.y=y;
		// this.r=r
    this.body=Bodies.circle(100,300,15, options)
    this.image = loadImage("SPRITES/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
      imageMode(CENTER);
      image(this.image, 0,0,40,40);
			pop()
			
  }
}
  