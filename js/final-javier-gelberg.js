//BD array ---------
const productos = [
    {
        id: 1,
        imagen: 'img/01_argentina_fte_500x500.png',
        altImg: 'Camiseta de Argentina 2023',
        marca: 'Adidas',
        descripcion: 'Argentina Titular 2023 - 3 estrellas',
        equipo: 'Argentina',
        color: 'Celeste y Blanco',
        modelo: 2023,
        precio: 10,
        cantidad: 1
    },
    {
        id: 2,
        imagen: 'img/02_alemania_fte_500x500.png',
        altImg: 'Camiseta de Alemania 2023',
        marca: 'Adidas',
        descripcion: 'Alemania Titular 2023',
        equipo: 'Alemania',
        color: 'Blanco y negro',
        modelo: 2023,
        precio: 20,
        cantidad: 1
    },
    {
        id: 3,
        imagen: 'img/03_francia_fte_500x500.png',
        altImg: 'Camiseta de Francia 2023',
        marca: 'Nike',
        descripcion: 'Francia Titular 2023',
        equipo: 'Francia',
        color: 'Azul',
        modelo: 2023,
        precio: 30,
        cantidad: 1
    },
    {
        id: 4,
        imagen: 'img/04_brasil_fte_500x500.png',
        altImg: 'Camiseta de Brasil 2023',
        marca: 'Nike',
        descripcion: 'Brasil Titular 2023',
        equipo: 'Brasil',
        color: 'Amarillo y Verde',
        modelo: 2023,
        precio: 40,
        cantidad: 1
    },
    {
        id: 5,
        imagen: 'img/05_paisesBajos_fte_500x500.png',
        altImg: 'Camiseta de Paises Bajos 2023',
        marca: 'Nike',
        descripcion: 'Paises Bajos Titular 2023',
        equipo: 'Paises Bajos',
        color: 'Naranja',
        modelo: 2023,
        precio: 50,
        cantidad: 1
    },
    {
        id: 6,
        imagen: 'img/06-ecuador_fte_500x500.png',
        altImg: 'Camiseta de Ecuador 2023',
        marca: 'Marathon',
        descripcion: 'Ecuador Titular 2023',
        equipo: 'Ecuador',
        color: 'Amarillo',
        modelo: 2023,
        precio: 60,
        cantidad: 1
    },
    {
        id: 7,
        imagen: 'img/07_croacia_fte_500x500.png',
        altImg: 'Camiseta de Croacia 2023',
        marca: 'Nike',
        descripcion: 'Croacia Titular 2023',
        equipo: 'Croacia',
        color: 'Azul',
        modelo: 2023,
        precio: 70,
        cantidad: 1
    },
    {
        id: 8,
        imagen: 'img/08_espania_fte_500x500.png',
        altImg: 'Camiseta de España 2023',
        marca: 'Adidas',
        descripcion: 'España Titular 2023',
        equipo: 'España',
        color: 'Rojo',
        modelo: 2023,
        precio: 80,
        cantidad: 1
    },
    {
        id: 9,
        imagen: 'img/09_inglaterra_fte_500x500.png',
        altImg: 'Camiseta de Inglaterra 2023',
        marca: 'Nike',
        descripcion: 'Inglaterra Titular 2023',
        equipo: 'Inglaterra',
        color: 'Blanco',
        modelo: 2023,
        precio: 90,
        cantidad: 1
    },

    {
        id: 10,
        imagen: 'img/01_argentina_fte_500x500.png',
        altImg: 'Camiseta de Argentina 2023',
        marca: 'Adidas',
        descripcion: 'Argentina con numero',
        equipo: 'Argentina',
        color: 'Celeste y Blanco',
        modelo: 2023,
        precio: 100,
        cantidad: 1
    },
    {
        id: 11,
        imagen: 'img/02_alemania_fte_500x500.png',
        altImg: 'Camiseta de Alemania Sub Campeon',
        marca: 'Adidas',
        descripcion: 'Alemania alternativa',
        equipo: 'Alemania',
        color: 'Blanco y Negro',
        modelo: 2023,
        precio: 200,
        cantidad: 1
    },
    {
        id: 12,
        imagen: 'img/03_francia_fte_500x500.png',
        altImg: 'Camiseta de Francia 2023',
        marca: 'Nike',
        descripcion: 'Francia MBape 2023',
        equipo: 'Francia',
        color: 'Azul',
        modelo: 2023,
        precio: 300,
        cantidad: 1
    },
    {
        id: 13,
        imagen: 'img/04_brasil_fte_500x500.png',
        altImg: 'Camiseta de Brasil 2023',
        marca: 'Nike',
        descripcion: 'Brasil Verano 2023',
        equipo: 'Brasil',
        color: 'Amarillo y Verde',
        modelo: 2023,
        precio: 400,
        cantidad: 1
    },
    {
        id: 14,
        imagen: 'img/05_paisesBajos_fte_500x500.png',
        altImg: 'Camiseta de Paises Bajos 2023',
        marca: 'Nike',
        descripcion: 'Paises Bajos sin numero',
        equipo: 'Paises Bajos',
        color: 'Naranja',
        modelo: 2023,
        precio: 500,
        cantidad: 1
    },
    {
        id: 15,
        imagen: 'img/06-ecuador_fte_500x500.png',
        altImg: 'Camiseta de Ecuador 2023',
        marca: 'Marathon',
        descripcion: 'Ecuador Opcion a mangas largas',
        equipo: 'Ecuador',
        color: 'Amarillo',
        modelo: 2023,
        precio: 600,
        cantidad: 1
    },
    {
        id: 16,
        imagen: 'img/07_croacia_fte_500x500.png',
        altImg: 'Camiseta de Croacia 2023',
        marca: 'Nike',
        descripcion: 'Croacia Suplente a cuadros',
        equipo: 'Croacia',
        color: 'Azul',
        modelo: 2023,
        precio: 700,
        cantidad: 1
    },
    {
        id: 17,
        imagen: 'img/08_espania_fte_500x500.png',
        altImg: 'Camiseta de España 2023',
        marca: 'Adidas',
        descripcion: 'España Alicante y Barcelona',
        equipo: 'España',
        color: 'Rojo',
        modelo: 2023,
        precio: 800,
        cantidad: 1
    },
    {
        id: 18,
        imagen: 'img/09_inglaterra_fte_500x500.png',
        altImg: 'Camiseta de Inglaterra 2023',
        marca: 'Nike',
        descripcion: 'Inglaterra tela antitranspirante',
        equipo: 'Inglaterra',
        color: 'Blanco',
        modelo: 2023,
        precio: 900,
        cantidad: 1
    },
];


