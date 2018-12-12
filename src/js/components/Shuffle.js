import React from 'react';
import { observer, inject } from "mobx-react";

export default inject('chosenDog')(observer(function Shuffle(props) {
  function handleClick(e) {
    e.preventDefault();

    props.showDog(props.chosenDog.dog);
  }

  return (
    <button className="btn" onClick={handleClick}>Shuffle</button>
  )
}));
