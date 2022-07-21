class Producto {
    constructor( nombre , marca , stock , precio ){
    
        this.nombre = nombre
        this.marca = marca
        this.stock = stock
        this.precio = precio 
    }
}

const productos = []

let precio, marca, nombre, seguir, stock;



do {
    
    do {
        nombre = prompt("Ingrese el nombre del producto:").toLowerCase()
        marca = prompt("Ingrese la marco del producto:").toLowerCase()

    

    }while ((nombre.length == 0 || marca.length == 0))

    do {
        
        precio = parseFloat(prompt("Ingrese el precio del producto:"))
        stock =  parseInt(prompt("Ingrese el stock de dicho producto:"))

        

    } while ((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0));

    const producto = new Producto(nombre, marca, precio, stock)
    productos.push(producto)
   
    seguir = prompt("¿Desea seguir cargando productos?:")

} while (seguir != "no")
 
    
let lista = document.getElementById("listaDeProductos")


for (let produc of productos) {
    lista.innerHTML += `
        <div class = "div-padre">
            <h3>NOMBRE: ${produc.nombre}</h3>
            <p>MARCA: ${produc.marca}</p>
            <p>PRECIO: ${produc.precio}</p>
            <p>STOCK: ${produc.stock}</p>
            
        
        </div>
    
    
    `
}

const fondo = document.getElementById(`fondo`)
const letra = document.getElementById(`letra`)

fondo.addEventListener(`input`, () => {
    document.body.style.backgroundColor = fondo.value
    
})
letra.addEventListener(`input`, () => {
    document.body.style.color = letra.value
    
})
