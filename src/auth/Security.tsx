import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { REACT_APP_CLIENT_ID } from './authConfig';
import AuthContext from './authContext';

export const Security: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <GoogleOAuthProvider
      clientId={REACT_APP_CLIENT_ID}>
      <AuthContext>
        {children}
      </AuthContext>
    </GoogleOAuthProvider>
  );
}