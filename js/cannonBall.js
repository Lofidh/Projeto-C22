class CannonBall{
    constructor (x,y){
        var option = {
            isStatic: true
        }
        this.raio = 30
        this.body = Bodies.circle(x,y,this.raio,option)
        this.imageBall = loadImage ("assets/cannonball.png")
        World.add(world,this.body)
    }
    tiro() {
        Matter.Body.setStatic(this.body, false); 
      
        var newAngle = cannon.angle - 28;
        newAngle = newAngle * (3.14/180); 
      
        var velocidade = p5.Vector.fromAngle(newAngle);
        velocidade.mult(0.5); 
    
         Matter.Body.setVelocity(this.body, {
          x: velocidade.x * (180 / 3.14),
          y: velocidade.y * (180 / 3.14),
        });}
    exibir(){
push()
imageMode (CENTER)
image (this.imageBall,this.body.position.x,this.body.position.y,this.raio,this.raio)
pop()
    }
}