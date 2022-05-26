const edit = document.querySelector('#editClient');
function getParam(param){
    const parametro = new URLSearchParams(location.search)
    return parametro.get(param)
    }
    
window.addEventListener("load" , e => {
    const id = getParam("id")
    
    const url = `http://localhost:3004/customer/${id}`
    
    fetch(url).then(response => response.json()).then(cliente => {
    
    
    if(cliente.id === undefined){
        alert('el id no existe','danger')
       
    }else{
        edit.elements[0].value = cliente.name;
        edit.elements[1].value = cliente.email;
        edit.elements[2].value = cliente.address;
        new Date().toISOString().split('T')[0] = cliente.createAd;
        localStorage.getItem('name') = cliente.user;
       
    }
       })
    })

edit.addEventListener('submit',SaveClient)

function SaveClient(e){
    e.preventDefault()
    const inpunts = e.target.elements;

    console.log(inpunts)
    const cliente = {
        id: getParam("id"),
        name: inpunts[0].value,
        email: inpunts[1].value,
        address: inpunts[2].value,
        createAd: new Date().toISOString(),
        user: localStorage.getItem('name')
    }

    const url = `http://localhost:3004/customer/${getParam("id")}`

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

}



