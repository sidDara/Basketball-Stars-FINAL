class Hoop {
    constructor(x, y, width, height){
        var options = {
          'isStatic':true
        }
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(x, y, this.width, this.height,options); 
       
       this.image = loadImage("images/basketballHoop.png");
       World.add(world,this.body);
  
       
    }
    display(){
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    strokeWeight(0);
    fill("black");
    image(this.image,pos.x,pos.y,200, 330);
    pop();
    }
  }