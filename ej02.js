class Distancia {
    constructor(valor) {
        this.valor = valor
        this.milla = 1609.34
    }

    MillasAMetros() {
        return `${this.valor} millas son ${this.valor * this.milla} metros`
    }

    MillasAKilometros() {
        return `${this.valor} millas son ${this.valor * (this.milla/1000)} kilómetros`
    }
}

let miClase = new Distancia(34)

console.log(miClase.MillasAMetros())
console.log(miClase.MillasAKilometros())