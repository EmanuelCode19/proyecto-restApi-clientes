const newCliente = document.querySelector('#NewUser');

newCliente.addEventListener('submit',SaveClient)

function SaveClient(e){
    e.preventDefault()
    const inpunts = e.target.elements;

    console.log(inpunts)
    const cliente = {
        name: inpunts[0].value,
        email: inpunts[1].value,
        address: inpunts[2].value,
        createAd: new Date().toISOString(),
        user: localStorage.getItem('name')
    }

    const url = 'http://localhost:3004/customer'

    const header = {
        'Content-Type': 'application/json'
    }
     const configuration = {
          method:"POST",
          body:JSON.stringify(cliente),
          headers: header
     }

   fetch(url,configuration).then(response => response.json())


    alert('Se Guardo el cliente','success')

}





