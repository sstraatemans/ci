import React from 'react';
import styles from './Nav.scss';
const { object, string } = React.PropTypes;
import {Link} from 'react-router';

const NavItem = React.createClass({
  propTypes: {
    link: string.isRequired,
    title: string.isRequired
  },

  render () {
    return (
      <li className={styles.menuItem} role="menuitem">
        <Link to={this.props.link }>{this.props.title}</Link>
      </li>
    );
  }
});

export default NavItem;
