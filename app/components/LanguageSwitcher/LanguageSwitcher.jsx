import React from 'react';
import { connect } from 'react-redux';
import { setLocale } from './../../store/actions/localeActions';

const LanguageSwitcher = React.createClass({
  handleChange (e) {
    let locale = e.target.value;
    this.props.dispatch(setLocale(locale));
  },

  render () {
    return (
      <div>
        <select name="switcher" onChange={ this.handleChange } defaultValue={this.props.locale}>
          <option value="en">English</option>
          <option value="nl">Nederlands</option>
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
