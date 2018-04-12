import React from 'react';

export default function Shuffle(props) {
  function handleClick(e) {
    e.preventDefault();

    props.showDog(window.AppState.chosenDog);
  }

  return (
    <button className="btn" onClick={handleClick}>Shuffle</button>
  )
}
