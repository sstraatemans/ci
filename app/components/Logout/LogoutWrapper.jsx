import React from 'react';
import { connect } from 'react-redux';
import { authUser, requestAuthorizedUserAction, authLogoutAction } from './../../store/actions';
import Logout from './../Logout';

class LogoutWrapper extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.init();
  }

  setLoadingState () {
    if(this.props.loading){
      return (
        <div>Loading</div>
      );
    }
  }

  render () {
    return (
      <div className='logout'>
        wrap
        <Logout user={this.props.user} logoutHandler={this.props.logoutHandler} />

      </div>
    );
  }
};

const { func, object, bool } = React.PropTypes;
LogoutWrapper.propTypes = {
  dispatch: func,
  user: object
};

export const UnwrappedLogin = LogoutWrapper;


const mapDispatchToProps = (dispatch) => {
    return {
        loginHandler: (credentials) => {
            dispatch(authUser(credentials));
        },
        logoutHandler: (credentials) => {
            dispatch(authLogoutAction());
        },
        init: () => {
          dispatch(requestAuthorizedUserAction());
        }
    };
};

// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = ({ authReducer }) => {
  return {
   user: authReducer.user
  };
};

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(LogoutWrapper);
