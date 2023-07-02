import React from 'react';
import { LanguageIcon } from '../../assets/icons';
import languages from '../../lang/languages.index';
import { useTranslation } from 'react-i18next';
import getLangFromStorage from '../../i18n/getLangFromStorage';
import './LanguagePicker.scss';

export const LanguagePicker: React.FC<{}> = ({ }) => {
  const [language, setLanguage] = React.useState(getLangFromStorage(localStorage, 'i18nextLng'));

  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
    setLanguage(selectedLang);
  }

  return (
    <div className='language-picker'>
      <span className='language-picker__icon-container'>
        <LanguageIcon />
      </span>
      <select className='language-picker__select' value={language} onChange={(event) => changeLanguage(event)}>
        {
          languages.map((lang) => {
            return (
              <option key={lang.lang} value={lang.lang}>{lang.props.nativeName}</option>
            )
          })
        }
      </select>
    </div>
  )
}