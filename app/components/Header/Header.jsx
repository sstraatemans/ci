import React from 'react';
import styles from './Header.scss';
import { FormattedMessage } from 'react-intl';
import LanguageSwitcher from './../LanguageSwitcher/LanguageSwitcher';

const Header = React.createClass({
  componentWillMount () {
    console.log('will mount');
  },
  render () {
    return (
      <header className={styles.header}>
        <FormattedMessage
          id='Tooltip.fees'
          defaultMessage='Click here to understand how we calculate fees.'
        />
        <LanguageSwitcher></LanguageSwitcher>
      </header>
    );
  }
});

export default Header;
