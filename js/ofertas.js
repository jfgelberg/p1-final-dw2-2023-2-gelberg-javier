
document.addEventListener('DOMContentLoaded', function () {
    abrirOfertas2();

    function abrirOfertas2() {

        // Array de textos aleatorios de venta de productos deportivos
        const randomOfertas2 = [
            "No te pierdas estas Súper Promos!!!",
            "Seguinos en Nuestras Redes",
            "Confiá en Nosotros!!!",
            "¡Suscribite y recibí $600 de regalo!",
            "Solo por hoy 2x1 en productos seleccionados",
            "20% de descuento con Banco Santander",
            "50% de descuento en la segunda unidad",
            "6 cuotas sin interés con Banco Nación"
        ];

        const randomIndex = Math.floor(Math.random() * randomOfertas2.length);

        const d = document;

        // Crear la pantalla modal

        let modalVerMas = d.createElement("div");
        modalVerMas.classList.add("mostrarMas","opacidad");
        modalVerMas.setAttribute("id", "modalVerMas");


        const aCerrar = document.createElement("a");
        aCerrar.setAttribute("href", "javascript:void(0)");
        aCerrar.innerText = "Salir";
        aCerrar.classList.add('btn', 'btn-danger', "mt-2", "w-50");
        aCerrar.addEventListener('click', () => {
            let cerrar = document.querySelector("#modalVerMas");
            cerrar.remove();
        });


        let tituloModal = d.createElement("h2");
        tituloModal.innerText = "OFERTAS DE LA SEMANA!!!";
        tituloModal.classList.add("tituloModalH2");

        let marcaModal = d.createElement("p");
        marcaModal.innerText = randomOfertas2[randomIndex];
        marcaModal.classList.add("fs-2", "fw-bold", "text-center");


        modalVerMas.append(tituloModal, marcaModal, aCerrar);
        d.querySelector("main").append(modalVerMas);


        setTimeout(() => {

            document.querySelector("#modalVerMas").remove();

        }, 10000);//10 segundos

    }

});
