import React from 'react';
const { array } = React.PropTypes;
import { connect } from 'react-redux';
import { FetchShows } from './../../store/actions';
import AutoSuggest from './../../components/AutoSuggest';

const Autosuggest = React.createClass({


  componentDidMount () {

  },

  render (){
    return (
      <div>
        <AutoSuggest />
      </div>
    );
  }
});

// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = ({ showsReducer }) => {
  console.log(showsReducer);
  return {
 shows: showsReducer.shows
};
};

// connect method from react-router connects the component with redux store
export default connect(
 mapStateToProps)(Autosuggest);
