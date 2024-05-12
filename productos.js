import {clientesDB, usuarioActual, cliente, Costumer} from "./usuarios.js"

//Todo lo que es de los productos
let productosFisicosDB = []
let productosDigitalesDB = []

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
            cantidadPuntos = Number(prompt("Ingrese la cantidad de puntos que cuesta el producto"))
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
            alert("Debes ingresar una cantidad válida")
            cantidadProductos = Number(prompt("Ingrese la cantidad de productos"))
            cantidadValida = regex.test(cantidadProductos)
        }
        return cantidadProductos
    }

    static cantidadProductoCompraValida = function(cantidadProducto,cantidadDisponible){
        if(cantidadProducto > cantidadDisponible){
            return [alert("No hay cantidad suficiente") , 0]
        }else{
            cantidadDisponible -= cantidadProducto
            return [cantidadDisponible , 1]
        }
    }
    
    static generarIdProduct = function(){
    let cont = 0
    return function(){
        cont++
        return cont

    }   
    }

    static idProducto = UtilityProduct.generarIdProduct()

    static construirProducto = function(tipoProducto){
        let nombreProducto = UtilityProduct.validarNombreProducto()
        let precioProducto = UtilityProduct.validarPrecio()
        let cantidadPuntos = UtilityProduct.validarPuntos()
        let descripcionProdcuto = UtilityProduct.validarDescripcion()
        let cantidad = UtilityProduct.cantidadProducto()
        let nuevoIdProducto = UtilityProduct.idProducto()
        let url

        if(tipoProducto === "digital"){
            url = prompt("Ingresa la url del producto")
        }

        productoDigital = new DigitalProduct(nuevoIdProducto,nombreProducto,precioProducto,cantidadPuntos,descripcionProdcuto,cantidad,url)
        productoFisico = new PhysicalProduct(nuevoIdProducto,nombreProducto,precioProducto,cantidadPuntos,descripcionProdcuto,cantidad)

        if(tipoProducto === "digital"){
            productosDigitalesDB.push(productoDigital)
            alert(`Detalles del producto digital ingresado: ${JSON.stringify(productoDigital,null,2)}`)
        }
        if(tipoProducto === "fisico"){
            productosFisicosDB.push(productoFisico)
            alert(`Detalles del producto fisico ingresado: ${JSON.stringify(productoFisico,null,2)}`)
        }
    }

}//Cierre class UtilityProduct

function GeneralProduct(idProduct,nameProduct,price,pointQuianty,description,quianty){
    this.idProduct = idProduct
    this.nameProduct = nameProduct
    this.price = price
    this.pointQuianty = pointQuianty
    this.description = description
    this.quianty = quianty
}

function DigitalProduct(idProduct,nameProduct,price,pointQuianty,description,quianty,url){
    GeneralProduct.call(this,idProduct,nameProduct,price,pointQuianty,description,quianty)
    this.url = url

}

DigitalProduct.prototype = Object.create(GeneralProduct.prototype)
DigitalProduct.prototype.constructor = DigitalProduct

function PhysicalProduct(idProduct,nameProduct,price,pointQuianty,description,quianty){
    GeneralProduct.call(this,idProduct,nameProduct,price,pointQuianty,description,quianty)
}

PhysicalProduct.prototype = Object.create(GeneralProduct.prototype)
PhysicalProduct.prototype.constructor = PhysicalProduct

let comprasDB = []
function OrdenProducto(nameUser,date,nameProduct,payMode,quianty,unitPrice,totalPrice,totalPoints,awardedPoints){
    this.nameUser = nameUser
    this.date = date
    this.nameProduct = nameProduct
    this.payMode = payMode
    this.quianty = quianty
    this.unitPrice = unitPrice
    this.totalPrice = totalPrice
    this.totalPoints = totalPoints
    this.awardedPoints = awardedPoints
}


let nuevaOrden = new OrdenProducto()

OrdenProducto.prototype.construirOrden = function(nameUser,date,nameProduct,payMode,quianty,unitPrice,totalPrice,totalPoints,awardedPoints){

    nuevaOrden = new OrdenProducto(nameUser,date,nameProduct,payMode,quianty,unitPrice,totalPrice,totalPoints,awardedPoints)
    alert(`Detalles de la orden: \n${JSON.stringify(nuevaOrden,null,2)}`)
    comprasDB.push(nuevaOrden)    

}

