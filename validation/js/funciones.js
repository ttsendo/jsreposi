 //funcion tipo flecha
 const ValidarContacto =()=>{
    //Validar Campos Vacios
    let documento = document.querySelector('#documento')//querySelector Calcula todo el objeto segun su id y se manipula completamente.
    let nombres = document.querySelector('#nombres')
    console.log(documento)
    //Realizamos las validaciones
    if(documento.value.length == 0){
        //alert (' el campo documento Deben Ser Llenados')
        Swal.fire(
            'Debe de llenar los Campos',
            '',
            'error'
          )

    }else if (nombres.value.length == 0){
        //alert('el campo nombre deben ser llenados')
        Swal.fire(
            'Debe de llenar los Campos',
            '',
            'error'
          )
        
    }
    else{
        //('datos enviados correctamente')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tus datos fueron guardados',
            showConfirmButton: false,
            timer: 1500
          })
    }
}
//capturamos el objeto el cual se le dara click
const boton = document.querySelector('#btnEnviar')
//Escuchar eventos del boton
boton.addEventListener('click',ValidarContacto)