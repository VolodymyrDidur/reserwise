import React from 'react';
import { googleLogout } from '@react-oauth/google';
import { SignOutIcon } from '../../assets/icons';
import useUser from '../../hooks/useUser';
import './SignOutButton.scss';
import { useTranslation } from 'react-i18next';

export const SignOutButton: React.FC<{ className: string }> = ({ className }) => {
  const { setUser } = useUser();
  const { t } = useTranslation();

  const handleSignOut = () => {
    googleLogout();
    setUser(null);
    localStorage.clear();
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