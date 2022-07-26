class Distancia {
    constructor() {
        this.milla = 1609.34
    }

    MillasAMetros(valor) {
        return `${valor} millas son ${valor * this.milla} metros`
    }

    MillasAKilometros(valor) {
        return `${valor} millas son ${valor * (this.milla/1000)} kilómetros`
    }
}

let miClase = new Distancia()

console.log(miClase.MillasAMetros(56))
console.log(miClase.MillasAKilometros(23))