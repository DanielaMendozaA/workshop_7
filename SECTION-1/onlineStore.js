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
}//Cierre class Utility


function GeneralUser(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
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

let cliente = new Costumer("cliente", "cliente@correo.com", "12345678", 0)
let administrador = new Administrator("admin", "admin@correo.com", "12345678")

GeneralUser.prototype.construirUsuario = function (roll) {
    let nombreUsuario = Utility.validarNombre()
    let correoUsuario = Utility.validarCorreo(clientesDB)
    let contrasenia = Utility.validarPassword()
    let accumPoint = 0

    cliente = new Costumer(nombreUsuario, correoUsuario, contrasenia, accumPoint)
    administrador = new Administrator(nombreUsuario, correoUsuario,contrasenia)

    roll === "cliente" ? clientesDB.push(cliente) : administradorDB.push(administrador)
}

GeneralUser.prototype.iniciarSesion = function (array) {
    let inputcorreo = prompt("Ingrese su correo electronico")
    let correoValido = array.find(obj => obj.email === inputcorreo)
    while (!correoValido) {
        alert("El usuario ingresado no se encuentra registrado")
        inputcorreo = prompt("Ingrese un correo electronico valido")
        correoValido = array.find(obj => obj.email === inputcorreo)
    }
    let inputContrasenia = prompt("Ingrese su contraseña")
    while (correoValido.password !== inputContrasenia) {
        alert("La contraseña es inválida")
        inputContrasenia = prompt("Ingrese una contraseña válida")
    }
}

//Todo lo que es de los productos
let productosFisicosDB = []
let productosDigitalesDB = []
let pedidosDB = []

class UtilityProduct{
    static validarNombreProducto = function(){
        let regex = /^[a-z]+$/
        let nombreProducto = prompt("Ingrese el nombre del producto").trim().toLowerCase()
        let palabraValida = regex.test(nombreProducto)
        while(!palabraValida){
            alert("Debes ingresar solo una palabra sin numeros ni otros caracteres")
            nombreProducto = prompt("Ingresa un nombre de producto válido").trim().toLowerCase()
            palabraValida = regex.test(nombreProducto)
        }
        return nombreProducto
    }

    static validarPrecio = function(){
        let regex = /^(0\.\d+|[1-9]\d*(\.\d+)?)$/
        let precioProducto = Number(prompt("Ingrese el precio del producto"))
        let precioValido = regex.test(precioProducto)
        while(!precioProducto){
            alert("Debes ingresar un precio de producto válido")
            precioProducto = Number(prompt("Ingresa el precio del producto"))
            precioValido = regex.test(precioProducto)
        }
        return precioProducto
    }

    static validarPuntos = function(){
        let regex = /^[1-9]\d*$/
        let cantidadPuntos = Number(prompt("Ingresa la cantidad de puntos que cuesta el producto"))
        let puntosValidos = regex.test(cantidadPuntos)
        while(!puntosValidos){
            alert("Debes ingresar una cantidad válida")
            puntosValidos = Number(prompt("Ingrese la cantidad de puntos que cuesta el producto"))
            puntosValidos = regex.test(cantidadPuntos)
        }
        return cantidadPuntos
    }

    static validarDescripcion = function(){
        let descripcionProducto = prompt("Ingrese la descripcion del producto").trim().toLowerCase()
        while(!descripcionProducto){
            alert("Debes ingresar una descripción para el producto")
            descripcionProducto = prompt("Ingrese la descripcion del producto").trim().toLowerCase()
        }
        return descripcionProducto
    }

    static cantidadProducto = function(){
        let regex = /^[1-9]\d*$/
        let cantidadProductos = Number(prompt("Ingrese la cantidad de productos"))
        let cantidadValida = regex.test(cantidadProductos)
        while(!cantidadValida){
            alert("Debes ingresar una cantidad")
        }

    }

   


}//Cierre class UtilityProduct

function GeneralProduct(nameProduct,price,pointQuianty,description,quianty){
    this.nameProduct = nameProduct
    this.price = price
    this.pointQuianty = pointQuianty
    this.description = description
    this.quianty = quianty
}

function DigitalProduct(nameProduct,price,pointQuianty,description,quianty){
    GeneralProduct.call(this,nameProduct,price,pointQuianty,description,quianty)
}

DigitalProduct.prototype = Object.create(GeneralProduct.prototype)
DigitalProduct.prototype.constructor = DigitalProduct

function PhysicalProduct(nameProduct,price,pointQuianty,description,quianty){
    GeneralProduct.call(this,nameProduct,price,pointQuianty,description,quianty)
}

PhysicalProduct.prototype = Object.create(GeneralProduct.prototype)
PhysicalProduct.prototype.constructor = PhysicalProduct

function OrdenProducto(nameProduct,price,pointQuianty,description,quianty,totalPrice,nameCostumer,date){
    GeneralProduct.call(this,nameProduct,price,pointQuianty,description,quianty)
    this.totalPrice = totalPrice
    this.nameCostumer = nameCostumer
    this.date = date

}

OrdenProducto.prototype = Object.create(GeneralProduct.prototype)
OrdenProducto.prototype.constructor = OrdenProducto

let productoDigital = new DigitalProduct("producto",0,0,"producto",0)
let productoFisico = new PhysicalProduct("producto",0,0,"producto",0)

GeneralProduct.prototype.construirProducto = function(tipoProducto){
    let nombreProducto = UtilityProduct.validarNombreProducto()
    let precioProducto = UtilityProduct.validarPrecio()
    let cantidadPuntos = UtilityProduct.validarPuntos()
    let descripcionProdcuto = UtilityProduct.validarDescripcion()
    let cantidad = 

    productoDigital = new DigitalProduct(nombreProducto,precioProducto,cantidadPuntos,descripcionProdcuto,cantidad)
    productoFisico = new PhysicalProduct(nombreProducto,precioProducto,cantidadPuntos,descripcionProdcuto,cantidad)


}

//Menu
let roll
while (confirm("¿Quieres ingresar a nuestro sistema de productos?")) {
    let menuPrincipal = Number(prompt("Ingrese el tipo de usuario al que pertenece\n" +
        "1.Cliente\n" +
        "2.Administrador"
    ))
    switch (menuPrincipal) {
        case 1:
            alert("Bienvenido a tu tienda de productos cliente")
            while (confirm("¿Deseas continuar con el perfil de cliente?")) {
                let menuCliente = Number(prompt("¿Qué deseas hacer hoy?" +
                    "\n1.Registrarse" +
                    "\n2.Ingresar"
                ))
                switch (menuCliente) {
                    case 1:
                        roll = "cliente"
                        cliente?.construirUsuario(roll)
                        console.log(clientesDB);
                        break
                    case 2:
                        cliente?.iniciarSesion(clientesDB)
                        alert("siguiente paso")
                        break
                    default:
                        alert("Ingresa una opción válida")
                }//Cierre switch
            }//Cierre while menu cliente
            break
        case 2:
            alert("Bienvenido a tu inventario de productos administrador")
            while (confirm("¿Deseas continuar con el perfil de administrador?")) {
                let menuAdmin = Number(prompt("Qué deseas hacer hoy?" +
                    "\n1.Registrarse" +
                    "\n2.Ingresar"   
                ))
                switch(menuAdmin){
                case 1:
                    roll = "admin"
                    administrador?.construirUsuario(roll)
                    console.log(administradorDB);
                    break
                case 2:
                    administrador?.iniciarSesion(administradorDB)
                    while(confirm("¿Deseas realizar una acción?")){
                        let accionAdmin = Number(prompt("Ingresa el número correspondiente a la acción que deseas realizar"+
                                                        "\n1.Agregar Producto"+
                                                        "\n2.Editar Producto"+
                                                        "\n3.Eliminar Producto"+
                                                        "\n4.Eliminar Usuario"
                        ))
                        switch(accionAdmin){
                            case 1:

                        }

                    }//Cierre while admin acciones
                    break
                default:
                    alert("Ingresa una opción válida")
                }//Cierre switch
            }//Cierre while menu administrador

            break
        default:
            alert("Ingresa una opción válida")
    }//Cierre switch menu principal

}//Cierre while menu principal