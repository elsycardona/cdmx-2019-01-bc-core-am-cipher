const root= document.getElementById("root");
const code= document.getElementById("code");
const decode= document.getElementById("decode");
const pruebaCode= document.getElementById("pruebaCode");
const pruebaDecode= document.getElementById("pruebaDecode");
const returnCode= document.getElementById("returnCode")
const returnDecode= document.getElementById("returnDecode")
//const ubicacion= document.getElementById("ubicacion");
//const offset= 3;

pruebaCode.addEventListener("click",()=>{
  root.classList.add('hideElement')
  code.classList.remove('hideElement')
})

pruebaDecode.addEventListener("click",()=>{
  root.classList.add('hideElement')
  decode.classList.remove('hideElement')
})

returnCode.addEventListener("click",()=>{
  code.classList.add('hideElement')
  root.classList.remove('hideElement')
})

returnDecode.addEventListener("click",()=>{
  decode.classList.add('hideElement')
  root.classList.remove('hideElement')
})


//const ubicacion =
//ubicacion.value;
//console.log ("ubicacion");

//codificar.addEventListener("click",msj);
//Obteniendo el código ascii y convierte a mayusculas
//function msj (){
  //  let mensajeObtenido =mensaje.value;
   // let mayuscula= mensajeObtenido.toUpperCase();
    //let mayus=mayuscula.charCodeAt();

 //for(let 1=0; i<mayuscula.length; i++){
   //  let letraAscii= mayuscula.charCodeAt(i);
     //let formula= (letraAscii-65+offset)%26+65;
     //let resultado= String.fromCharCode(formula);
     //console.log(resultado);
 //}
//}
//}

