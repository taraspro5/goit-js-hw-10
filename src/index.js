import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const elements = {
  selector: document.querySelector('.breed-select'),
  div: document.querySelector('.cat-info'),
  textLoader: document.querySelector('.loader'),
  textError: document.querySelector('.error'),
};

elements.selector.addEventListener('change', handlerChange);
elements.selector.hidden = true;
elements.textError.hidden = true;

fetchBreeds()
  .then(data => {
    elements.selector.insertAdjacentHTML('beforeend', createOption(data));
    elements.textLoader.hidden = true;
    elements.selector.hidden = false;
  })
  .catch(err => {
    elements.textLoader.hidden = true;
    elements.textError.hidden = false;
  });

function handlerChange(evt) {
  console.log(evt.currentTarget.value);
  fetchCatByBreed(evt.currentTarget.value)
    .then(data => {
      console.log('data', data);
      elements.div.hidden = false;
      elements.textLoader.hidden = true;
      elements.div.innerHTML = createCat(data);
    })
    .catch(err => {
      elements.textLoader.hidden = true;
      elements.textError.hidden = false;
    });
  elements.div.hidden = true;
  elements.textLoader.hidden = false;
}

function createOption(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createCat(arr) {
  const { url } = arr[0];
  const { name, description, temperament } = arr[0].breeds[0];

  return [
    `      
  <img src="${url}" alt="${name}" width = 300 loading="lazy">
  <h2>${name}</h2>
  <p>${description}</p>
  <p><b>Temperament:</b> ${temperament}</p>
  `,
  ];
}
