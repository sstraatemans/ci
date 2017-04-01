import React from 'react';
const { array } = React.PropTypes;
import { connect } from 'react-redux';
import { FetchShows } from './../../store/actions';
import List from './../../components/List';
import ListItem from './../../components/ListItem';

const Saga = React.createClass({


  componentDidMount () {
    this.props.dispatch(FetchShows());
  },

  render (){
    return (
      <div>
        <List data={this.props.shows}>
          { this.props.shows.map(
            (show) => {
              return (
                <ListItem {...show} key={show.imdbID} />);
            }
          )}
        </List>
      </div>
    );
  }
});



// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = ({ showsReducer }) => {
  return {
   shows: showsReducer.shows
  };
};

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(Saga);
