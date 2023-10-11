const validation = () => {
    const user = "sebas@gmail.com"
    const password = "scz"
    let usuario = document.getElementById('exampleInputEmail1').value
    let contra = document.getElementById('exampleInputPassword1').value
    let ingresado = false;

    return new Promise ((resolve, reject) => {
        if (usuario == user && contra == password) {
            ingresado = true
            resolve('Inicio sesion exitosamente')    
        }else{
       reject('usuario o contraseña erroneos')
        }
    })

}

document.querySelector("#btnLogin").addEventListener("click", () =>
  validation(document.getElementById("exampleInputEmail1").value)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error))    )