const getParam = (param) => {
  const parametro = new URLSearchParams(location.search);
  return parametro.get(param);
};

window.addEventListener("load", async () => {
  const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

  const alert = (message, type) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} mt-5 alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };
  const id = getParam("id");

  const detalles = document.querySelector('#detail-clientes');

  const response = await fetch(`http://localhost:3004/customer/${id}`);

  const customer = await response.json();

  console.log(customer.name);

  const url = `http://localhost:3004/interacion`;
  const interaciones = await (await fetch(url)).json();
  console.log({ interaciones });
  const interacionesFiltered = interaciones.filter(
    (interacion) => interacion.costumer.name === customer.name
  );
  console.log({ interacionesFiltered });
  if (!interacionesFiltered.length) {
    alert("no se interactuo con el cliente", "danger");
  }

  const iteracionHTML= interacionesFiltered.reduce((acc,interacion) => acc + `
  <div class="mt-5"><p class="color-black cliente-info"> <span>Id:</span>  ${interacion.id}</p>
  <p class="color-black cliente-info"><span>De parte del Usuario:</span>  ${interacion.user.user}</p>
    <p class="color-black cliente-info"> <span> Para: </span>  ${interacion.costumer.name} </p>
    <p class="color-black cliente-info"> <span>Nota:</span>  ${interacion.note}</p>
    <p class="color-black cliente-info"><span>Fecha de la interacion:</span>${new Date(interacion.createAd).toISOString().split('T')[0]}</p>
  </div>`,'')

  detalles.innerHTML =  iteracionHTML;

});
