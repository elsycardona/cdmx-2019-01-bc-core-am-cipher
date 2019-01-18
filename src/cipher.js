window.cipher = {
  // ... 
  encode: (offset, ubicacion) => {

      let mayuscula = ubicacion.toUpperCase();
      let ubx = "";

      for (let i = 0; i < mayuscula.length; i++) {
        let letraAscii = mayuscula.charCodeAt(i);
        let formula = (letraAscii - 65 + offset) % 26 + 65;
        let resultado = String.fromCharCode(formula);
        //console.log(resultado);
        ubx += resultado;
      }
      return ubx;

      //console.log(ubx);
      //alert(ubx);

    }
    //PINCHE COMA
    ,


  decode: (offsetD, ubicacionD) => {

    let mayusculaD = ubicacionD.toUpperCase();
    let uby = "";

    for (let i = 0; i < mayusculaD.length; i++) {
      let letraAsciiD = mayusculaD.charCodeAt(i);
      let formulaD = (letraAsciiD + 65 - offsetD) % 26 + 65;
      let resultadoD = String.fromCharCode(formulaD);
      //console.log(resultadoD);
      uby += resultadoD;
    }
    return uby;
    //ubyEscrito.innerHTML = uby.toString();
  }
};
//JUEVES2
//sifuncionaba
