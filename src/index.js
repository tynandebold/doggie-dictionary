import './scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from "mobx";
import { Provider } from "mobx-react";

import Shuffle from './js/components/Shuffle';
import Header from './js/components/Header';
import Image from './js/components/Image';
import Form from './js/components/Form';

import showDog from './js/showDog';

const chosenDog = observable({
  dog: ''
});

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
  <Provider chosenDog={chosenDog}>
    <App />
  </Provider>,
  document.getElementById('root')
);