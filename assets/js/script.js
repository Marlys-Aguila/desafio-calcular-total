const precio = 850000;

// Se crean y guardan las variables con querySelector

// Variables en card
let cantidad = document.querySelector("#cantidad");
let color = document.querySelector("#color");
let botonCalcular = document.querySelector("#calculo");

// Variables en los resultados
let total = document.querySelector("#total");
let cantidadFinal = document.querySelector("#cantidad-final");
let colorFinal = document.querySelector("#color-final");

// --------------------

// Se agregan los eventos o el 'listener'
// En el método addEventListener:
//      Primero: el evento. 
//      Segundo: la funcionalidad que quiero ejecutar al dar click.
botonCalcular.addEventListener("click", function () {
    let valorTotal = cantidad.value * precio;

    // Se formatea el resultado para mostrar como valor moneda en peso chileno
    total.innerHTML = valorTotal.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
    });

    // Como se necesita acceder al valor, se agrega .value
    cantidadFinal.innerHTML = cantidad.value;
    colorFinal.style.backgroundColor = color.value;
});
