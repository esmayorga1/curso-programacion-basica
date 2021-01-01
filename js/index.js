var boton = document.getElementById('bt');
boton.addEventListener('click', mensaje);


function mensaje(){
    var formulario1 = document.getElementById('formulario1');
    var datoFormulario1 = parseFloat (formulario1.value);

    alert('El valor del formulario es ' + datoFormulario1);
}