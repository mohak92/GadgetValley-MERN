//importing basic react requirements
import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Layout from './hoc/layout'

//importing components
import RegisterLogin from './components/Register_login'
import Homepage from './components/Homepage'


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/register_login" exact component={RegisterLogin}/>
                <Route path="/homepage" exact component={Homepage}/>
            </Switch>
        </Layout>
    )
};

export default Routes;