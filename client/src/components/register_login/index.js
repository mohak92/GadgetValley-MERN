import React from 'react';
import ButtonOne from '../../Utils/button';

const RegisterLogin = () => {
    return (
        <div>
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            <h1>New Customers</h1>
                            <p>New Customer? Click on Create an Account to get started to recieve the newest gadgets for the best prices.</p>
                            <ButtonOne
                                type="default"
                                title="Create an Account"
                                linkto="/register"
                                addStyles={{
                                    //Insert CSS here.
                                    margin:'10px 0 0 0'
                                }}
                            />
                        </div>
                        <div className="right">
                            <h2>Registered Customers</h2>
                            <p>If you have an existing account, please log in.</p>
                            <ButtonOne
                                type="default"
                                title="Log in"
                                linkto="/login"
                                addStyles={{
                                    //Insert CSS here
                                    margin:'10px 0 0 0'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegisterLogin;