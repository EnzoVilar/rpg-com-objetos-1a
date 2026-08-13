class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome,
            this.vida = vida,
            this.ataque = ataque

    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        this.vida = this.vida - quantidade

        if (this.vida <= 0) {
            this.vida = "eliminado"

        }
    }

}

const guerreiro = new Personagem("Guerreiro", 80, 25)

const druida = new Personagem("Mago", 60, 35)

const mago = new Personagem("Gandalfe", 60, 35)

const arqueiro = new Personagem("Legolas", 80, 25)

const raven = new Personagem("Raven", 40, 20)

const elara = new Personagem("Elara", 80, 40)

const dante = new Personagem("Dante", 21, 17)

arqueiro.causaDano(raven)
mago.causaDano(dante)
console.log(raven.vida)
console.log(dante.vida)