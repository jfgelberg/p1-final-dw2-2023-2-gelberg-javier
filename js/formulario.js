function abrirFormularioComprar() {
  
    const d = document;

        // Crear la pantalla modal
    let modalForm = document.createElement('div');
    modalForm.classList.add("mostrarFormularioComprar");
    modalForm.setAttribute('id', 'miModalComprar');
    modalForm.innerText = "Formulario de Compra";

    const fCerrar = document.createElement("a");
    fCerrar.setAttribute("href", "javascript:void(0)");
    fCerrar.innerText = "Cancelar Compra";
    fCerrar.classList.add("btn", "btn-outline-danger","mt-2");
    fCerrar.addEventListener('click', () => {
        let cerrar = document.querySelector("#miModalComprar");
        cerrar.remove();
    });

   
    
    // Crear el formulario
    const formulario = document.createElement("form");
    formulario.setAttribute("id", "formulario");
    formulario.classList.add('d-flex','flex-column','align-items-center','justify-content-start','w-100','gap-2');
    formulario.addEventListener("submit", handleSubmit);

    // Crear el campo: nombre
    const labelNombre = document.createElement("label");
    labelNombre.textContent = "Nombre:";
    const inputNombre = document.createElement("input");
    inputNombre.setAttribute("type", "text");
    inputNombre.setAttribute("name", "nombre");
    inputNombre.setAttribute("required", true);

    // Crear el campo: teléfono
    const labelTelefono = document.createElement("label");
    labelTelefono.textContent = "Teléfono:";
    const inputTelefono = document.createElement("input");
    inputTelefono.setAttribute("type", "tel");
    inputTelefono.setAttribute("name", "telefono");
    inputTelefono.setAttribute("required", true);

    // Crear el campo: email
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email:";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.setAttribute("required", true);

    // Crear el campo: dirección
    const labelDireccion = document.createElement("label");
    labelDireccion.textContent = "Dirección:";
    const inputDireccion = document.createElement("input");
    inputDireccion.setAttribute("type", "text");
    inputDireccion.setAttribute("name", "direccion");
    inputDireccion.setAttribute("required", true);

    // Crear el campo: fecha
    const labelFecha = document.createElement("label");
    labelFecha.textContent = "Fecha de entrega:";
    const inputFecha = document.createElement("input");
    inputFecha.setAttribute("type", "date");
    inputFecha.setAttribute("name", "fecha");
    inputFecha.setAttribute("required", true);

    // Crear el campo: pago con tarjeta de crédito
    const labelTarjetaCredito = document.createElement("label");
    labelTarjetaCredito.textContent = "Pago con tarjeta de crédito:";
    const inputTarjetaCredito = document.createElement("input");
    inputTarjetaCredito.setAttribute("type", "radio");
    inputTarjetaCredito.setAttribute("name", "pago");
    inputTarjetaCredito.setAttribute("value", "tarjeta_credito");

    // Crear el campo: pago con tarjeta de débito
    const labelTarjetaDebito = document.createElement("label");
    labelTarjetaDebito.textContent = "Pago con tarjeta de débito:";
    const inputTarjetaDebito = document.createElement("input");
    inputTarjetaDebito.setAttribute("type", "radio");
    inputTarjetaDebito.setAttribute("name", "pago");
    inputTarjetaDebito.setAttribute("value", "tarjeta_debito");

    // Crear el campo: pago en efectivo
    const labelEfectivo = document.createElement("label");
    labelEfectivo.textContent = "Pago en efectivo:";
    const inputEfectivo = document.createElement("input");
    inputEfectivo.setAttribute("type", "radio");
    inputEfectivo.setAttribute("name", "pago");
    inputEfectivo.setAttribute("value", "efectivo");

    // Crear el botón de Confirmar compra
    const submitButton = document.createElement("button");
    submitButton.classList.add("btn","btn-success");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Confirmar compra";

    // Agregar los campos al formulario

    
    formulario.appendChild(labelNombre);
    formulario.appendChild(inputNombre);
    formulario.appendChild(labelTelefono);
    formulario.appendChild(inputTelefono);
    formulario.appendChild(labelEmail);
    formulario.appendChild(inputEmail);
    formulario.appendChild(labelDireccion);
    formulario.appendChild(inputDireccion);
    formulario.appendChild(labelFecha);
    formulario.appendChild(inputFecha);
    formulario.appendChild(labelTarjetaCredito);
    formulario.appendChild(inputTarjetaCredito);
    formulario.appendChild(labelTarjetaDebito);
    formulario.appendChild(inputTarjetaDebito);
    formulario.appendChild(labelEfectivo);
    formulario.appendChild(inputEfectivo);
    formulario.appendChild(submitButton);



    // Agregar el formulario al documento  
    modalForm.append(formulario, fCerrar);
    d.querySelector("main").append(modalForm);
    

    // Función para manejar el envío del formulario
    function handleSubmit(event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = inputNombre.value;
        const telefono = inputTelefono.value;
        const email = inputEmail.value;
        const direccion = inputDireccion.value;
        const fecha = inputFecha.value;
        const formaPago = document.querySelector('input[name="pago"]:checked').value;

        // Muestra en pantalla el envío del formulario
        console.log("Nombre:", nombre);
        console.log("Teléfono:", telefono);
        console.log("Email:", email);
        console.log("Dirección:", direccion);
        console.log("Fecha de entrega:", fecha);
        console.log("Forma de pago:", formaPago);

        // Mostrar mensaje de éxito
        const mensajeExito = document.createElement("p");
        mensajeExito.textContent = "¡Su compra se realizó correctamente!";
        mensajeExito.classList.add("fs-2","text-center","bg-success", "p-3", "m-3", "text-light");
        document.querySelector('#miModalComprar').appendChild(mensajeExito);

        if(mensajeExito){
            setTimeout(() => {

                document.querySelector("#miModalComprar").remove();
        
            }, 5000);//5 segundos
        }
        

        // Restablecer el formulario
        formulario.reset();
    }



   



}