import React from 'react';
import { connect } from 'react-redux';
import { authUser } from './../../store/actions';
import Login from './../../components/Login';

class LoginView extends React.Component{
  setLoadingState () {
    if(this.props.loading){
      return (
        <div>Loading</div>
      );
    }
  }

  loggedIn () {
    if(!this.props.user){
      return (
        <Login clickHandler={this.props.loginHandler} />
      );
    }else{
      return (
        <div>
          {this.props.user.username}
        </div>
      );
    }
  }

  render () {
    return (
      <div className='login'>
        {this.setLoadingState()}
        {this.loggedIn()}

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
