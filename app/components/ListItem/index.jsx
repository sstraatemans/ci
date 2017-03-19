import React from 'react';
import {Link} from 'react-router';


const ListItem = React.createClass({

  render () {
    return (
      <li className="listitem">
        <Link to={this.props.imdbID}>{this.props.title}</Link>
      </li>
    );
  }
});

export default ListItem;
