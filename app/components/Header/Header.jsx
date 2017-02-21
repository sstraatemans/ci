import React from 'react';
import styles from './Header.scss';
import { FormattedMessage } from 'react-intl';
import Nav from './../Nav/Nav';
import NavItem from './../Nav/NavItem';
import LanguageSwitcher from './../LanguageSwitcher/LanguageSwitcher';

const Header = React.createClass({
  getInitialState () {
    return {
      maxWidth: 0
    };
  },

  updateDimensions () {
    //let maxWidth = this.nav.offsetWidth;
    console.log(this.nav.props.children);
    let currentWidth = 0;

/*
    let items = this.nav.querySelectorAll('li[role=menuitem]');
    console.log(this.nav.offsetWidth);
    items.forEach((item) => {
      currentWidth += item.offsetWidth;
      if(currentWidth < maxWidth){
      }else{
        console.log('hide');

      }

      console.log(item.style);
    });
*/
  },
  componentDidMount () {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  },

  componentWillUnmount: function() {
      window.removeEventListener("resize", this.updateDimensions);
  },

  render () {
    return (
      <header className={styles.header}>
        <Nav ref={(nav) => { this.nav = nav; }}>
          <li class={styles.logo}>
            logo
          </li>
          <NavItem link="/" title="home" ref={(nav) => {this.nav = nav; }} />
          <NavItem link="/news/search" title="news" />
          <NavItem link="/organisations/search" title="organisations" />
          <NavItem link="/people/search" title="people" />
          <NavItem link="/reports/search" title="reports" />
          <NavItem link="/marketreports/search" title="marketreports" />
          <li>
            <LanguageSwitcher></LanguageSwitcher>
          </li>
        </Nav>
      </header>
    );
  }
});

export default Header;
