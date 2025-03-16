let productos = [{Id:1,Nombre:"Pastel de chocolate blanco",Precio:170,Stock:10,Imagen:"./assets/pastel-chocolate-mini-01_1800x1800_923894f5-449b-467b-ade8-b4a5d57e5ca0.webp"},
    {Id:2,Nombre:"Pastel de chocolate",Precio:100,Stock:5,Imagen:"./assets/pastel_chocolate_blanco.webp"},
    {Id:3,Nombre:"Pastel de cookies & cream",Precio:150,Stock:7,Imagen:"./assets/pastel_cokee.webp"},
    {Id:4,Nombre:"Pastel de Seth",Precio:125,Stock:7,Imagen:"./assets/pastel_seth.webp"},
    {Id:5,Nombre:"Pastel de Zanahoria",Precio:100,Stock:7,Imagen:"./assets/pastel_zanahoria.webp"},
    {Id:6,Nombre:"Pastel de tres leches",Precio:100,Stock:7,Imagen:"./assets/pastelito.webp"}
];
let totalCarrito = 0;

function llenarDatos(){
    console.log("Llenando datos");
    const productosContainer = document.getElementById("products_container");
    productosContainer.innerHTML = "";
    productos.forEach((producto) => {
      const productoHTML = `
        <div class="product">
            <img src="${producto.Imagen}" alt="${producto.Nombre}">
          <h3>${producto.Nombre}</h3>
          <p>Precio: $${producto.Precio}</p>
          <div class = "stock">${producto.Stock}</div>
          <button onclick="addCarrito(${producto.Id})">Agregar al carrito</button>
        </div>
      `;
      productosContainer.innerHTML += productoHTML; 
    });
}
function addCarrito(producto_id){
    console.log("Agregando al carrito");
    let producto = productos.find(producto => producto.Id == producto_id);

    if (producto.Stock > 0) {
        totalCarrito += producto.Precio; 
        producto.Stock -= 1; 
        document.getElementById("carrito").textContent = totalCarrito;
        llenarDatos();
    } else {
        alert("No hay suficiente stock para este producto.");
    }
}
function felicitarCompra(){
    console.log("Felicitando compra");
    alert("¡Gracias por tu compra!");
    totalCarrito = 0;
    document.getElementById("carrito").textContent = totalCarrito;
    llenarDatos();
}