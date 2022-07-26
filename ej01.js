class Cifras {
    constructor(num){
        this.num = num
    }

    esPar() {
        return this.num % 2 === 0
    }

    sumaDigitos() {
        let numString = this.num.toString()
        let suma = 0
        for (let i = 0; i < numString.length; i++) {
            suma += parseInt(numString[i])
        }

        return suma
    }
}

let miClase = new Cifras(25)

console.log(miClase.esPar())
console.log(miClase.sumaDigitos())