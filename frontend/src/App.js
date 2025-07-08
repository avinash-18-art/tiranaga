import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import Main from './components/Main';
import Wallet from './components/Wallet';





function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <Main />
      
      
      
      
     
    </div>
  );
}

export default App;

