import React from 'react';
import ReactDOM from 'react-dom';
const { func, string } = React.PropTypes;
import { connect } from 'react-redux';
import styles from './Header.scss';
import * as util from './util';
import {ci} from './../../utils';
import {Nav,NavItem} from './Nav';
import LogoutWrapper from './../Logout/LogoutWrapper';


const Header = React.createClass({
  propTypes: {
  },


  getInitialState: function(){
    return {
      navItems: [
        {title: "option 1", link: "/"},
        {title: "news", link: "/news"},
        {title: "twitter", link: "/twitter"},
        {title: "tabs", link: "/tabs"},
        {title: "saga", link: "/saga"},
        {title: "autosuggest", link: "/autosuggest"},
        {title: "option 11", link: "/people"}
      ]
    };
  },

  truncateListener () {
    let nav = ReactDOM.findDOMNode(this.nav);
    let items = [].slice.call(nav.querySelectorAll("li"));
    let navElms = util.getWidthElms(items);

    let resizeTimer;
    let _timer = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function(){

        util.truncateNav(navElms, nav);
      }, 250);
    };

    util.truncateNav(navElms, nav);

    return () => {
      _timer();
    };
  },

  componentDidMount () {
    this.resizeListener = this.truncateListener();
    ci(window).resize(this.resizeListener);
  },

  componentWillUnmount: function() {
    ci(window).off('resize', this.resizeListener);
  },

  render () {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          logo
        </div>
        <LogoutWrapper />
        <Nav ref={(nav) => {this.nav = nav;}}>
          {this.state.navItems.map((item) => {
            return (
              <NavItem key={item.title} title={item.title} link={item.link} />
            );
          })}
        </Nav>
      </header>
    );
  }
});

export default Header;
