// Calcular la Edad del Boby

// 1 - Ingresar la cantidad de años humanos desde un input
// 2 - Tomar el valor del input al enviar el formulario (evento submit)
// 3 - Anular la funcionalidad por defecto del formulario
// 4 - Validar que el dato ingresado sea un número
// 5 - Si no es un número, devolvermos un mensaje de error en el elemento p
// 6 - Si es un número, hacer el calculo (con una función)
// 7 - Devolver el mensaje con la cantidad de años del 🐶 en el elemento p


let formulario = document.querySelector("#formulario");
let mensaje = document.querySelector("#mensaje");

function calcularEdadPerro(edad){
    return edad*7;
}

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let edad = parseInt(document.querySelector("#edad").value);

    if(isNaN(edad)){
        //return alert("Esto no es un numero");
        mensaje.innerHTML = `🐶 Ingrese un número válido!`;
    }
    else{
        //let edadPerruna = calcularEdadPerro(edad);
        mensaje.innerHTML = `Tu 🐶 tiene ${calcularEdadPerro(edad)} años!`;
        //let edadPerruna = edad*7;
        //mensaje.innerHTML = `Tu 🐶 tiene ${edadPerruna} años!`;
    }

    formulario.reset();
})