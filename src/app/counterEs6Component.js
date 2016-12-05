import React from 'react';

class CounterEs6Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        
      </div>
    )
  }
}

export default CounterEs6Component;
