import {productosDigitalesDB,productosFisicosDB, productoFisico, productoDigital, productoGenerico, verListaDeProductos, comprarProductos,UtilityProduct} from "./productos.js"
import {clientesDB,administradorDB, usuarioActual, cliente, pedirUsuarioAEliminar, pedirDatosIngreso, Utility} from "./usuarios.js"

//Menu
let roll
let typeProduct
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
                        Utility.pedirDatos(roll)
                        // cliente?.construirUsuario(roll)
                        console.log(clientesDB);
                        break
                    case 2:
                        pedirDatosIngreso(clientesDB)
                        alert(usuarioActual)
                        
                        while(confirm("Deseas realizar alguna acción")){
                            let accionCliente = Number(prompt("Ingresa la opción correspondiente a lo que deseas realizar"+ 
                                                            "\n1.Ver lista de productos"+
                                                            "\n2.Comprar productos"+
                                                            "\n3.Visualiza tus puntos"
                            ))
                            switch(accionCliente){
                                case 1:
                                    verListaDeProductos()
                                    break
                                case 2:
                                    alert("Comprar productos")
                                    comprarProductos()
                                    break
                                case 3:
                                    cliente.verPuntos()
                                    break
                                default:
                                    alert("Ingresa una opción válida")

                            }//Cierre switch accion cliente
                        }//Cierre while accion cliente
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
                    Utility.pedirDatos(roll)
                    // administrador?.construirUsuario(roll)
                    console.log(administradorDB);
                    break
                case 2:
                    pedirDatosIngreso(administradorDB)
                    // administrador?.iniciarSesion(administradorDB)
                    while(confirm("¿Deseas realizar una acción?")){
                        let accionAdmin = Number(prompt("Ingresa el número correspondiente a la acción que deseas realizar"+
                                                        "\n1.Agregar Producto"+
                                                        "\n2.Editar Producto"+
                                                        "\n3.Eliminar Producto"+
                                                        "\n4.Eliminar Usuario"
                        ))
                        switch(accionAdmin){
                            case 1:
                                let elegirTipoProduct = Number(prompt("Ingrese la opción correspondiente al tipo de producto"+
                                                                      "\n1.Producto digital"+
                                                                      "\n2.Producto fisico"
                                ))
                                switch(elegirTipoProduct){
                                    case 1:
                                        typeProduct = "digital"
                                        UtilityProduct.construirProducto(typeProduct)
                                        console.log(productosDigitalesDB)
                                        break
                                    case 2:
                                        typeProduct = "fisico"
                                        UtilityProduct.construirProducto(typeProduct)
                                        console.log(productosFisicosDB)
                                        break
                                    default:
                                        alert("Ingresa una opción válida")
                                }//Cierre switch elegir tipo de producto
                                break
                            case 2:
                                let tipoAEditar = Number(prompt("Ingrese la opción correspondiente al producto que va a editar"+
                                                                "\n1.Producto fisico"+
                                                                "\n2.Producto Digital"
                                ))
                                switch(tipoAEditar){
                                    case 1:
                                        productoFisico.editarProducto(productosFisicosDB)
                                        break
                                        case 2:
                                        productoDigital.editarProducto(productosDigitalesDB)
                                        break
                                    default:
                                        alert("Ingresa una opción valida")
                                }//Cierre switch tipo a editar
                                break
                            case 3:
                                productoGenerico.eliminarProducto()
                                break
                            case 4:
                                pedirUsuarioAEliminar()
                                break
                            default:
                                alert("Ingresa una opción válida")

                        }

                    }//Cierre while admin acciones
                    break
                default:
                    alert("Ingresa una opción válida")
                }//Cierre switch menu admin
            }//Cierre while menu administrador

            break
        default:
            alert("Ingresa una opción válida")
    }//Cierre switch menu principal

}//Cierre while menu principal