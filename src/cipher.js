window.cipher = {
  // ... 

  encode: (offset, ubicacion) => { //parametros que definen el objeto
    let newEncode = ""; //variable que va a capturar el resultado de la codificación
    offset = Number(offset); //se declara como un nùmero
    for (let i = 0; i < ubicacion.length; i++) { //se usa for como una funciòn dentro del objeto, donde el inicio es menor que el string y a eso se le agrega un incremento
      let originalAscii = ubicacion.charCodeAt(i); //se permite que originalAscii le devuelva al string un (charcodeat) un valor en el ìndice proporcionado
      if (originalAscii >= 65 && originalAscii <= 90) { //con la condiciòn de que originalAscii sea mayor o = 65 (letra A) y menor o = que 90 (letra Z)
        let capitalLetter = (originalAscii - 65 + offset) % 26 + 65; //capitalLetter define la operaciòn a realizar, ya que se le va a restar al rango el inicio (letra A (65)) y se le aumentarà el offset introducido
        let capitalReturn = String.fromCharCode(capitalLetter); //capitalReturn devuelve a capitalLetter un string y no un nùmero
        newEncode += capitalReturn;
      } else if (originalAscii >= 97 && originalAscii <= 122) { //se uso else if para el rango de caracteres especiales, incuidos nùmeros y el espacio
        let lowerLetter = (originalAscii - 97 + offset) % 26 + 97;
        let lowerReturn = String.fromCharCode(lowerLetter);
        newEncode += lowerReturn;
      } else {
        let characteres = String.fromCharCode(originalAscii);
        newEncode += characteres;
      }
    }
    return newEncode;
  },

  decode: (offsetD, ubicacionD) => {
    let newDecode = "";
    offsetD = Number(offsetD);
    for (let i = 0; i < ubicacionD.length; i++) {
      let originalAscii = ubicacionD.charCodeAt(i);
      if (originalAscii >= 65 && originalAscii <= 90) {
        let capitalLetter = (originalAscii + 65 - offsetD) % 26 + 65;
        let capitalReturn = String.fromCharCode(capitalLetter);
        newDecode += capitalReturn;
      } else if (originalAscii >= 97 && originalAscii <= 122) {
        let lowerLetter = (originalAscii - 122 - offsetD) % 26 + 122;
        let lowerReturn = String.fromCharCode(lowerLetter);
        newDecode += lowerReturn;
      } else {
        let characteres = String.fromCharCode(originalAscii);
        newDecode += characteres;
      }
    }
    return newDecode;
  }
}
