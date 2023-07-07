import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguagePicker } from '../../../views/LanguagePicker/LanguagePicker';
import './AccountSettings.scss';

export const AccountSettings: React.FC<{}> = ({ }) => {
  const { t } = useTranslation();
  return (
    <div className='account-settings'>
      <div className='account-settings__block'>
        <h3 className='account-settings__title'>{t('settings')}</h3>
        <LanguagePicker/>
      </div>
    </div>
  )
};