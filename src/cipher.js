window.cipher = {
  // ... 

  encode: (offset, ubicacion) => {
    let newEncode = ""; //variable que va a capturar el resultado de la codificación
    offset = Number(offset);
    for (let i = 0; i < ubicacion.length; i++) {
      let originalAscii = ubicacion.charCodeAt(i);
      if (originalAscii >= 65 && originalAscii <= 90) {
        let capitalLetter = (originalAscii - 65 + offset) % 26 + 65;
        let capitalReturn = String.fromCharCode(capitalLetter);
        newEncode += capitalReturn;
      } else if (originalAscii >= 97 && originalAscii <= 122) {
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
