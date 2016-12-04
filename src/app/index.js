var React  = require('react');
var ReactDOM = require('react-dom');

// Create TodoComponent component
var TodoComponent = React.createClass({
  render: function(){
    return(
      <li>{this.props.hello}</li>
    )
  }
})

ReactDOM.render(<TodoComponent hello='Hello' />, document.getElementById('todo-wrapper'))
