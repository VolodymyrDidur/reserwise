import React, { useState } from 'react';
import './HomePageHeader.scss';
import useUser from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';
import defaultUserImage from '../../assets/images/user-icon.png'
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

interface HomePageHeaderProps {
    onSearch: (query: string) => void;
}

export const HomePageHeader: React.FC<HomePageHeaderProps> = ({ onSearch }) => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();
    const { user } = useUser();
    const [ searchQuery, setSearchQuery ] = useState<string>('');
    const history = useHistory();
    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    const greeting = isAuthenticated ? `${t('welcome')}, ${user.given_name} 👋` : `${t('welcomeGuest')} 👋`;
    const UserImage = isAuthenticated ? user.picture : defaultUserImage;

    const onUserClickHandler = (event: React.MouseEvent<HTMLElement>):void => {
        event.preventDefault();
        if (isAuthenticated) {
            history.push('/account');
        } else {
            history.push('/sign-in');
        }
    }

    return (
        <header className="header">
            <div className='header__user' onClick={onUserClickHandler}>
                <div className="header__icon">
                    <img src={UserImage} alt="User Icon" />
                </div>
                <div className="header__username">{greeting}</div>
            </div>
            <div className="search">
                <input 
                    type="text" 
                    className="search_input-field" 
                    placeholder={t('search')} 
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
        </header>

    );
};
