const root= document.getElementById("root");
const code= document.getElementById("code");
const decode= document.getElementById("decode");
const pruebaCode= document.getElementById("pruebaCode");
const pruebaPagdecode= document.getElementById("pruebaPagdecode");
const returnCode= document.getElementById("returnCode")
const returnPagdecode= document.getElementById("returnPagdecode")
//const offset= 33;

pruebaCode.addEventListener("click",()=>{
  root.classList.add('hideElement')
  code.classList.remove('hideElement')
  const ubicacion= document.getElementById("ubicacion").value;
  console.log(ubicacion)
  const offset=parseInt(document.getElementById("offset").value);
  console.log(offset)
  const ubxx = window.cipher.encode(offset, ubicacion);
  ubicacion.innerHTML = ubxx;
})

pruebaPagdecode.addEventListener("click",()=>{
  root.classList.add('hideElement')
  pagdecode.classList.remove('hideElement')
  const ubicacion= document.getElementById("ubicacion").value;
  console.log(ubicacion)
  const offset=parseInt(document.getElementById("offset").value);
  console.log(offset)
  const ubyy = window.cipher.decoding(offset, ubicacion);
  ubicacion.innerHTML = ubyy;
})

returnCode.addEventListener("click",()=>{
  code.classList.add('hideElement')
  root.classList.remove('hideElement')
})

returnDecode.addEventListener("click",()=>{
  pagdecode.classList.add('hideElement')
  root.classList.remove('hideElement')
})
//COMENTARIO


//function codificar (){
  //var caracteres = [];
  //valor = ubicacion.value;
  //for (var i=0; i<valor.length; i++){
    //caracteres[i] = valor.charAt(i).charCodeAt(0);
    //ascii const = i => i.charCodeAt (0);
  //}
    //code.innerHTML = caracteres.toString();
//}


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

