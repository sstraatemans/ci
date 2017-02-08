import React from 'react';
import styles from './Header.scss';

const Header = React.createClass({
  render () {
    return (
      <header className={styles.header}>
        header here.
      </header>
    );
  }
});

export default Header;
