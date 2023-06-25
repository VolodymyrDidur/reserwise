import {Route, Switch} from 'react-router-dom';
import {MainPage} from '../pages';
import { AccountPage } from '../pages/AccountPage/AccountPage';
import { SignInPage } from '../pages/SignInPage/SignInPage';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <MainPage>Hello</MainPage>}/>
            <Route path="/accountPage" render={() => <AccountPage/>}/>
            <Route path="/signInPage" render={() => <SignInPage/>}/>
        </Switch>
    );
};

export default Routes;
