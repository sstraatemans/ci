import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const Twitter = React.createClass({
  getInitialState () {
    return {
      "tweets": []
    };
  },

  handleMessage (e) {
    this.setState({'message': e.target.value});
  },
  handleSubmit (e) {
    this.socket.send(this.state.message);

  },
  componentWillMount () {
    let _this = this;

    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.onopen = function(event) {
      console.log('connected');
    };
    this.socket.onerror = function(error) {
      console.error('WebSocket Error: ' + error);
    };

    this.socket.onmessage = function(event) {
      let tweets = [JSON.parse(event.data), ..._this.state.tweets];
      _this.setState({"tweets": tweets});
      console.log('receive',tweets);

    };
  },
  render () {
    return (
      <div className='landing'>
        landing<br/>
        <Link to="/news/search">
          search
        </Link>
        <FormattedMessage
          id='Tooltip.fees'
          defaultMessage='Click here to understand how we calculate fees.'
        />
        <input type="text" id="message" onChange={this.handleMessage} />
        <button onClick={this.handleSubmit}>send</button>

        <h2>Tweets</h2>
        {this.state.tweets.map(
          (tweet) =>
              <div>
                {tweet.text}
              </div>
        )}


      </div>
    );
  }
});


export default Twitter;
