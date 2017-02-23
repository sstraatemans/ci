import React from 'react';
import styles from './../Header.scss';


const Nav = React.createClass({

  render (){
    return (
      <ul className={styles.menu} role="menubar">
        {this.props.children}
      </ul>
    );
  }
});

export default Nav;