//variables
let carrito = [];
let precioTotal = 0;
let cantProductosTotal = 0;
let pagos = ['efectivo', 'debito', 'credito'];


const d = document;
const contenedorCarrito = d.querySelector('#lista-carrito tbody');
const vaciarCarrito = d.querySelector('#vaciar-carrito');
const listaProductos = d.querySelector('#lista-productos');


//--------------- Armado de HTML ------------------------------------ //
//--- Header ------------------------------------------ //

// Crear elementos del encabezado
let header = document.createElement("header");
header.classList.add("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark");

let container = document.createElement("div");
container.classList.add("container");

let brand = document.createElement("a");
brand.classList.add("navbar-brand", "fs-1");
brand.href = "#";
brand.innerText = "Fussballtrikots";
brand.style.fontWeight = "bold";

let nav = document.createElement("nav");
nav.classList.add("ml-auto", "d-flex", "gap-2");


let btnVerCarrito = d.createElement("button");
btnVerCarrito.classList.add("btn", "btn-primary", "boton-carrito", "align-items-center", "mt-4");
btnVerCarrito.setAttribute("id", "verCarritoBtn");
btnVerCarrito.innerText = "Ver mi Carrito";


let btnComprar = d.createElement("button");
btnComprar.classList.add("btn", "btn-primary", "boton-carrito", "align-items-center", "py-4", "mx-4","text-center");
btnComprar.setAttribute("id", "btnComprarForm");
btnComprar.innerText = "Comprar";


