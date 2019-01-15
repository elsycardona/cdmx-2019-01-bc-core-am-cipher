const root= documentElementById("root");
const final= documentElementById("final");
const offset= 3;

function esconder(){ 
root.classList.add('hideElement')
final.classList.remove('hideElement')

const ubicacion =
document.getElementById ('ubicacion').value;
console.log (ubicacion);

codificar.addEventListener("click",msj);
//Obteniendo el código ascii y convierte a mayusculas
function msj (){
    let mensajeObtenido =mensaje.value;
    let mayuscula= mensajeObtenido.toUpperCase();
    let mayus=mayuscula.charCodeAt();

 for(let 1=0; i<mayuscula.length; i++){
     let letraAscii= mayuscula.charCodeAt(i);
     let formula= (letraAscii-65+offset)%26+65;
     let resultado= String.fromCharCode(formula);
     console.log(resultado);
 }
}
}

