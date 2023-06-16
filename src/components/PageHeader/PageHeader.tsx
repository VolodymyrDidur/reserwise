import React from "react";
import { useHistory } from "react-router-dom";
import './PageHeader.scss'
import { GoBackIcon } from '../../assets/icons.tsx'

interface PageHeaderProps {
    headerText: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({headerText}) => {
    const history = useHistory();
    return (
        <header className='header'>
            <h2 className='header__title'>{headerText}</h2>
            <button onClick={() => history.goBack()} className='header__btnBack'>
                <GoBackIcon/>
            </button>
        </header>
    );
};