let form = document.createElement("form");
form.classList.add("form-inline");

let cantProductoLabel = document.createElement("label");
cantProductoLabel = d.querySelector("#items");
cantProductoLabel.classList.add("bg-success", "p-2", "mt-4", "border", "border-warning", "bg-info", "rounded-1");


let precioLabel = document.createElement("label");
precioLabel = d.querySelector("#precio");
precioLabel.classList.add("bg-warning", "p-2", "border", "border-warning", "rounded-1", "bg-info", "text-left");



form.appendChild(cantProductoLabel);
form.appendChild(precioLabel);


nav.appendChild(btnVerCarrito);
nav.appendChild(form);


container.appendChild(brand);
container.appendChild(nav);
header.appendChild(container);


// Insertar el encabezado en el documento
document.body.insertBefore(header, document.body.firstChild);

//--- ./Header ------------------------------------------ //

// Agregar evento click al botón para abrir la pantalla modal
btnVerCarrito.addEventListener('click', () => {

    abrirModalCarrito();

});

//mostrar formulario comprar -------------
btnComprar.addEventListener('click', () => {

    abrirFormularioComprar();
    

});





//--- Listado de productos ------------------//
productos.forEach(producto => {

    const card = d.createElement("div");
    card.classList.add("card");
    card.dataset.id = producto.id;

    const cardBody = d.createElement("div");
    cardBody.classList.add("card-body");

    const cardImg = d.createElement("img");
    cardImg.src = producto.imagen;
    cardImg.alt = producto.altImg;
    cardImg.classList.add("card-img-top", "imgProducto");

    const cardTitle = d.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = producto.descripcion;

    const cardSubtitle = d.createElement("h5");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerText = producto.marca;

    const cardText = d.createElement("p");
    cardText.classList.add("card-text", "precio");
    cardText.innerText = "ARS " + producto.precio;

    //boton agregar -----------
    const cardButton = d.createElement("button");
    cardButton.classList.add("btn", "btn-warning", "ms-2", "mb-2", "w-100");
    cardButton.innerText = "Agregar al Carrito";

    cardButton.addEventListener("click", (e) => {
       
        const productoSeleccionado = e.target.parentElement.parentElement;

        //console.log(card);

        const productoId = productoSeleccionado.dataset.id;

        for (let producto of productos) {

            if (producto.id == productoId) {
                // carrito.push(producto);
                //break;
                agregarCarrito(producto);
            }
        }

        // console.log(carrito);
    });

    const cardButtonMostrar = d.createElement("button");
    cardButtonMostrar.classList.add("btn", "btn-danger", "ms-2", "w-100");
    cardButtonMostrar.innerText = "Mostrar Más";


    //------------------------------------------------------------------------------
    //----- modal ver mas-----------------------------------------------------------
    //------------------------------------------------------------------------------

    cardButtonMostrar.addEventListener("click", (e) => {
        const productoSeleccionado = e.target.parentElement.parentElement;
        const productoId = productoSeleccionado.dataset.id;


        let modalVerMas = d.createElement("div");
        modalVerMas.classList.add("mostrarMas");
        modalVerMas.setAttribute("id", "modalVerMas");
        modalVerMas.dataset.id = producto.id;

        const aCerrar = document.createElement("a");
        aCerrar.setAttribute("href", "javascript:void(0)");
        aCerrar.innerText = "CERRAR";
        aCerrar.classList.add('btn', 'btn-danger', "mt-2", "w-50");
        aCerrar.addEventListener('click', () => {
            let cerrar = document.querySelector("#modalVerMas");
            cerrar.remove();
        });
        for (const producto of productos) {
            if (producto.id == productoId) {

                let imagenModal = d.createElement("img");
                imagenModal.src = producto.imagen;
                imagenModal.alt = producto.altImg;
                imagenModal.classList.add("card-img-top", "imgProducto", "mt-2");

                let tituloModal = d.createElement("h2");
                tituloModal.innerText = producto.altImg;
                tituloModal.classList.add("tituloModalH2");

                let marcaModal = d.createElement("p");
                marcaModal.innerText = `Producto: ${producto.marca}`;
                marcaModal.classList.add("tituloModalP");

                let descripcionModal = d.createElement("p");
                descripcionModal.innerText = `Modelo: ${producto.descripcion}`;
                descripcionModal.classList.add("tituloModalP");

                let colorModal = d.createElement("p");
                colorModal.innerText = `Color: ${producto.color}`;
                colorModal.classList.add("tituloModalP");

                let modeloModal = d.createElement("p");
                modeloModal.innerText = `Año de Fabricación: ${producto.modelo}`;
                modeloModal.classList.add("tituloModalP");

                let precioModal = d.createElement("h2");
                precioModal.innerText = `ARS ${producto.precio}.-`;
                precioModal.classList.add("precioModalH2")

                modalVerMas.append(imagenModal, tituloModal, marcaModal, descripcionModal, colorModal, modeloModal, precioModal, aCerrar);
                d.querySelector("main").append(modalVerMas);

            }
        }
    });

    // --- muestra los elementos en pantalla -- del for de camisetas -- 
    cardBody.append(cardImg, cardTitle, cardSubtitle, cardText, cardButton, cardButtonMostrar);
    card.append(cardBody);

    let catalogo = d.querySelector("#catalogo");
    catalogo.classList.add("d-flex", "gap-2", "flex-wrap");
    catalogo.append(card);
    d.querySelector("main").append(catalogo);


});


