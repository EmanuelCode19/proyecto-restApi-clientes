function getParam(param){
    const parametro = new URLSearchParams(location.search)
    return parametro.get(param)
    }
    
window.addEventListener("load" , e => {
    const id = getParam("id")
    
    const url = `http://localhost:3004/customer/${id}`
    
    fetch(url).then(response => response.json()).then(cliente => {
    
    const detalles = document.querySelector('#detail-clientes');
    
    const div = document.createElement('div');

    div.innerHTML =`
    <p class="color-black cliente-info"> <span>Nombre:</span>  ${cliente.name}</p>
    <p class="color-black cliente-info"><span>Email:</span>  ${cliente.email}</p>
    <p class="color-black cliente-info"><span>Direccion:</span>  ${cliente.address}</p>
    <p class="color-black cliente-info"><span>Fecha de Creacion:</span>${new Date(cliente.createAd).toISOString().split('T')[0]}</p>
    <p class="color-black cliente-info"><span>Creado Por:</span>  ${cliente.user}</p>

     `;

     console.log(cliente)

    detalles.appendChild(div)
    
    
       })
    })