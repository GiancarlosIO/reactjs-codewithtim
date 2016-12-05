import React from 'react';

import CounterEs6ButtonComponent from './counterEs6ButtonComponent';

class CounterEs6Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
  }

  increment(value) {
    let updateCounter = this.state.counter + value;
    this.setState({
      counter: updateCounter
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.counter}</span>
        <br/>
        <CounterEs6ButtonComponent number={1} text="Add" handlerClick={()=>this.increment(1)}/>
        <CounterEs6ButtonComponent number={5} text="Add" handlerClick={()=>this.increment(5)}/>
        <CounterEs6ButtonComponent number={10} text="Add" handlerClick={()=>this.increment(10)}/>
      </div>
    )
  }
}

export default CounterEs6Component;
