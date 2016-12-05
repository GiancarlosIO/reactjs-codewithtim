import React from 'react';

class CounterEs6ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <button onClick={this.props.handlerClick}>{this.props.text} {this.props.number}</button>
    );
  }
}

export default CounterEs6ButtonComponent;