//------------------------------------------------------------------------------
//--------- FUNCIONES ----------------------------------------------------------
//------------------------------------------------------------------------------




/*----- funcion agregar al carrito  -------------------------------- */

function agregarCarrito(producto) {
    let precioSuma = document.querySelector("#preciofinal");
    let cantProductos = document.querySelector("#cantidadCarrito");

    if (carrito.length == 0) {
        carrito.push(producto);
    } else {
        let productoExiste = false;
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id == producto.id) {
                carrito[i].cantidad += 1;
                productoExiste = true;
                break;
            }
        }

        if (!productoExiste) {
            carrito.push(producto);
        }
    }
    precioTotal += producto.precio;
    cantProductosTotal++;

    precioSuma.innerText = precioTotal;
    cantProductos.innerText = cantProductosTotal;

}
/*--- Restar producto --------- */
const restarProducto = (producto) => {
    console.log(producto)
    if (producto.cantidad > 1) {
        for (let i = carrito.length - 1; i >= 0; i--) {
            if (carrito[i].id == producto.id) {
                carrito[i].cantidad--;
            }
        }
        cantProductosTotal--;
        precioTotal -= producto.precio;

        let cantidadProducto = d.querySelector("#cantidadProductoModal" + producto.id);
        let precioProducto = d.querySelector('#precioProductoModal' + producto.id);
        let montoTotal = d.querySelector('#montoTotalModal');
        let cantTotal = d.querySelector('#cantTotalModal');

        cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;
        precioProducto.innerText = `ARS ${(producto.precio * producto.cantidad)}`;
        
        montoTotal.innerText = `Monto Total ARS$ ${precioTotal}.-`;
        cantTotal.innerText = `La cantidad es: ${cantProductosTotal}`;
        

    } else {
        producto.cantidad -= 1;
        precioTotal -= producto.precio;
        cantProductosTotal--;
        let montoTotal = d.querySelector('#montoTotalModal');
        let cantTotal = d.querySelector('#cantTotalModal');
        montoTotal.innerText = `Monto Total ARS$ ${precioTotal}.-`;
        cantTotal.innerText = `La cantidad es: ${cantProductosTotal}`;
        eliminarProducto(producto);
    }

}

/*----- funcion agregar eliminar del carrito  -------------------------------- */

