const buscarCliente = (dato) => {
  const documentos = [1010, 1011, 1020, 1030, 1957, 5550];
  const nombres =['Carmen', 'Ines', 'Juan', 'Daniela', 'Maria', 'Janeth']
  let encontrado = false;
  for (let i = 0; i < documentos.length; i++) {
    if (dato == documentos[i]) {
      encontrado = true;
      var nom =  nombres[i]
    }
  }
  //Estructura del objeto promesa
  return new Promise((resolve, reject) => {
    if (encontrado) {
      resolve("dato encontrado: "+dato+" "+nom);
    } else {
      reject("el dato no existe");
    }
  });
};
document.querySelector("#btnBuscar").addEventListener("click", () =>
  buscarCliente(document.getElementById("dato").value)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))
);
