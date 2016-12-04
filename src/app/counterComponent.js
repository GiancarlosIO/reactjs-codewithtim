var React = require('react');

var CounterButtonComponent = require('./counterButtonComponent');

var CounterComponent = React.createClass({
  getInitialState: function () {
    return {
      counter: 0
    }
  },
  getDefaultProps: function () {
    return {
      number1: 1,
      number2: 5,
      number3: 10
    }
  },
  render: function () {
    return(
      <div>
        <h2>Count: {this.state.counter}</h2>
        <CounterButtonComponent handleUpCounter={this.upCounter.bind(this, 1)} number={this.props.number1}/>
        <CounterButtonComponent handleUpCounter={this.upCounter.bind(this, 5)} number={this.props.number2}/>
        <CounterButtonComponent handleUpCounter={this.upCounter.bind(this, 10)} number={this.props.number3}/>
        <button onClick={this.resetCounter}>Reset counter</button>
      </div>
    );
  },

  //custom function
  addOne: function () {
    let updateCounterState = this.state.counter + 1;
    this.setState({
      counter: updateCounterState
    });
  },
  addFive: function () {
    let updateCounterState = this.state.counter + 5;
    this.setState({
      counter: updateCounterState
    });
  },
  addTen: function () {
    let updateCounterState = this.state.counter + 10;
    this.setState({
      counter: updateCounterState
    })
  },
  resetCounter: function () {
    this.setState({
      counter: 0
    });
  },
  upCounter: function (value) {
    let updateCounterState = this.state.counter + value;
    this.setState({
      counter: updateCounterState
    });
  }

});

module.exports = CounterComponent;
