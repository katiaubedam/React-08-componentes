class Finanzas {
    constructor (valor) {
        this.valor = valor
        this.convDolar = 0.99
        this.convEuro = 1.01
    }

    dolaresToEuros() {
        return `${this.valor} dólares son ${this.valor * this.convEuro} euros.`
    }

    eurosToDolares() {
        return `${this.valor} euros son ${this.valor * this.convDolar} dólares.`
    }
}

let miClase = new Finanzas(5)

console.log(miClase.dolaresToEuros())
console.log(miClase.eurosToDolares())