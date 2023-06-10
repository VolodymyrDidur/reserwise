import { Route, Switch } from 'react-router-dom';

import { MainPage } from '../pages';
import RedirectRoute from './RedirectRoute';
import { useAuth } from '../hooks';

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Switch>
      <Route path="/home" render={() => <MainPage>Hello</MainPage>} />
      {isAuthenticated && <Route path="*" component={RedirectRoute} />}
    </Switch>
  );
};

export default Routes;
