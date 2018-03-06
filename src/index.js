import './scss/index.scss';

const $dropdown = document.querySelector('.dropdown');

async function init() {
  const url = 'https://dog.ceo/api/breeds/list/all';
  const data = await getAllData(url);

  const dogs = cleanData(data.message);
  const html = generateDropdownMarkup(dogs);
  $dropdown.innerHTML = html;

  bindEvents();
  initRandomDog(dogs);
}

function bindEvents() {
  $dropdown.addEventListener('change', (e) => {
    showDog(e.target.value);
  });
  document.querySelector('.btn').addEventListener('click', showRandom);
}

function initRandomDog(dogs) {
  const randomNum = getRandomInt(0, dogs.length);
  showDog(dogs[randomNum]);

  $dropdown.value = `${dogs[randomNum]}`;
}

async function showDog(selected) {
  const dog = selected.split(' ');
  const imageUrl = await getOne(dog);

  // document.querySelector('.dog-image').src = imageUrl;
  document.querySelector('.dog-image').style.backgroundImage = `url(${imageUrl})`;
}

function generateDropdownMarkup(dogs) {
  const html = dogs.map(dogName => {
    // const trimmedNamed = dogName.trim()
    return `<option value="${dogName}">${dogName}</option>`;
  }).join('');

  return html;
}

async function getOne(dog) {
  let url;
  if (dog.length > 1) {
    url = `https://dog.ceo/api/breed/${dog[1]}/${dog[0]}/images/random`;
  } else {
    url = `https://dog.ceo/api/breed/${dog[0]}/${dog[0]}/images/random`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data.message;
}

function showRandom() {
  showDog($dropdown.value);
}

function cleanData(data) {
  const dogs = [];
  for (const dog in data) {
    if (data[dog].length) {
      data[dog].forEach(type => {
        dogs.push(`${type} ${dog} `)
      });
    } else {
      dogs.push(dog);
    }
  }

  return dogs.sort();
}

async function getAllData(url) {
  const response = await fetch(url);
  return await response.json();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

init();
