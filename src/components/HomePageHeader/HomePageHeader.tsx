import React, { useState } from 'react';
import './HomePageHeader.scss';
import useUser from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';
import defaultUserImage from '../../assets/images/user-icon.png'
import { useTranslation } from 'react-i18next';

interface HomePageHeaderProps {
    onSearch: (query: string) => void;
}

export const HomePageHeader: React.FC<HomePageHeaderProps> = ({ onSearch }) => {
    const { t } = useTranslation();
    const { isAuthenticated } = useAuth();
    const { user } = useUser();
    const [ searchQuery, setSearchQuery ] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

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
