const validation = () => {
    const user = "sebas@gmail.com"
    const password = "scz"
    let ingresado = false;

    return new Promise ((resolve, reject) => {
        if (usuario == user && contra == password) {
            resolve('Inicio sesion exitosamente')    
        }else{
       reject('usuario o contraseña erroneos')
        }
    })
    document.querySelector("#btnBuscar").addEventListener("click", () =>
  buscarCliente(document.getElementById("dato").value)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))    );
}