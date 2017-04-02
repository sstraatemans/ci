import React from 'react';
import { connect } from 'react-redux';
import { authUser, requestAuthorizedUserAction, authLogoutAction } from './../../store/actions';
import Login from './../../components/Login';

class LoginView extends React.Component{
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
      <div className='login'>
        {this.setLoadingState()}
        <Login user={this.props.user} clickHandler={this.props.loginHandler} logoutHandler={this.props.logoutHandler} />

      </div>
    );
  }
};

const { func, object, bool } = React.PropTypes;
LoginView.propTypes = {
  dispatch: func,
  user: object,
  loading: bool
};

export const UnwrappedLogin = LoginView;


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
   user: authReducer.user,
   loading: authReducer.loading
  };
};

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
