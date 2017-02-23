import * as constants from './../../utils/constants';
import styles from './Header.scss';

/**
 * Update the elements shown on the menuBar or in the showMore option
 */
export let truncateNav = (items, nav) => {
  let maxWidth = nav.offsetWidth - constants.MORE_BUTTON_WIDTH;
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
    let menu = createMoreMenu(navElms);
    nav.append(menu);
  }
};

/**
 * if there are leftover navItems, create a more menu and append at the end of the nav
 */
export let createMoreMenu = (items) => {
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
};


/**
 * loop through all elements to get and set the width
 */
export let getWidthElms = (items) => {
  let navElms = [];

  while(items.length){
    let item = items.shift();
    navElms.push({
      width: item.clientWidth,
      el: item
    });
  }

  return navElms;
};
