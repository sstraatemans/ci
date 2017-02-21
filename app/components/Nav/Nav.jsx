import React from 'react';
import styles from './Nav.scss';


const Nav = React.createClass({

  render (){
    return (
      <ul role="menubar">
        {this.props.children}
      </ul>
    );
  }
});

export default Nav;
