import React from 'react';
const { string, boolean } = React.PropTypes;
import styles from './Tabs.scss';

const Tab = React.createClass({
  props: {
    title: string.isRequired,
    selected: boolean
  },

  getDefaultProps () {
    return {
      selected: false
    };
  },

  getClasses (selected) {
    let classes = styles.tabItem;
    if(selected){
      classes += ' ' + styles.tabItemSelected;
    }
    return classes;
  },

  render () {
    console.log(this.props);
    let classes = this.getClasses(this.props.selected);
    return (
      <li className={classes} role="tab">
        {this.props.title}
      </li>
    );
  }
});

export default Tab;