function ModoDePago(){

}

const modoDePago = new ModoDePago()

ModoDePago.prototype.solicitarModo = function(){
    let pagoElegido
    let elegirModo = Number(prompt("Ingrese el numero correspondiente a la opcion elegida"+
                                    "\n1.Efectivo"+
                                    "\n2.Canjear puntos"
    ))
    switch(elegirModo){
        case 1:
            pagoElegido = "Efectivo"
            break
        case 2:
            pagoElegido = "Puntos"
            break
        default:
            alert("Ingrese una opción válida")
    }
   return pagoElegido
}

Costumer.prototype.canjearPuntos = function(puntosDelCliente,valorTotalEnPuntos){
    if(puntosDelCliente < valorTotalEnPuntos){
        return["No tienes puntos suficientes para realizar la compra",0]
    }else{
        puntosDelCliente -= valorTotalEnPuntos
        return [puntosDelCliente,1]
    }
}

const comprarProductos = function(){
    let tipoDeProducto = Number(prompt("Ingrese la opción correspondiente al tipo de producto"+
                                       "\n1.Fisico"+
                                       "\n2.Digital"
    ))
    cliente.realizarCompra(tipoDeProducto)
}


function ActividadPuntos(){

}

const actividad = new ActividadPuntos()

ActividadPuntos.prototype.otorgarPuntos = function(totalCompra){
    let puntosAOtorgar = totalCompra / 10

    return puntosAOtorgar


}


const validarProductoCompra = function(array){
    let idProducto = Number(prompt("Ingresa el id del producto que deseas comprar"))
    let idEncontrado = array.find(producto => producto.idProduct === idProducto)
    if(idEncontrado){
        let nombreUsuario = usuarioActual
        let fecha = new Date()
        let nombreProducto = idEncontrado.nameProduct
        let modoPago = modoDePago.solicitarModo()
        let cantidadProducto = UtilityProduct.cantidadProducto()
        let cantidadValida = UtilityProduct.cantidadProductoCompraValida(cantidadProducto,idEncontrado.quianty)
           
        if(!cantidadValida[1]){
            cantidadValida[0]
        }else{
            idEncontrado.quianty = cantidadValida[0]
            let precioUnidad = idEncontrado.price
            let precioTotal = precioUnidad * cantidadProducto
    
            let clienteEncontrado = clientesDB.find(cliente => cliente.email === nombreUsuario)
            let puntosCliente = clienteEncontrado.points
            let totalPrecioPuntos 
            let puntosOtorgados
            if(modoPago === "Puntos"){
                totalPrecioPuntos = idEncontrado.pointQuianty * cantidadProducto
                puntosOtorgados = 0
                let respuestaPuntos = cliente.canjearPuntos(puntosCliente,totalPrecioPuntos)
                if(respuestaPuntos[1]){
                    clienteEncontrado.points = respuestaPuntos[0]

                    nuevaOrden.construirOrden(nombreUsuario,fecha,nombreProducto,modoPago,cantidadProducto,precioUnidad,precioTotal,totalPrecioPuntos,puntosOtorgados)

                }else{
                    alert(respuestaPuntos[0])
                }
            }else{
                totalPrecioPuntos = 0
                puntosOtorgados = actividad.otorgarPuntos(precioTotal)
                clienteEncontrado.points += puntosOtorgados 
                nuevaOrden.construirOrden(nombreUsuario,fecha,nombreProducto,modoPago,cantidadProducto,precioUnidad,precioTotal,totalPrecioPuntos,puntosOtorgados)


            }//else modo de pago = efectivo
        }

        
       
     


    }else{
        alert("El id no se encuentra en la lista")
    }
}

Costumer.prototype.realizarCompra = function(tipoDeProducto){
    let str = ""
    switch(tipoDeProducto){
        case 1:
            productosFisicosDB.forEach(producto => str += JSON.stringify(producto) + "\n")
            alert(`Productos fisicos disponibles: \n${str}`)
            validarProductoCompra(productosFisicosDB)
            break
        case 2:
            productosDigitalesDB.forEach(producto => str += JSON.stringify(producto) + "\n")
            alert(`Productos digitales disponibles: \n${str}`)
            validarProductoCompra(productosDigitalesDB)
            break
        default:
            alert("Ingrese una opción válida")
    }

}



