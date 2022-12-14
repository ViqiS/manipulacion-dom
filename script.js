const h1 = document.querySelector("h1"); 
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

btn.addEventListener('click', btnOnClick) /* Es un metodo (se debe iniciar), escucha cada vez que este evento ocurre, y ejecuta un codigo de js */ //el primer atributo es el nombre evento y el segundo es el codigo que quiero que se ejecute // NO se ponen los parentesis para llamar a la funcion
function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

//Si tengo un formulario
const form = document.querySelector('#form');
const pResult2 = document.querySelector('#resultForm')

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs = formulario1.value + formulario2.value;
    pResult2.innerText = "Resultado: " + sumaInputs;
}

