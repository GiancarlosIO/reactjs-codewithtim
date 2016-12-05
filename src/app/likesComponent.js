var React = require('react');
var ReactDOM = require('react-dom');

var LikesComponent = React.createClass({
  getDefaultProps: function () {
    return {
      likes: 0
    }
  },
  getInitialState: function () {
    return {
      popular: false
    }
  },
  componentWillReceiveProps: function (nextProps) {
    console.log(nextProps);
    this.setState({
      popular: nextProps.likes >= 10
    })
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('should update?');
    console.log('Should update nextProps: ', nextProps);
    console.log('should update nextState: ', nextState);
    return nextProps.likes % 2 === 0;
  },
  render: function () {
    return(
      <div>
        <h3>{ this.state.popular ? "I'm popular" : null }</h3>
        <button onClick={this.updateLikes}>Likes {this.props.likes}</button>
      </div>
    );
  },
  componentDidUpdate: function (prevProps, prevState) {
    console.log('previews props: ', prevProps);
    console.log('previews states: ', prevState);
  },
  //custom function
  updateLikes: function () {
    ReactDOM.render(
      <LikesComponent likes={this.props.likes + 1} />,
      document.getElementById('likes-component')
    );
  }
});

module.exports = LikesComponent;
