const root = document.getElementById("root");
const code = document.getElementById("code");
const codeD = document.getElementById("codeD");
const pruebaCode = document.getElementById("pruebaCode");
const pruebaDecode = document.getElementById("pruebaDecode");
const returnCode = document.getElementById("returnCode");
const returnDecode = document.getElementById("returnDecode");
const ubxEscrito = document.getElementById("ubxEscrito");
const ubyEscrito = document.getElementById("ubyEscrito");
/*Primero he declarado las CONST, utilizando los mismos IDs
los llamo, desde el DOCUMENT atraves de getElement*/


pruebaCode.addEventListener("click", () => {
  root.classList.add('hideElement')
  code.classList.remove('hideElement')
  const ubicacion = document.getElementById("ubicacion").value;
  //console.log(ubicacion)
  const offset = parseInt(document.getElementById("offset").value);
  //console.log(offset)
  const ubxx = window.cipher.encode(offset, ubicacion);
  ubxEscrito.innerHTML = ubxx
/*Atraves de pruebaCode (que es un botón), le agrego un EVENT
que al dar click haga la función de "esconder" la HOME y mostrar CODE,
definida anteriormente en CSS.
Dentro, agrego una nueva CONST "ubicación" donde lo que más importa es
capturar su valor, el cual se va a cifrar.
el OFFSET, indica el # de caracteres a moverse; el cual también debe
capturarse para utilizarse posteriormente.
la última CONST, ayuda a "llamar" desde el CIPHER.JS el objeto "ENCODE"
con los parametros offset y "ubicación"*/
})

pruebaDecode.addEventListener("click", () => {
  root.classList.add('hideElement')
  codeD.classList.remove('hideElement')
  const ubicacionD = document.getElementById("ubicacion").value;
  //console.log(ubicacionD)
  const offsetD = parseInt(document.getElementById("offset").value);
  //console.log(offsetD)
  const ubyy = window.cipher.decode(offsetD, ubicacionD);
  ubyEscrito.innerHTML = ubyy;
/* En pruebaDecode, al igual que arriba agrego el evento click,
que al hacerlo da la capacidad de esconder (la HOME) y mostrar(codeD).
con la CONST "ubicaciónD", se captura (con .value) el valor del string.
offsetD, igual captura el valor, y lo regresa como entero con parseInt.
la constante UBYY llamada a la función CIPHER.JS*/
})

returnCode.addEventListener("click", () => {
  location.reload();
  code.classList.add('hideElement')
  root.classList.remove('hideElement')
/*Al botón returnCode, se le asigna el Evento que al clickear
limpia el formulario al recargar.
A su vez agrega y quita la función de "esconder" de la página
CODE y HOME, respectivamente. Lo mismo hace con el botón
returnDecode abajo*/
})

returnDecode.addEventListener("click", () => {
  location.reload();
  codeD.classList.add('hideElement')
  root.classList.remove('hideElement')
})
//...