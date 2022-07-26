class Rectangulo {
    constructor(largo, ancho) {
        this.largo = largo
        this.ancho = ancho
    }

    calcularArea() {
        return "Área: " + this.largo * this.ancho
    }

    calcularPerimetro() {
        return "Perímetro: " + ((this.largo * 2) + (this.ancho * 2))
    }
}

let miClase = new Rectangulo(6, 4)

console.log(miClase.calcularArea())
console.log(miClase.calcularPerimetro())