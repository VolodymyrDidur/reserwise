import React from 'react';
import './HomePageHeader.scss';
import useUser from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';
import defaultUserImage from '../../assets/images/user-icon.png'

export const HomePageHeader: React.FC<{}> = ({}) => {
    const { isAuthenticated } = useAuth();
    const user = useUser();

    const greeting = !isAuthenticated ? `Welcome, ${user.name} 👋` : 'Welcome, guest 👋';
    const UserImage = !isAuthenticated ? user.image : defaultUserImage ;
    
    return (
        <header className="header">
            <div className='header__user'>
                <div className="header__icon">
                    <img src={UserImage} alt="User Icon" />
                </div>
                <div className="header__username">{greeting}</div>
            </div>
            <div className="search">
                <input type="text" className="search_input-field" placeholder="Search restaurant..." />
            </div>
        </header>
        
    );
};
