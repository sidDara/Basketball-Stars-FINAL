class Player{
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("images/damianLillard.png");
      }
      display(){
        var position =this.body.position;
        
        push();
        imageMode(CENTER);
        fill("white");
        image(this.image, position.x, position.y, 200, 280);
        pop();
      }
}
   