import React from 'react';
const { array, string } = React.PropTypes;
import { connect } from 'react-redux';
import styles from './Header.scss';
import * as util from './util';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import {Nav,NavItem} from './Nav';
import LanguageSwitcher from './../LanguageSwitcher/LanguageSwitcher';
import localeData from './../../translations/translations.json';
const messages = localeData;


const Header = React.createClass({
  propTypes: {
    intl: intlShape.isRequired
  },


  getInitialState: function(){
    return {
      navItems: [
        {title: "option 1", link: "/"},
        {title: "option 2", link: "/news"},
        {title: "option 3", link: "/organisation"},
        {title: "option 4", link: "/organisation"},
        {title: "option 5", link: "/organisation"},
        {title: "option 6", link: "/organisation"},
        {title: "option 7", link: "/organisation"},
        {title: "option 11", link: "/people"}
      ]
    };
  },


  componentDidMount () {
    let nav = React.findDOMNode(this.nav);
    let items = [].slice.call(nav.querySelectorAll("li"));
    let navElms = util.getWidthElms(items);

    window.addEventListener("resize", () => {
      util.truncateNav(navElms, nav);
    });
    util.truncateNav(navElms, nav);

  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", util.truncateNav);
  },

  render () {
    return (
      <header className={styles.header}>
        <div class={styles.logo}>
          logo
        </div>
        <Nav ref={(nav) => {this.nav = nav;}}>
          {this.state.navItems.map((item) => {
            return (
              <NavItem title={item.title} link={item.link} />
            );
          })}
        </Nav>
        <li class={styles.language}>
          <LanguageSwitcher></LanguageSwitcher>
        </li>
      </header>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    messages: state.localeReducer.messages
  };
};


export default connect(mapStateToProps)(injectIntl(Header));
