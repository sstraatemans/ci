import React from 'react';
const { array, string } = React.PropTypes;
import { connect } from 'react-redux';
import styles from './Header.scss';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import Nav from './../Nav/Nav';
import NavItem from './../Nav/NavItem';
import LanguageSwitcher from './../LanguageSwitcher/LanguageSwitcher';
import localeData from './../../translations/translations.json';
const messages = localeData;


var MORE_BUTTON_WIDTH = 160;

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

  /**
   * Update the elements shown on the menuBar or in the showMore option
   */
  updateDimensions (items, nav) {
    let maxWidth = nav.offsetWidth - MORE_BUTTON_WIDTH;
    let currentWidth = 0;
    let navElms = items.concat();
    nav.innerHTML = '';


    while(navElms.length){
      let item = navElms.shift();
      currentWidth += item.width;
      if(currentWidth < maxWidth){
        nav.append(item.el);
      }else{
        navElms.unshift(item);
        break;
      }
    }

    if(navElms.length){
      let menu = this.createMoreMenu(navElms);
      nav.append(menu);
    }

  },

  /**
   * if there are leftover navItems, create a more menu and append at the end of the nav
   */
  createMoreMenu (items) {
    var menu = document.createElement("li");
    var list = document.createElement("ul");
    list.className = styles.moreMenuList;
    menu.innerHTML = `<span>show more</span>`;
    menu.className = styles.moreMenu;
    while(items.length){
      let item = items.shift();
      let elm = item.el.cloneNode(true);
      elm.className = styles.moreMenuItem;
      list.append(elm);
    }

    menu.append(list);
    return menu;
  },

  /**
   * loop through all elements to get and set the width
   */
  getWidthElms (items) {
    let navElms = [];

    while(items.length){
      let item = items.shift();
      navElms.push({
        width: item.clientWidth,
        el: item
      });
    }

    return navElms;
  },


  componentDidMount () {
    let nav = React.findDOMNode(this.nav);
    let items = [].slice.call(nav.querySelectorAll("li"));
    let navElms = this.getWidthElms(items);

    window.addEventListener("resize", () => {
      this.updateDimensions(navElms, nav);
    });
    this.updateDimensions(navElms, nav);

  },

  componentWillUnmount: function() {
    window.removeEventListener("resize", this.updateDimensions);
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
