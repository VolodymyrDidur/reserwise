import {Route, Switch} from 'react-router-dom';
import { MainPage, PlacePage, HomePage, AccountPage, FavoritesPage } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <MainPage>Hello</MainPage>}/>
            <Route path="/accountPage" render={() => <AccountPage/>}/>
            <Route path="/place/:id" render={() => <PlacePage/>}/>
            <Route path="/home" render={() => <HomePage/>}/>
            <Route path="/favorites" render={() => <FavoritesPage/>}/>
        </Switch>
    );
};

export default Routes;
