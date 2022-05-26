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
            edit.elements[2].value = cliente.email;
            edit.elements[3].value = cliente.address;
            new Date().toISOString().split('T')[0] = cliente.createAd;
            // localStorage.getItem('name') = cliente.user;
        }
       })
    })

edit.addEventListener('submit',SaveClient)

function SaveClient(e){
    e.preventDefault()
    const inpunts = e.target.elements;
    const cliente = {
        name: inpunts[1].value,
        email: inpunts[2].value,
        address: inpunts[3].value,
        createAd: new Date().toISOString(),
        user: localStorage.getItem('name')
    }

    const url = `http://localhost:3004/customer/${identificador}`

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"PUT",
          body:JSON.stringify(cliente),
          headers: header
     }

   fetch(url,configuration).then(response => response.json())


    alert('Se edito el cliente','success')

    toclean()

}

function toclean(){
    edit.elements[0].value ='';
    edit.elements[1].value ='';
    edit.elements[2].value ='';
    edit.elements[3].value ='';

}



