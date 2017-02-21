import React from 'react';
const { object, string } = React.PropTypes;
import { connect } from 'react-redux';
import {styles} from './Layout.scss';

import { IntlProvider, addLocaleData } from 'react-intl';
import localeData from './../../translations/translations.json';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';
import { setLocale } from './../../store/actions/localeActions';
addLocaleData([...en, ...nl]);

import Header from './../Header/Header';
import Footer from './../Footer/Footer';


if (global) {
  global.System = { import () {} };
}

const Layout = React.createClass({
  propTypes: {
    messages: object,
    locale: string
  },

  componentWillMount () {
    const messages = localeData[this.props.locale];
    this.props.dispatch(setLocale(this.props.locale, messages));
  },

  render () {
    return (
        <IntlProvider locale={this.props.locale} messages={this.props.messages}>
          <div>
            <Header></Header>
            {this.props.children}
            <Footer></Footer>
          </div>
        </IntlProvider>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    locale: state.localeReducer.locale,
    messages: state.localeReducer.messages
  };
};


export default connect(mapStateToProps)(Layout);
