import React from 'react';
import { observer, inject } from "mobx-react";

import cleanData from '../utils/cleanData';
import getAllData from '../getAllData';
import getRandomInt from '../utils/getRandomInt';

@inject('chosenDog')
@observer
export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dogs: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setupData()
      .then(dogs => {
        this.setState({ dogs: dogs });

        const randomNum = getRandomInt(0, this.state.dogs.length);
        this.props.showDog(this.state.dogs[randomNum]);
        this.setState({ value: this.state.dogs[randomNum] });

        this.props.chosenDog.dog = this.state.dogs[randomNum];
    });
  }

  async setupData() {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const data = await getAllData(url);
    return cleanData(data.message);
  }

  handleChange(event) {
    this.props.showDog(event.target.value);

    this.setState({ value: event.target.value });
    this.props.chosenDog.dog = event.target.value;
  }

  render() {
    const optionItems = this.state.dogs.map(dogName => {
      return <option value={dogName} key={dogName}>{dogName}</option>;
    });

    return (
      <select className="dropdown" value={this.state.value} onChange={this.handleChange}>{optionItems}</select>
    );
  }
}