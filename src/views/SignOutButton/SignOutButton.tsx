import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { SignOutIcon } from '../../assets/icons';
import { UserDispatchContext } from '../../auth/authContext';
import './SignOutButton.scss';
export const SignOutButton: React.FC<{ className: string }> = ({ className }) => {
  const setUser = React.useContext(UserDispatchContext);
  const handleSignOut = () => {
    googleLogout();
    setUser(null);
    localStorage.clear();
  }
  return (
    <button className={`signout-button ${className}`} type='button' onClick={handleSignOut}>
      <span className='signout-button__icon-container'>
        <SignOutIcon />
      </span>
      Sign out
    </button>
  )
}