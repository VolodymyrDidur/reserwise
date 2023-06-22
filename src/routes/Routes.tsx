import { Route, Switch } from 'react-router-dom';
import { MainPage, PlacePage } from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <MainPage>Hello</MainPage>}/>
            <Route path="/place/:id" render={() => <PlacePage/>}/>
        </Switch>
    );
};

export default Routes;
