import React from 'react';

const CounterEs6ButtonComponent = (props) => {
  return(
    <button onClick={props.handlerClick}>{props.text} {props.number}</button>
  );
}

CounterEs6ButtonComponent.propTypes = {
  text: React.PropTypes.string,
  number: React.PropTypes.number,
  handlerClick: React.PropTypes.func.isRequired
}

export default CounterEs6ButtonComponent;
