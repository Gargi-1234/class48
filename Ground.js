class Ground{
  constructor(){
      var ground_options={
          isStatic : true
        }
      
        this.ground = Bodies.rectangle(310,350,200,2,ground_options)
        World.add(world,this.ground);
  }
  display(){
    push()
      noStroke();
      fill("black")
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,200,2);
      pop()
  }
}