import './scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

// import Dog from './js/Dog';
import Shuffle from './js/Shuffle';
import showDog from './js/showDog';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      loaded: false
    };

    this.setupData = this.setupData.bind(this);
  }

  componentDidMount() {
    this.setupData();
  }

  async setupData() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const data = await getAllData(url);
    const dogs = cleanData(data.message);

    this.setState({dogs: dogs, loaded: true});
  }

  render() {
    console.log(this.state.dogs);

    const optionItems = this.state.dogs.map(dogName => {
      <option value={dogName} key={dogName}>{dogName}</option>;
    }).join('');

    return (
      <select className="dropdown">{ optionItems }</select>
    );
  }
}

class Image extends React.Component {
  render() {
    return (
      <div className="dog-image"></div>
    );
  }
}

// <select className="dropdown"></select>
class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <span className="smalltext">Choose a doggo:</span>
        <div className="form__select-wrapper">
          <Dropdown />
        </div>
      </form>
    );
  }
}

function Header() {
  return <h1 className="header__name">Doggie Dictionary</h1>;
}

function LeftLayout() {
  return (
    <section>
      <Header />
      <Form />
    </section>
  );
}

function RightLayout() {
  return (
    <section>
      <div className="display-wrapper">
        <Image />
        <Shuffle />
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <LeftLayout />
      <RightLayout />
    </main>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

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
}

function initRandomDog(dogs) {
  const randomNum = getRandomInt(0, dogs.length);
  showDog(dogs[randomNum]);

  $dropdown.value = `${dogs[randomNum]}`;
}

function generateDropdownMarkup(dogs) {
  const html = dogs.map(dogName => {
    return `<option value="${dogName}">${dogName}</option>`;
  }).join('');

  return html;
}

function cleanData(data) {
  const dogs = [];
  for (const dog in data) {
    if (data[dog].length) {
      data[dog].forEach(type => {
        let typeEdit = type.charAt(0).toLowerCase() + type.substr(1);
        let dogEdit = dog.charAt(0).toLowerCase() + dog.substr(1);
        dogs.push(`${typeEdit} ${dogEdit}`)
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

// init();
