import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { SignOutIcon } from '../../assets/icons';
import useUser from '../../hooks/useUser';
import './SignOutButton.scss';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const SignOutButton: React.FC<{ className: string }> = ({ className }) => {
  const { setUser } = useUser();
  const { t } = useTranslation();
  const history = useHistory();

  const handleSignOut = () => {
    googleLogout();
    setUser(null);
    localStorage.clear();
    history.push('/home');
  }
  return (
    <button className={`signout-button ${ className }`} type='button' onClick = { handleSignOut }>
      <span className='signout-button__icon-container'>
        <SignOutIcon />
      </span>
      <span className='signout-button__text'>{t('signout')}</span>
    </button>
  )
}