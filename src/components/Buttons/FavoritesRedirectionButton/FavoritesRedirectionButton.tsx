import React from 'react';
import './FavoritesRedirectionButton.scss'
import { useAuth } from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { RedHeartIcon } from '../../../assets/icons';

const FavoritesRedirectionButton: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/favorites');
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <button onClick={handleButtonClick} className='redirection__button'>
      <RedHeartIcon />
    </button>
  );
};

export default FavoritesRedirectionButton;