import {Route, Switch} from 'react-router-dom';
import { AccountPage } from '../pages/AccountPage/AccountPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';

import { MainPage, PlacePage, HomePage } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <MainPage>Hello</MainPage>}/>
            <Route path="/accountPage" render={() => <AccountPage/>}/>
            <Route path="/signInPage" render={() => <SignInPage/>}/>
            <Route path="/place/:id" render={() => <PlacePage/>}/>
            <Route path="/home" render={() => <HomePage/>}/>
        </Switch>
    );
};

export default Routes;
