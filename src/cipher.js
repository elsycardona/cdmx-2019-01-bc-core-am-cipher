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

      /*Se ha descrito ENCODE como un objeto que realiza una función
      siendo OFFSET y UBICACIÓN sus argumentos.
      Se declara LET mayuscula para permitirse cambiar localmente,
      quien al string de UBICACION, genera las mayusculas con
      TOUPPERCASE ()
      A letraAscii se le aplica al string un charCodeAt(i) para que
      desde el inicio de la cadena transforme lo solicitado
      Para FORMULA, usé letraAscii, que al restarle 65 y sumarle el
      valor fijo declarado extraido de OFFSET, se le multiplicará el
      residuo de 26 (el número de caracteres del Alfabeto sin "ñ",
      que es como si se eliminara por default el núm de vueltas innecesarias
      al alfabeto)
      + 65 (siendo 65 el inicio de la posición "0" en el códigoAscii
      Para RESULTADO, se le agrega al string un FROMCHARCODE para pasar de
      código Ascii a letra alfabetica, como la conocemos*/

    }
    //  ¡¡¡  USAR ---- COMA ---- PARA OBJETOS  !!!
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
//...