const eliminarProducto = (producto) => {

    //console.log(carrito);
    for (let i = carrito.length - 1; i >= 0; i--) {
        if (carrito[i].id == producto.id) {

            carrito.splice(i, 1)
            document.querySelector("#miModalCarrito").remove();
            abrirModalCarrito();
        }
    }
}

//*** funcion agregar producto -------------
function agregarProducto(producto) {
    console.log(producto.id);
    //producto.cantidad++;

    for (let i = carrito.length - 1; i >= 0; i--) {
        if (carrito[i].id == producto.id) {
            carrito[i].cantidad++;
        }
    }

    cantProductosTotal++;
    precioTotal += producto.precio;

    let cantidadProducto = d.querySelector("#cantidadProductoModal" + producto.id);
    let precioProducto = d.querySelector('#precioProductoModal' + producto.id);
    let montoTotal = d.querySelector('#montoTotalModal');
    let cantTotal = d.querySelector('#cantTotalModal');

    cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;
    precioProducto.innerText = `ARS ${(producto.precio * producto.cantidad)}`;
    montoTotal.innerText = `Monto Total ARS$ ${precioTotal}.-`;
    cantTotal.innerText = `La cantidad es: ${cantProductosTotal}`;

}

//--- funcion Vaciar Carrito ---------------------------*
function vaciarCarritoTotal() {
    console.log(carrito);
    for (let i = carrito.length - 1; i >= 0; i--) {
        carrito.splice(i, 1)
    }
    precioTotal = 0;
    cantProductosTotal = 0;
    document.querySelector("#miModalCarrito").remove();
    abrirModalCarrito();
}

