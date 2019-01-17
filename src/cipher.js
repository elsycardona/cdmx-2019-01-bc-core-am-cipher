window.cipher = {
  // ... 
  encode: (offset, ubicacion) => {
  
    let mayuscula= ubicacion.toUpperCase();
    let ubx= "";

 for(let i=0; i<mayuscula.length; i++){
   let letraAscii= mayuscula.charCodeAt(i);
   let formula= (letraAscii-65+offset)%26+65;
   let resultado= String.fromCharCode(formula);
     //console.log(resultado);
   ubx+= resultado;
    }
  //console.log(ubx);
  //alert(ubx);
  ubxEscrito.innerHTML = ubx.toString();
    }};
