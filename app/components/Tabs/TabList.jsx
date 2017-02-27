import React from 'react';
import Tab from './Tab';
import styles from './Tabs.scss';

const TabList = React.createClass({
  propTypes: {
    children: (props, propName, componentName) => {
      //checks that all the cildren of a Row are indeed Panel components.
      const prop = props[propName];

      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== Tab) {
          error = new Error('`' + componentName + '` children should be of type `Tab`.');
        }
      });
      return error;
    }
  },

  render () {
    return (
      <ul className={styles.tabList} role="tablist">
        { this.props.children }
      </ul>
    );
  }
});

export default TabList;
