import './scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Shuffle from './js/components/Shuffle';
import Header from './js/components/Header';
import Image from './js/components/Image';
import Form from './js/components/Form';

import showDog from './js/showDog';

function App() {
  return (
    <main>
      <section>
        <Header />
        <Form showDog={ showDog }/>
      </section>
      <section>
        <div className="display-wrapper">
          <Image />
          <Shuffle showDog={ showDog }/>
        </div>
      </section>
    </main>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);