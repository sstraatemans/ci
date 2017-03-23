import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {

    axios.get('http://localhost:3000/auth',
      this.state
    ).then((d) => {
      console.log(d);
    });

    e.preventDefault();
  }

  handleChange(e){
    console.log(this);
    let name = e.target.name;
    let value = e.target.value;


    this.setState({[name]: value});
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">
            username
            <input type="text" name="username" value={this.state.username} id="username" onChange={this.handleChange} />
          </label>
          <label htmlFor="password" value={this.state.password} id="password" onChange={this.handleChange}>
            password
            <input type="password" name="password"/>
          </label>
          <input type="submit" value="login" />
        </form>
      </div>
    );
  }
};


export default Login;
