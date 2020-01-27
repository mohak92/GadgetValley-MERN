//importing basic react requirements
import React from 'react';
import {Switch, Route} from 'react-router-dom'

//importing components
import RegisterLogin from './components/register_login'


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Homepage}/>
            </Switch>
        </Layout>
    )
};

export default Routes;