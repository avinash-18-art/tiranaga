import React from 'react';
import { useTranslation } from 'react-i18next';
import './Language.css';

const Language = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className='navbar'>
        <h1 className='lang'>{t('Language')}</h1>
      </div>

      <div className='middle'>
        <select className='naman' onChange={handleChange}>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default Language;
