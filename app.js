class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome,
            this.vida = vida,
            this.ataque = ataque,
            this.defesa = defesa

    }

    curar(quantidade) {
        this.vida = this.vida + quantidade
    }

    causaDano(personagem) {
        personagem.recebeDano(this.ataque)
    }

    recebeDano(quantidade) {
        let dano = quantidade - this.defesa

        if (quantidade < this.defesa) {
            dano = 0
        }

        this.vida = this.vida - dano

        if (this.vida <= 0) {
            this.vida = "eliminado"

        }
    }

    estaVivo() {
        return this.vida > 0
    }

    mostrarStatus() {
        console.log(this.nome + " | Vida: " + this.vida)
    }

}

const guerreiro = new Personagem("Guerreiro", 80, 25, 15)

const druida = new Personagem("Mago", 60, 35, 8)

const mago = new Personagem("Gandalfe", 60, 35, 5)

const arqueiro = new Personagem("Legolas", 80, 25, 12)

const raven = new Personagem("Raven", 40, 20, 5)

const elara = new Personagem("Elara", 80, 40, 14)

const dante = new Personagem("Dante", 21, 17, 25)

druida.causaDano(mago)
druida.causaDano(mago)

mago.mostrarStatus()

console.log(mago.estaVivo())