const edit = document.querySelector('#updateCliente');
const inputId = document.querySelector('#id');
let identificador;

inputId.addEventListener('blur',() => {
    identificador = edit.elements[0].value;
})

inputId.addEventListener("blur" , e => {
    const id = identificador;
    
    const url = `http://localhost:3004/customer/${id}`
    
    fetch(url).then(response => response.json()).then(cliente => {

        if(cliente.id === undefined){
            alert('el id no existe','danger')
            toclean()
           
        }else{
            edit.elements[1].value = cliente.name;
        }
       })  
   

    })

edit.addEventListener('submit',interacionCliente)

async function interacionCliente(e){
    e.preventDefault()

   let datosUser;

    const urlCliente = `http://localhost:3004/customer/${identificador}`
          
    const responseCliente = await fetch(urlCliente)
          
    const dataCliente = await responseCliente.json()

    
           
    const urlUser = `http://localhost:3004/user`
    const responseUser = await fetch(urlUser);
          
    const dataUser = await responseUser.json() 
    
    console.log(dataUser)
          
    dataUser.forEach(element => {
    if(element.user === localStorage.getItem('name')){
            datosUser=element;
            console.log(element)
         }
    }); 

    console.log(datosUser)
   
          
   

    const inpunts = e.target.elements;
    const interacion = {
        name:inpunts[1].value,
        note: inpunts[2].value,
        createAd: new Date().toISOString(),
        user: datosUser,
        costumer: dataCliente,
    }

    console.log(interacion)

    const url = `http://localhost:3004/interacion`

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"POST",
          body:JSON.stringify(interacion),
          headers: header
     }

   fetch(url,configuration).then(response => response.json())


    alert('se interactuo con el cliente','success')

    toclean()

}

function toclean(){
    edit.elements[0].value ='';
    edit.elements[1].value ='';
    edit.elements[2].value ='';
}



