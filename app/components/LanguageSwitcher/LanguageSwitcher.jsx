import React from 'react';
import { connect } from 'react-redux';
import { setLocale } from './../../store/actions/localeActions';

const LanguageSwitcher = React.createClass({
  handleChange (e) {
    let locale = e.target.value;
    this.props.dispatch(setLocale(locale));
  },

  componentWillMount () {
    console.log(this.props.locale);
  },

  render () {
    return (
      <div>
        <select name="switcher" onChange={ this.handleChange }>
          <option value="en" selected={this.props.locale === 'en'}>English</option>
          <option value="nl" selected={this.props.locale === 'nl'}>Nederlands</option>
        </select>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    locale: state.localeReducer.locale
  };
};


export default connect(mapStateToProps)(LanguageSwitcher);
