import React from 'react';
import { useHistory } from "react-router-dom";
import './FavoritesPageHeader.scss';
import useUser from '../../hooks/useUser';
import default_icon from '../../assets/images/user-icon.png';
import { GoBackIcon } from '../../assets/icons';

export const FavoritesPageHeader: React.FC<{}> = ({}) => {
    const { user } = useUser();
    const history = useHistory();

    return (
        <header className="header">
            <div className='header__user'>
                <div className='header__photo-container'>
                    <img 
                        src={user?.picture || default_icon} 
                        alt={user?.name || 'Default user icon'}
                        className='header__user-img'
                    />
                </div>
                <div className='header__user-name'>
                    <span>{user?.name}</span>
                </div>  
            </div>
            <button onClick={() => history.goBack()} className='header__btnBack'>
                <GoBackIcon />
            </button>
            
        </header>
        
    );
};
