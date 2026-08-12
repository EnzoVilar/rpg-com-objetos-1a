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

console.log(druida)