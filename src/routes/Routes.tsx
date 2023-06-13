import {Route, Switch} from 'react-router-dom';
import {MainPage} from '../pages';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" render={() => <MainPage>Hello</MainPage>}/>
        </Switch>
    );
};

export default Routes;
