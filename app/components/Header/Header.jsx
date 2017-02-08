import React from 'react';
import styles from './Header.scss';
import LanguageSwitcher from './../LanguageSwitcher/LanguageSwitcher';

const Header = React.createClass({
  render () {
    return (
      <header className={styles.header}>
        header here.
        <LanguageSwitcher></LanguageSwitcher>
      </header>
    );
  }
});

export default Header;
