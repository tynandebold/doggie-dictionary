import React from 'react';
import Dropdown from './Dropdown';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="form">
        <span className="smalltext">Choose a doggo:</span>
        <div className="form__select-wrapper">
          <Dropdown showDog={ this.props.showDog }/>
        </div>
      </form>
    );
  }
}