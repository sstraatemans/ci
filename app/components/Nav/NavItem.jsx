import React from 'react';
const { object, string } = React.PropTypes;
import {Link} from 'react-router';

const NavItem = React.createClass({
  propTypes: {
    link: string.isRequired,
    title: string.isRequired
  },

  render () {
    return (
      <li role="menuitem">
        <Link to={this.props.link }>{this.props.title}</Link>
      </li>
    );
  }
});

export default NavItem;
