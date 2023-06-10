import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../hooks';

interface Props {
  to?: string;
  error?: Error;
}

const RedirectRoute: React.FC<Props> = ({ to, error }) => {
  const { isAuthenticated } = useAuth();

  if (to) {
    if (error) return <Redirect to={{ pathname: to, state: { err: error } }} />;
    return <Redirect to={to} />;
  }

  if (!isAuthenticated) return <Redirect to="/login" />;

  if (isAuthenticated) return <Redirect to='/home' />;

  // has no access at all
  return null;
};

export default RedirectRoute;
