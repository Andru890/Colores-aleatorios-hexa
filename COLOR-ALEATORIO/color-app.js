// seleccion de elementos del DOM

const boton = document.querySelector("button")
const color = document.getElementById("color")

function generarColorHexa() {
    let digitos = "0123456789ABCDEF";
    let colorHex = "#";

    for(let i = 0 ; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random()* 16)
        colorHex += digitos[indiceAleatorio]
    }

    return colorHex;

}


boton.addEventListener("click",(f) => {
    let  colorAleatorio = generarColorHexa();
    // ACTULIZAR EL TEXTO
    color.textContent = colorAleatorio;
    // ACTULIZAR EL COLOR DE FONDO
    document.body.style.backgroundColor= colorAleatorio;
} )