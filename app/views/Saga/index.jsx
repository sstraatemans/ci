import React from 'react';
const { array } = React.PropTypes;
import { connect } from 'react-redux';
import { FetchShows } from './../../store/actions';

const Saga = React.createClass({


  componentDidMount () {
    this.props.dispatch(FetchShows());
  },

  render (){
    return (
      <div>
        <ul>
          { this.props.shows.map(
            (show) => {
              return (<li key={show.imdbID}>{show.title}</li>);
            }
          )}
        </ul>
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
 mapStateToProps)(Saga);
