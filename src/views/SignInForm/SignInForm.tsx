import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { UserDispatchContext } from '../../auth/authContext';
import jwt_decode from 'jwt-decode';
import './SignInForm.scss';

export const SignInForm: React.FC<{}> = ({ }) => {
  const [isFailed, setIsFailed] = React.useState(false);

  const setUser = React.useContext(UserDispatchContext);

  const handleSuccess = (response) => {
    const userObject = jwt_decode(response.credential);
    setUser(userObject);
    setIsFailed(false);
  }
  const handleError = () => {
    setIsFailed(true);
  }

  return (
    <form className='signin-form'>
      <h3 className='signin-form__header'>Sign in</h3>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        cookiePolicy='single_host_origin'
        type='standard'
        theme='filled_blue'
        size='large'
        logo_alignment='left'
        text='signin_with'
        shape='pill'
      />
      {isFailed &&
        (<p className='signin-form__error'>
          Sign in failed. Try again.
        </p>)}
    </form>
  )
}
