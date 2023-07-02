import React from 'react';
import './HomePageHeader.scss';
import useUser from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';
import defaultUserImage from '../../assets/images/user-icon.png'
import { useTranslation } from 'react-i18next';

export const HomePageHeader: React.FC<{}> = ({}) => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();
    const { user } = useUser();

    const greeting = isAuthenticated ? `${t('welcome')}, ${user.given_name} 👋` : `${t('welcomeGuest')} 👋`;
    const UserImage = isAuthenticated ? user.picture : defaultUserImage ;
    
    return (
        <header className="header">
            <div className='header__user'>
                <div className="header__icon">
                    <img src={UserImage} alt="User Icon" />
                </div>
                <div className="header__username">{greeting}</div>
            </div>
            <div className="search">
                <input type="text" className="search_input-field" placeholder={t('search')} />
            </div>
        </header>
        
    );
};
