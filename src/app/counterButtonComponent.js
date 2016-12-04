var React = require('react');

/*var CounterButtonComponent = React.createClass({
  render: function () {
    return(
      <button onClick={this.props.handleUpCounter}>Add {this.props.number}</button>
    )
  }
});*/

// stateless functions
var CounterButtonComponent = function (props) {
  return(
    <button onClick={props.clickHandler}>{props.text}</button>
  )
}

module.exports = CounterButtonComponent;
