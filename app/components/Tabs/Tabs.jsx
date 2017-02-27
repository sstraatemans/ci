import React from 'react';
const { number } = React.PropTypes;
import TabList from './TabList';
import TabPanel from './TabPanel';
import styles from './Tabs.scss';

const Tabs = React.createClass({
  propTypes: {
    children: (props, propName, componentName) => {
      //checks that all the cildren of a Row are indeed Panel components.
      const prop = props[propName];

      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== TabList && child.type !== TabPanel) {
          error = new Error('`' + componentName + '` children should be of type `TabList` or `TabPanel`.');
        }
      });
      return error;
    },
    selectedTab: number
  },

  getInitialState() {
    return {
      selectedIndex: 0
    };
  },

  componentWillMount () {
    console.log(this.props.selectedTab);
    if(this.props.selectedTab){
      this.setState({selectedIndex: this.props.selectedTab});
    }
  },

  setSelected (index) {
    this.setState({
      selectedIndex: index
    });
  },

  /**
   * check that the given element is a tabItem
   */
  isTabItem (elm) {
    return elm.nodeName === 'LI' && elm.getAttribute('role') === 'tab';
  },
  /**
   * handles the clicks on the tabItems
   */
  handleClick (e) {
    e.preventDefault();
    let elm = e.target;
    if (!this.isTabItem(elm)) {
      return;
    }

    const index = [].slice.call(elm.parentNode.children).indexOf(elm);
    this.setSelected(index);
  },


  getChildren () {
    return React.Children.map(this.props.children, (child, idx) => {
      if(child.type === TabList){
        //Tabs
        return React.Children.map(child.props.children, (tab, idx) => {
          console.log(tab.props);
          let selected=false;
          if(idx === this.state.selectedIndex && !tab.props.selected){
            selected = true;
          }
          let node = React.cloneElement(tab, {
            selected
          });
          return node;
        });
      }
      return child;
    });

  },


  render () {
    return (
      <div className={styles.tabs}
        onClick={this.handleClick}
        >
        { this.getChildren() }
      </div>
    );
  }
});

export default Tabs;
