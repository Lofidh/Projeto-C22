class Navio{
    constructor(positionX,positionY,largura,altura,positionBarco){
        this.body = Bodies.rectangle(positionX,positionY,largura,altura)
        this.largura = largura
        this.altura = altura
        this.positionBarco = positionBarco
        this.barcoImage = loadImage ("assets/boat.png")
        World.add (world,this.body)
    }
    exibir(){
var angle = this.body.angle
var posicao = this.body.position
push()
translate (posicao.positionX,posicao.positionY)
rotate (angle)
imageMode (CENTER)
image(this.barcoImage,0,this.positionBarco,this.largura,this.altura)
pop()
    }
}