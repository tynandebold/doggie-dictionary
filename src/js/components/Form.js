import React from 'react';
import Dropdown from './Dropdown';

export default function Form(props) {
  return (
    <form className="form">
      <span className="smalltext">Choose a doggo:</span>
      <div className="form__select-wrapper">
        <Dropdown showDog={props.showDog}/>
      </div>
    </form>
  )
}