/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
/*-*-*-*-*-*-*-*-*-*-* PANTALLA MODAL CARRITO -*-*-*-*-*-*-*-*  */
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* */
const abrirModalCarrito = () => {

    console.log(carrito);
    // Crear la pantalla modal
    let modal = document.createElement('div');
    modal.classList.add("mostrarPrimero");
    modal.setAttribute('id', 'miModalCarrito');

    const aCerrar = document.createElement("a");
    aCerrar.setAttribute("href", "javascript:void(0)");
    aCerrar.innerText = "CERRAR";
    aCerrar.classList.add("btn", "btn-danger", "cerrarModal");
    aCerrar.addEventListener('click', () => {
        let cerrar = document.querySelector("#miModalCarrito");
        cerrar.remove();
    });

    let modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Carrito de Compras';
    modalTitle.classList.add("modalTitulo");

    let contenedorProductos = document.createElement('div');
    contenedorProductos.classList.add("contenedorProductosModal");


    let montoTotal = d.createElement("h4");
    montoTotal.innerText = `Monto Total ARS$ ${precioTotal}.-`;
    //montoTotal.classList.add("montoTotalModal");
    montoTotal.setAttribute('id', 'montoTotalModal');


    let cantTotal = d.createElement("h4");
    cantTotal.innerText = cantProductosTotal;
    cantTotal.innerText = `La cantidad es: ${cantProductosTotal}`;
    //cantTotal.classList.add("cantTotalModal");
    cantTotal.setAttribute('id', 'cantTotalModal');

    let btnCompra = d.createElement("button");
    btnCompra.classList.add("btn", "btn-primary", "comprarModal");
    btnCompra.innerText = "Comprar";

    let btnVaciarCarrito = d.createElement("button");
    btnVaciarCarrito.classList.add("btn", "btn-danger", "rounded-3", "comprarModal");
    btnVaciarCarrito.innerText = "Vaciar la totalidad de la compra";
    btnVaciarCarrito.addEventListener("click", () => {

        vaciarCarritoTotal();
    });


    for (const producto of carrito) {
        console.log(producto);
        let contenedorProducto = d.createElement("div");
        contenedorProducto.classList.add("contenedorProductoModal");
        contenedorProducto.dataset.id = producto.id;

        let imagenProducto = d.createElement("img");
        imagenProducto.setAttribute("src", producto.imagen);
        imagenProducto.setAttribute("alt", producto.altImg);
        imagenProducto.classList.add("imgProductoCard");


        let nombreProducto = d.createElement("h3");
        nombreProducto.innerText = `${producto.altImg}`;
        nombreProducto.classList.add("nombreProductoModal");


        let flechaMas = d.createElement("button");
        flechaMas.classList.add("btn", "btn-primary", "botonesMasMenos");
        flechaMas.innerText = "+";
        flechaMas.addEventListener("click", () => {

            agregarProducto(producto);
        });

        let flechaMenos = d.createElement("button");
        flechaMenos.classList.add("btn", "btn-info", "botonesMasMenos");
        flechaMenos.innerText = "-";
        flechaMenos.addEventListener('click', (e) => {

            const productoId = producto.id;
            for (let i = 0; i < carrito.length; i++) {
                if (carrito[i].id == productoId) {
                    restarProducto(carrito[i]);
                }
            }
        });

        let cantidadProducto = d.createElement("h4");
        cantidadProducto.innerText = `Cantidad: ${producto.cantidad}`;
        cantidadProducto.setAttribute('id', 'cantidadProductoModal' + producto.id);

        let precioProducto = d.createElement("h4");
        precioProducto.innerText = `ARS ${(producto.precio * producto.cantidad)}`;
        //precioProducto.classList.add("precioProductoModal");
        precioProducto.setAttribute('id', 'precioProductoModal' + producto.id);

        let bntEliminarProducto = d.createElement("button");
        bntEliminarProducto.innerText = "Eliminar Item";
        bntEliminarProducto.classList.add("btn", "btn-danger");
        bntEliminarProducto.addEventListener("click", (e) => {

            // eliminarProducto(producto.id);
            cantProductosTotal -= producto.cantidad;
            precioTotal -= (producto.cantidad * producto.precio);
            montoTotal.innerText = `Monto Total ARS$ ${precioTotal}.-`;
            cantTotal.innerText = `La cantidad es: ${cantProductosTotal}`;
            eliminarProducto(producto);

            const productoSeleccionado = e.target.parentElement;

            //console.log(producto);
        });



        contenedorProducto.append(imagenProducto, nombreProducto, flechaMenos, cantidadProducto, flechaMas, precioProducto);
        contenedorProductos.append(contenedorProducto);
    }


    modal.append(aCerrar, modalTitle, contenedorProductos, montoTotal, cantTotal, btnComprar, btnVaciarCarrito);
    d.querySelector("main").append(modal);
}






//------------------------------ FOOTER -------------------------------------- /

// Obtener el elemento del footer
let footer = d.getElementById("footer");
footer.classList.add("container");

// Crear la tabla
let tabla = d.createElement("table");
tabla.classList.add("table", "table-sm", "text-light");

// Crear las filas
let fila1 = d.createElement("tr");
fila1.classList.add("bg-primary");

let fila2 = d.createElement("tr");
fila2.classList.add("text-dark");

let fila3 = d.createElement("tr");
fila3.classList.add("bg-primary");

let fila4 = d.createElement("tr");
fila4.classList.add("text-dark");

// Crear las celdas y establecer el contenido
let celda1 = d.createElement("td");
celda1.textContent = "Profesor: Fabrizio Carlassara";
fila1.appendChild(celda1);

let celda2 = d.createElement("td");
celda2.textContent = "Alumno: Javier Gelberg";
fila2.appendChild(celda2);

let celda3 = d.createElement("td");
celda3.textContent = "Comisión: DWN2CV";
fila3.appendChild(celda3);

let celda4 = d.createElement("td");
celda4.textContent = "TP Final - Programación I - 2023 - ";
fila4.appendChild(celda4);

// Agregar las filas a la tabla
tabla.appendChild(fila1);
tabla.appendChild(fila2);
tabla.appendChild(fila3);
tabla.appendChild(fila4);

// Agregar la tabla al footer
footer.appendChild(tabla);









