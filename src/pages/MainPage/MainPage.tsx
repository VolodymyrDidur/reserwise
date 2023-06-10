import React from 'react';

import './MainPage.scss';

export const MainPage: React.FC<{ children }> = ({ children }) => {
  return (
    <div className="main-page">
      {children}
    </div>
  );
};
