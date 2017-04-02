import React from 'react';
const { object, string } = React.PropTypes;
import {styles} from './Layout.scss';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';


const Layout = React.createClass({
  propTypes: {
    messages: object,
    locale: string
  },


  render () {
    return (
      <div>
        <Header></Header>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
});


export default Layout;
