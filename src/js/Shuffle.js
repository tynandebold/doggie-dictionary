import React from 'react';
import showDog from './showDog';

class Shuffle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      dropdown: document.querySelector('.dropdown')
    });
  }

  handleClick() {
    showDog(this.state.dropdown.value);
  }

  render() {
    return (
      <button className="btn" onClick={ this.handleClick }>Shuffle</button>
    );
  }
}

export default Shuffle;
