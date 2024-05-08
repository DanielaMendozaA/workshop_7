let numero = prompt("Ingresa un número");
let regex = /^[1-9]\d*$/;

if (regex.test(numero)) {
    console.log("El número es válido");
} else {
    console.log("El número no es válido");
}
