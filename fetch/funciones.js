function ListarDatos(){
    let resultado=''

    fetch('//PONER LA URL DE LA API A CONSUMIR')
    .then(response => response.json())
    .then(data => {

        for (let i of data){
            resultado = resultado + '<tr><td>'+i.nombre_municipio+'</td></tr>'
        }
        document.getElementById('contenido').innerHTML = resultado


    })
    
}