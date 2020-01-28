//importing basic react requirements
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import RegisterLogin from './components/Register_login'
import Homepage from './components/Homepage'
import RegisterLogin from './components/register_login'

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/register_login" exact component={RegisterLogin}/>
                <Route path="/homepage" exact component={Homepage}/>
                <Route path="/" exact component={Homepage}/>
            </Switch>
        </Layout>
    )
};

export default Routes;