
//TODO LO QUE ES DE LOS USUARIOS
let clientesDB = []
let administradorDB = []

class Utility {
    static validarNombre = function () {
        let nombre = prompt("Por favor ingrese su primer nombre y su primer apellido").trim().toLowerCase()
        let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        let nombreValido = regex.test(nombre)
        while (!nombreValido) {
            alert("Nombre inválido")
            nombre = prompt("Debes ingresar solo tu primer nombre y tu primer apellido").trim().toLowerCase()
            nombreValido = regex.test(nombre)
        }
        return nombre
    }
    
    static validarCorreo = function (array) {
        let correo = prompt("Por favor ingrese su correo en el formato usuario@correo.com")
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        let correoValido = regex.test(correo)
        let correoExistente = array.some(obj => obj.email === correo)
        while (!correoValido || correoExistente) {
            alert("El correo es inválido o ya esta registrado")
            correo = prompt("ingresa un correo con el formato usuario@correo.com")
            correoValido = regex.test(correo)
            correoExistente = array.some(obj => obj.email === correo)
        }
        return correo
    }
    
    static validarPassword = function () {
        let password = prompt("Ingrese una contraseña de almenos 8 caracteres").trim()
        while (password.length < 8) {
            alert("Contraseña inválida")
            password = prompt("Ingrese una contraseña de almenos 8 caracteres")
        }
        return password
    }

    static pedirDatos = function(roll){
        let nombreUsuario = Utility.validarNombre()
        let correoUsuario = Utility.validarCorreo(clientesDB)
        let contrasenia = Utility.validarPassword()
        let accumPoint = 0
        if(roll === "admin"){
            let passAdmin = 12345678
            let passAdminInput = Number(prompt("Ingresa la contraseña para crear usuario admin"))
            if(passAdmin === passAdminInput){
                administrador = new Administrator(nombreUsuario, correoUsuario,contrasenia)
                administradorDB.push(administrador)
                alert(`Detalles del usuario administrador: ${JSON.stringify(administrador,null,2)}`)
            }else{
                alert("La contraseña es invalida")
            }
        }else{
            cliente = new Costumer(nombreUsuario, correoUsuario, contrasenia, accumPoint)
            clientesDB.push(cliente)
            alert(`Detalles del usuario cliente: ${JSON.stringify(cliente,null,2)}`)
        }
    
   
         // roll === "cliente" ?
        // (() => {clientesDB.push(cliente); alert(`Detalles del usuario cliente: ${JSON.stringify(cliente,null,2)}`)})() :
        // (() => {administradorDB.push(administrador); alert(`Detalles del usuario administrador: ${JSON.stringify(administrador,null,2)}`)})()
    }
}//Cierre class Utility


function GeneralUser(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
}

GeneralUser.prototype.agera= function(){

}

function Costumer(name, email, password, points) {
    GeneralUser.call(this, name, email, password)
    this.points = points
}

Costumer.prototype = Object.create(GeneralUser.prototype)
Costumer.prototype.constructor = Costumer

function Administrator(name, email, password) {
    GeneralUser.call(this, name, email, password)
}


Administrator.prototype = Object.create(GeneralUser.prototype)
Administrator.prototype.constructor = Administrator

let cliente = new Costumer("cliente", "cliente@correo.com", "12345678", 20050)
clientesDB.push(cliente)
let administrador = new Administrator("admin", "admin@correo.com", "12345678")
administradorDB.push(administrador)

let usuarioActual

const pedirDatosIngreso = function(array){
    let continuar = true
    while(continuar){
        let inputcorreo = prompt("Ingrese su correo electronico")
        let inputContrasenia = prompt("Ingrese su contraseña")

        const auth = new Auth()
        // (() => {})() funcion anonima para operador ternario
        auth.iniciarSesion(array,inputcorreo,inputContrasenia)[1] ?
        (() => {continuar = false; usuarioActual = inputcorreo })():
        alert("Los datos ingresados no son validos")
    }

}



function Auth (){
    
    
}

Auth.prototype.iniciarSesion = function(array,correo,contrasenia){
    
    let usuarioValido = array.find(obj => obj.email === correo)
    return !usuarioValido ? ["Correo invalido", 0] :
    usuarioValido.password === contrasenia ? ["Contraseña valida", 1] :
    ["Contraseña inválida",0]
    
}
const pedirUsuarioAEliminar = function(){
    let str = ""
    clientesDB.forEach(cliente => str += JSON.stringify(cliente) + "/n")
    alert(`Usuarios registrados: ${str}`)
    let usuarioAEliminar = prompt("Ingrese el correo que desea eliminar")
    administrador.eliminarUsuario(usuarioAEliminar)
}

Administrator.prototype.eliminarUsuario = function(usuarioAEliminar){
    let usuarioEncontrado = clientesDB.find(cliente => cliente.email === usuarioAEliminar)
    usuarioEncontrado ?
    (() => {clientesDB = clientesDB.filter(cliente => cliente.email !== usuarioAEliminar); alert(`Usuario eliminado correctamente`)})() :
    alert("Usuario no encontrado")
}

Costumer.prototype.verPuntos = function(){

    let clienteEncontrado = clientesDB.find(cliente => cliente.email === usuarioActual)
    let totalDePuntos = clienteEncontrado.points

    alert("El total de puntos que tiene hasta el momento es:\n" + totalDePuntos)

}


export{clientesDB,administradorDB, usuarioActual, cliente, pedirUsuarioAEliminar, pedirDatosIngreso, Costumer, Administrator, Utility}