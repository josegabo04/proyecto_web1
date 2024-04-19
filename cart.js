function agregarAlCarrito(producto){
    const memoria = localStorage.getItem("masitas")
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = producto;
        nuevoProducto.cantidad = 1;
        localStorage.setItem("masitas",JSON.stringify([nuevoProducto]))
    }
}