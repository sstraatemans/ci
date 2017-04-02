import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout () {
    this.props.logoutHandler();
  }

  render () {
    if(this.props.user){
      return (
        <div>
          {this.props.user.username}
          <button onClick={this.handleLogout}>Log out</button>
        </div>
      );
    }
    return (
      <div>
      </div>
    );
  }
};


export default Logout;
