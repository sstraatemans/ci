import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData } from 'react-intl';
import localeData from './../../translations/translations.json';
import en from 'react-intl/locale-data/en';
import nl from 'react-intl/locale-data/nl';

import { setLocale } from './../../store/actions/localeActions';
addLocaleData([...en, ...nl]);

const LanguageSwitcher = React.createClass({
  handleChange (e) {
    let locale = e.target.value;
    const messages = localeData[locale];
    this.props.dispatch(setLocale(locale, messages));
  },

  render () {
    return (
      <select name="switcher" onChange={ this.handleChange } value={this.props.locale}>
        <option value="en">English</option>
        <option value="nl">Nederlands</option>
      </select>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    locale: state.localeReducer.locale,
    messages: state.localeReducer.messages
  };
};


export default connect(mapStateToProps)(LanguageSwitcher);
