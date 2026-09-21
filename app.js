class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome,
            this.vida = vida,
            this.vidaMax = vida,
            this.ataque = ataque,
            this.defesa = defesa

    }

    curar(quantidade) {
        this.vida = this.vida + quantidade

        if (this.vida > this.vidaMax) {
            this.vida = this.vidaMax
        }
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

class Guerreiro extends Personagem {
    golpePesado(personagem) {
        personagem.recebeDano(this.ataque * 2)
    }

}

class Mago extends Personagem {
    bolaDeFogo(personagem) {
        personagem.recebeDano(this.ataque + 15)
    }

}
class Arqueiro extends Personagem {
    tiroPreciso(personagem) {
        personagem.recebeDano(this.ataque + 10)
    }
}

class Teste extends Personagem {
    constructor(nome) {
        super(nome, 80, 35, 15)
    }
}

const daniel = new Teste("Daniel")

const igor = new Teste("Igor")

const guerreiro = new Guerreiro("Guerreiro", 80, 25, 15)

const druida = new Personagem("Mago", 60, 35, 8)

const mago = new Mago("Gandalfe", 60, 35, 5)

const arqueiro = new Arqueiro("Legolas", 80, 25, 12)

const raven = new Personagem("Raven", 40, 20, 5)

const elara = new Personagem("Elara", 80, 40, 14)

const dante = new Personagem("Dante", 21, 17, 25)

const personagens = [
    daniel,
    igor,
    druida,
    guerreiro,
    mago,
    arqueiro
]

personagens.forEach(function(personagem) {
    personagem.mostrarStatus()
})

let turno = 1
let jogadorAtual = 0

function proximoTurno() {
    turno = turno + 1
    jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

const vidaGuerreiro = document.getElementById("vida-guerreiro")
vidaGuerreiro.innerText = guerreiro.vida

const ataqueGuerreiro = document.getElementById("ataque-guerreiro")
ataqueGuerreiro.innerText = guerreiro.ataque

const guerreiroAtacar = document.getElementById("guerreiro-atacar")
guerreiroAtacar.addEventListener("click", () => {
    guerreiro.causaDano(mago)
    vidaMago.innerText = mago.vida


})

const vidaMago = document.getElementById("vida-Mago")
vidamago.innerText = mago.vida

const ataqueMago = document.getElementById("ataque-mago")
ataqueMago.innerText = mago.ataque

const magoAtacar = document.getElementById("mago-atacar")
magoAtacar.addEventListener("click", () => {
    mago.causaDano(guerreiro)
    vidaGuerreiro.innerText = guerreiro.vida
})