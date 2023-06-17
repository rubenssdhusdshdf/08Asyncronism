import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

const data = {
  title: "212",
  price: 212,
  description: "A description",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((data) => console.log(data));

// Ejemplo con Put

function putData(urlApi, dataUpdate) {
  const response = fetch(urlApi, {
    method: "PUT",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  });
  return response;
}

const dataUpdate = {
  title: "Se puede cambiar tambien otras caracteristicas",
  price: 10, // no es necesario colocar todas las características del objeto, solo las que se cambiarán
};

putData(`${API}/products/271`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
  .then((response) => response.json())
  .then((dataUpdate) => console.log(dataUpdate));

//Ejemplo con DELETE
