import {Route, Switch} from 'react-router-dom';
import { MainPage, PlacePage, HomePage, AccountPage } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <MainPage>Hello</MainPage>}/>
            <Route path="/accountPage" render={() => <AccountPage/>}/>
            <Route path="/place/:id" render={() => <PlacePage/>}/>
            <Route path="/home" render={() => <HomePage/>}/>
        </Switch>
    );
};

export default Routes;
