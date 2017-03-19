import React from 'react';

const List = React.createClass({

  render () {
    return (
      <ul className="list">
        {this.props.children}
      </ul>
    );
  }
});

export default List;
