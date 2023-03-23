// modificaciones 
// 1. Se renombraron variables para mejorar la legibilidad del codigo.
// 2. Se Agrego "async" a la función `displayUser` ya que se esta utilizando "await" dentro de la función.
// 3. Se Cambio el 'querySelector' de 'name' a '#name' para seleccionar el elemento por su ID.
// 4. Se Cambiaron en 'textContent' para usar backticks en lugar de comillas simples.
// 5. Se Añadio `const data = await response.json();` para extraer los datos JSON de la respuesta.

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameElement = document.querySelector('#name');
const blogElement = document.querySelector('#blog');
const locationElement = document.querySelector('.location');

async function displayUser(username) {
  nameElement.textContent = 'cargando...';
  
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    
    nameElement.textContent = `${data.name}`;
    blogElement.textContent = `${data.blog}`;
    locationElement.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameElement.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski');
