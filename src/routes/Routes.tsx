import {Route, Switch} from 'react-router-dom';
import {MainPage, HomePage} from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route path="/home">
                <HomePage/>
            </Route>
            <Route path="/" render={() => <MainPage>Hello</MainPage>}/>     
        </Switch>
    );
};

export default Routes;
