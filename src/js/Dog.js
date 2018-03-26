import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let dogs = this.props.state.dogs;

    // console.log(this.props.state);

    const optionItems = dogs.map(dogName => {
      <option value={dogName} key={dogName}>{dogName}</option>;
    }).join('');

    return (
      <select className="dropdown">{ optionItems }</select>
    );
  }
}

export default Dog;
