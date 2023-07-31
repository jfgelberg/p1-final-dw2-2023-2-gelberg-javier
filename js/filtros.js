
//Eventos----------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    mostrarCamisetas();

});

// Variables
 const equipo = document.querySelector('#equipo');
 const marca = document.querySelector('#marca');
 const color = document.querySelector('#color');

 //contenedor para los resultados
 const resultado = document.querySelector('#catalogo');

//generar un objeto con la busqueda
 const datosBusqueda = {
     equipo: '',
     marca: '',
     color: '',

 }

//Event listener para los select de busqueda-----------------
equipo.addEventListener('change', (e) => {
    datosBusqueda.equipo = e.target.value;

    filtrarCamiseta();

});
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarCamiseta();

});
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarCamiseta();
});



//funciones--------------------------------------------------------
function mostrarCamisetas(productos) {
    
   //limpiarHTML(catalogo); //elimina el html previo

    productos.forEach(producto => {

        let contenedorProductoF = d.createElement("div");
        contenedorProductoF.classList.add("contenedorProductoModal");
        contenedorProductoF.dataset.id = producto.id;

        const camisetaHTML = document.createElement('p');
        camisetaHTML.classList.add("imgProductoCardP");


        const imagenProductoF = d.createElement("img");
        imagenProductoF.setAttribute("src", producto.imagen);
        imagenProductoF.setAttribute("alt", producto.altImg);
        imagenProductoF.classList.add("imgProductoCard");

        camisetaHTML.textContent = `
            Camiseta de: ${producto.equipo} - 
            Marca: ${producto.marca} - 
            Color: ${producto.color} - 
            Precio: AR$${producto.precio}.-
        `;

        //insertar en el html
        // resultado.appendChild(contenedorProductoF);
        // resultado.appendChild(imagenProductoF);
        // resultado.appendChild(camisetaHTML);

    });

    //-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

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




    //--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*


}

//limpiar html
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//funcion que filtra en base a la busqueda
function filtrarCamiseta() {

    limpiarHTML();

    const resultado = productos.filter(filtrarMarca).filter(filtrarEquipo).filter(filtrarcolor);

    //console.log(resultado);
    //mostrarCamisetas(resultado);

    if (resultado.length) {
        mostrarCamisetas(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay Resultados para la búsqueda seleccionada'));
    document.querySelector('#catalogo').appendChild(noResultado);
}

function filtrarMarca(producto) {
    if (datosBusqueda.marca) {
        return producto.marca === datosBusqueda.marca;
    }
    return producto;
}

function filtrarEquipo(producto) {
    if (datosBusqueda.equipo) {
        return producto.equipo === datosBusqueda.equipo;
    }
    return producto;
}

function filtrarcolor(producto) {
    if (datosBusqueda.color) {
        return producto.color === datosBusqueda.color;
    }
    return producto;
}
