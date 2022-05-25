const barra = document.querySelector('.user')


document.addEventListener('DOMContentLoaded', () => {
    const usuario = localStorage.getItem('name')

    const divUser = document.createElement('div')

    const link = document.createElement('a');
    link.href=`login`;
    link.textContent=`cerrar session`
    link.classList.add('logout')

    divUser.classList.add('flex-end')


    divUser.innerHTML =`
    <p>${usuario} 🟢</p> 
    `;

    divUser.appendChild(link)

    barra.appendChild(divUser)


    const logout = document.querySelector('.logout')

    logout.addEventListener('click', () => {

        localStorage.removeItem('name')
    
    })

    if(usuario === null){
        divUser.innerHTML =`
    <p> usuario desconetado 🔴</p> 
    `;
    }
   
})



