import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import { compose } from "recompose"
import { getSavedUserRequest } from '../../store/auth/actions';

const AuthGuard = (props) => {

  const { user, children } = props;
  const { isAuthenticated } = user;
  const navigate = useNavigate();


  useEffect(() => {

    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
   
  }, [user]);

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
}


const mapStateToProps = (state) => ({
  user: state.auth.get('user'),
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getSavedUserRequest,
  }, dispatch)
})


export default compose(connect(mapStateToProps, mapDispatchToProps))(AuthGuard)