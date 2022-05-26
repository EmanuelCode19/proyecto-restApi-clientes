const list = document.querySelector('.table-group-divider')

document.addEventListener('DOMContentLoaded',listAPI)

async function listAPI() {
    const url = 'http://localhost:3004/customer'

    const response = await fetch(url);

    const data = await response.json();

    loadData(data)
}

function loadData(data){
    data.forEach(element => {
      const tr = document.createElement('tr');
      const link = document.createElement('a')
      link.href=`verCliente?id=${element.id}`
       link.classList.add('btn','btn-primary')
       link.textContent = 'Detalles'
      const linkUpdate = document.createElement('a')
      linkUpdate.classList.add('btn','btn-warning')
      linkUpdate.href=`editarCliente?id=${element.id}`
      linkUpdate.textContent="Actualizar"
      const buton = document.createElement('button')
      buton.classList.add('btn','btn-danger')
      buton.textContent = 'borrar'
      eventBorrar(buton,element)
      tr.classList.add('background-hover')
    tr.innerHTML =`
    <th scope="row">${element.id}</th>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.address}</td>
    <td>${new Date(element.createAd).toISOString().split('T')[0]}</td>
     `;
     const td = document.createElement('td');
     const td1 = document.createElement('td');
     const td2 = document.createElement('td');
     td.appendChild(link)
     td1.appendChild(linkUpdate)
     td2.appendChild(buton)
     tr.appendChild(td)
     tr.appendChild(td1)
     tr.appendChild(td2)
      list.appendChild(tr)

    });
}

function eventBorrar(buton,cliente){
      buton.addEventListener('click',() => {
        if(confirm(`Seguro Desea Borrar el cliente ${cliente.name}`)){
          const url = `http://localhost:3004/customer/${cliente.id}`

        const header = {
            'Content-Type': 'application/json'
        }
         const configuration = {
              method:"DELETE",
              body:JSON.stringify(cliente),
              headers: header
         }
    
       fetch(url,configuration).then(response => response.json()).then(() => window.location.reload())
        }
      })
}








   
   

