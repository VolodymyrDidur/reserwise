import {Route, Switch, Redirect} from 'react-router-dom';
import { PlacePage, HomePage, AccountPage } from '../pages';
import { SignInPage } from '../pages/SignInPage/SignInPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={() => <Redirect to='/home'/>}/>
            <Route path="/account" render={() => <AccountPage/>}/>
            <Route path="/place/:id" render={() => <PlacePage/>}/>
            <Route path="/home" render={() => <HomePage/>}/>
            <Route path="/sign-in" render={()=><SignInPage/>} />
        </Switch>
    );
};

export default Routes;