let productoGenerico = new GeneralProduct()
let productoDigital = new DigitalProduct(1,"producto",200,500,"producto",50,"www.producto.com")
productosDigitalesDB.push(productoDigital)
let productoFisico = new PhysicalProduct(2,"producto",500,600,"producto",50)
productosFisicosDB.push(productoFisico)


GeneralProduct.prototype.editarProducto = function(array){
    let str = ""
    array.forEach(obj => str += JSON.stringify(obj) + "\n")
    alert("Todos los productos" + str)
    let idAEditar = Number(prompt("Ingrese el id del producto que desea editar"))
    let idEncontrado = array.find(obj => obj.idProduct === idAEditar)
    if(idEncontrado){
        let atributoAEditar = Number(prompt("Ingrese la opción correspondiente a lo que desea editar"+
                                            "\n1.nombre del producto"+
                                            "\n2.Precio del producto"+
                                            "\n3.Valor en puntos"+
                                            "\n4.Descripción del producto"+
                                            "\n5.Cantidad del producto"
        ))
        switch(atributoAEditar){
            case 1:
                let nuevoNombre = UtilityProduct.validarNombreProducto()
                idEncontrado.nameProduct = nuevoNombre
                alert(JSON.stringify(idEncontrado,null,2))
                break
            case 2:
                let nuevoPrecio = UtilityProduct.validarPrecio()
                idEncontrado.price = nuevoPrecio
                alert(JSON.stringify(idEncontrado,null,2))
                break
            case 3:
                let nuevoVPuntos =  UtilityProduct.validarPuntos()
                idEncontrado.pointQuianty = nuevoVPuntos
                alert(JSON.stringify(idEncontrado,null,2))
                break
            case 4:
                let nuevaDescripcion = UtilityProduct.validarDescripcion()
                idEncontrado.description = nuevaDescripcion
                alert(JSON.stringify(idEncontrado,null,2))
                break
            case 5:
                let nuevaCantidad = UtilityProduct.cantidadProducto()
                idEncontrado.quianty = nuevaCantidad
                alert(JSON.stringify(idEncontrado,null,2))
                break
            default:
                alert("Ingresa una opción válida")
        }
    }else{
        alert("El id ingresado no se encuentra registrado")
    }
    return idEncontrado

}

DigitalProduct.prototype.editarProducto = function(array){
    let idEncontrado = GeneralProduct.prototype.editarProducto.call(this,array)
    if(idEncontrado){
        let atributoAEditar = Number(prompt("¿Deseas editar la URL? ingresa el numero correspondiente a la opcion"+
                                            "\n1.Si"+
                                            "\n2.No"
        ))
        switch (atributoAEditar) {
            case 1:
                let nuevaUrl = prompt("Ingresa la nueva URL")
                idEncontrado.url = nuevaUrl
                alert(JSON.stringify(idEncontrado,null,2))
                break
            
            case 2:
                break
            default:
                alert("Ingresa una opcion válida")
        }


    }else{
        alert("El id ingresado no se encuentra registrado")
    }


}

const verListaDeProductos = function(){
    const totalProductosDB = productosFisicosDB.concat(productosDigitalesDB)
    let str = ""
    totalProductosDB.forEach(producto => str += JSON.stringify(producto) + "\n" )
    alert("Todos los productos: \n" + str)
    return totalProductosDB
}

GeneralProduct.prototype.eliminarProducto = function(){
    const totalProductosDB = verListaDeProductos()
    let idAEliminar = Number(prompt("Ingrese el id del producto que desea eliminar"))
    let idEncontrado = totalProductosDB.find(producto => producto.idProduct === idAEliminar)
    if(idEncontrado){
        let idDigital = productosDigitalesDB.find(producto => producto.idProduct === idAEliminar)
        if(idDigital){
            productosDigitalesDB = productosDigitalesDB.filter(producto => producto.idProduct !== idAEliminar)
            alert("Producto digital eliminado")
        }else{
            // let idFisico = productosFisicosDB.find(producto => producto.idProduct === idEncontrado)
            productosFisicosDB = productosFisicosDB.filter(producto => producto.idProduct !== idAEliminar)
            alert("producto fisico eliminado")
        }
    }else{
        alert("El id encontrado no se encuentra registrado")
    }
}



export {productosDigitalesDB,productosFisicosDB, productoFisico, productoDigital, productoGenerico, verListaDeProductos, comprarProductos, PhysicalProduct, DigitalProduct,UtilityProduct, GeneralProduct}