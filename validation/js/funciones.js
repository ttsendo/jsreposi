 //funcion tipo flecha
 const ValidarContacto =()=>{
    //Validar Campos Vacios
    let documento = document.querySelector('#documento')//querySelector Calcula todo el objeto segun su id
    let nombres = document.querySelector('#nombres')
    console.log(documento)
    //Realizamos las validaciones
    if(documento.value.length == 0){
        alert (' el campo documento Deben Ser Llenados')

    }else if (nombres.value.length == 0){
        alert('el campo nombre deben ser llenados')
    }
    else{
        ('datos enviados correctamente')
    }
}
//capturamos el objeto el cual se le dara click
const boton = document.querySelector('#btnEnviar')
//Escuchar eventos del boton
boton.addEventListener('click',ValidarContacto)