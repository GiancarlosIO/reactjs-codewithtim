var React = require('react');
var ReactDOM = require('react-dom');

var CounterComponent = require('./counterComponent');

var AppComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired
  },
  /*getDefaultProps: function(){
    return {
      name: 'Carlos'
    }
  },*/
  getInitialState: function(){
    return {
      name: this.props.name,
      location: this.props.location
    }
  },
  render: function(){
    return(
      <div>
        <input type="text" value={this.state.name} onChange={this.nameChange}/>
        <h1>I'm {this.state.name}</h1>
        <p>I live in {this.state.location}</p>
        <button onClick={this.resetName} >Reset name</button>
        <h1>CounterComponent - counter challenge</h1>
        <CounterComponent />
      </div>
    );
  },

  // custom functions
  nameChange: function(event){
    this.setState(
      {
        name: event.target.value
      }
    )
  },
  resetName: function () {
    this.setState({
      name: 'Giancarlos'
    })
  }
});

ReactDOM.render(<AppComponent name="Giancarlos" location="Ica" />, document.getElementById('todo-wrapper'));
