const list = document.querySelector('.table-group-divider')

document.addEventListener('DOMContentLoaded',listAPI)

async function listAPI() {
    const url = 'http://localhost:3004/customer'

    const response = await fetch(url);

    const data = await response.json();

    console.log(data)

    loadData(data)
}

function loadData(data){
    data.forEach(element => {
      const tr = document.createElement('tr');
      const link = document.createElement('a')
      link.href=`verCliente?id=${element.id}`
      const id = link.href;
      tr.classList.add('background-hover')
      
    tr.innerHTML =`
    <th scope="row">${element.id}</th>
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.address}</td>
    <td>${element.createAd} <a href="${id}"class="btn btn-primary">open</a></td>
     `;
     
    
      list.appendChild(tr)
    });
}

