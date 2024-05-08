class Ave { 
    constructor(tipoDePico,tipoDeAlas,habitad,sexo,nombre,edad,estarVivo) {
        this.tipoDePico = tipoDePico
        this.tipoDeAlas = tipoDeAlas
        this.habitad = habitad
        this.sexo = sexo
        this.nombre = nombre
        this.edad = edad
        this.estarVivo = estarVivo
    }
    volar(){
        // return `Hola soy ${this.nombre} y puedo volar porque mis alas son de tipo ${this.tipoDeAlas}`
    }

    cantar(){
        // return `Hola puedo cantar con mi pico ${this.tipoDePico}`
    }

    construirNido(){
        // return `Construire mi nido en el habitad ${this.habitad}`
    }

    comer(){
        // return `Tengo ${this.edad} y me gusta mucho comer`
    }

    dormir(){
        // return `ahora vamos a dormir`
    }

    darALuz(){
        // return `Puedo dar a luz`
    }

    incubarHuevos(){
        // return `Calentar los huevos`
    }

}

const ave1 = new Ave ("puntiagudo","grandes","selva amazonica", "hembra", "aguila", 10,true)
console.log(ave1)


class Felino {
    constructor( tipoDePelaje, habitad, tipoDeGarras, sexo, nombre, edad, estaVivo, placenta){
        this.tipoDePelaje = tipoDePelaje
        this.habitad = habitad
        this.tipoDeGarras = tipoDeGarras
        this.sexo = sexo
        this.nombre = nombre
        this.edad = edad
        this.estaVivo = estaVivo
        this.placenta = placenta
    }

    cazar(){

    }

    trepar(){

    }

    ronronear(){

    }

    comer(){

    }

    dormir(){

    }

    darALuz(){

    }

    amamantar(){

    }

}

const felino1 = new Felino ("suave", "amazonas", "largas", "macho", "tigre", 22, true, true)
console.log(felino1)


class Pez{
    constructor(tipoAletas, tipoEscamas, habitat, sexo, nombre, edad, estaVivo, tipoHuevo){
        this.tipoAletas = tipoAletas
        this.tipoEscamas = tipoEscamas
        this.habitat = habitat
        this.sexo = sexo
        this.nombre = nombre
        this.edad = edad
        this.estaVivo = estaVivo
        this.tipoHuevo = tipoHuevo
    }
    
    nadar(){

    }
    
    respirar(){

    } 
    
    comer(){

    }  

    dormir(){

    } 
    
    darLuz(){

    }

    incubarHuevos(){


    }
}

const pez1 = new Pez ("caudal", "placoides", "oceano pacífico", "hembra", "payaso", 2, true, "mesolecitos")
console.log(pez1)

class Paquidermo{
    constructor(tipoDePiel, tipoDePatas, habitat, sexo, nombre, edad, estaVivo, placenta){
        this.tipoDePiel = tipoDePiel
        this.tipoDePatas = tipoDePatas
        this.habitat = habitat
        this.sexo = sexo
        this.nombre = nombre
        this.edad = edad
        this.estaVivo = estaVivo
        this.placenta = placenta
    }

    nadar(){

    } 
    
    comer(){

    } 
    
    dormir(){

    } 
    
    darLuz(){

    } 
    
    amamantar(){

    }
}

const paquidermo1 = new Paquidermo("gruesa", "grandes", "selva", "macho", "elefante", 15, true, true)
console.log(paquidermo1)