var React = require('react');

var CounterButtonComponent = React.createClass({
  render: function () {
    return(
      <button onClick={this.props.handleUpCounter}>Add {this.props.number}</button>
    )
  }
});

module.exports = CounterButtonComponent;
