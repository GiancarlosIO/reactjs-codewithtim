import React from 'react';

class Es6Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: 21
    }
    this.click = this.click.bind(this);
  }
  click(value) {
    console.log(this);
    console.log(value);
  }
  render() {
    return (
      <div>
        <span>this is es6 and my name is {this.state.name} and my age is {this.state.age}</span>
        <br/>
        <button onClick={ ()=> this.click(20) }>click me</button>
      </div>
    );
  }
}

Es6Component.defaultProps = { name: 'giancarlos' }
Es6Component.propTypes = {
  name: React.PropTypes.string
}

export default Es6Component;
