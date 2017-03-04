import React from 'react';
import ReactDOM from 'react-dom';
import { PANEL_DEFAULT_HEIGHT } from './../../utils/constants';
import {ci} from './../../utils';
import styles from './Panel.scss';
import Panel from './Panel';



const Row = React.createClass({
  propTypes: {
    children: (props, propName, componentName) => {
      //checks that all the cildren of a Row are indeed Panel components.
      const prop = props[propName];

      let error = null;
      React.Children.forEach(prop, function (child) {
        if (child.type !== Panel) {
          error = new Error('`' + componentName + '` children should be of type `Panel`.');
        }
      });
      return error;
    }
  },


  getChildren () {
    return React.Children.map(this.props.children, (child, idx) => {
      if(child.props.hasOwnProperty("showMore")){
        return React.cloneElement(child, {
           ref: idx,
           openPanel: () => {
              let node = ReactDOM.findDOMNode(this.refs[idx]);
              let parent = node.parentNode;

              if(!ci(node).hasClass(styles.showAll)){
                //get all children, which will all be Panels
                //then get the max contentHeight
                let maxHeight = 0;
                parent.childNodes.forEach((child) => {
                  let innerDiv = child.querySelector("div");
                  if(maxHeight < innerDiv.offsetHeight){
                    maxHeight = innerDiv.offsetHeight;
                  }
                });

                parent.childNodes.forEach((child) => {
                  child.style.height = maxHeight + 30 + 'px';
                  ci(child).addClass(styles.showAll);
                });
              }else{
                parent.childNodes.forEach((child) => {
                  child.style.height = PANEL_DEFAULT_HEIGHT + 'px';
                  ci(child).removeClass(styles.showAll);
                });
              }




           }
         });
      }else{
        return child;
      }
    });
  },


  render () {
    return (
      <div className={styles.row}>
        {this.getChildren()}
      </div>
    );
  }
});


export default Row;
