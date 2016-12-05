var React = require('react');
var ReactDOM = require('react-dom');

var CounterComponent = require('./counterComponent');
var LikesComponent = require('./likesComponent');
import Es6Component from './es6Component';
import CounterEs6Component from './counterEs6Component';

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
        <hr />
        <h1>CounterComponent - counter challenge</h1>
        <CounterComponent />
        <hr />
        <h1>LikesComponent - likes </h1>
        <div id="likes-component">
          <LikesComponent />
        </div>
        <hr />
        <h1>React with es6</h1>
        <Es6Component />
        <hr/>
        <h1>CounterComponent refactor with es6</h1>
        <CounterEs6Component />
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
