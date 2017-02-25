import React from 'react';
import ReactDOM from 'react-dom';
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


  content () {
    return React.Children.map(this.props.children, (child, idx) => {
      if(child.props.hasOwnProperty("showMore")){
        return React.cloneElement(child, {
           ref: idx,
           openPanel: () => {
              console.log(child);
              console.log(idx);
              console.log(this.refs[idx]);
              var node = ReactDOM.findDOMNode(this.refs[idx]);
              node.style = "height: 400px;";
              console.log(node.parentNode);
           }
         });
      }else{
        return child;
      }
    });
  },


  render () {
    return (
      <div>
        {this.content()}
      </div>
    );
  }
});


export default Row;
