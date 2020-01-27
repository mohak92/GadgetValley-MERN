import React, { Component } from 'react';
import { connect } from 'react-redux';



class Login extends Component {


    state = {
        formError: false,
        formSuccess: '',
        formdata:{
            email: {
                element: 'input',
            }
        }
    }



    
    
    
    submitForm= () =>{

    
    }


    render() {
        return(
            <div className="signin_wrapper">
                <form onSubmit={(event)=> this.submitForm(event)}></form>
            </div>
        )
    }
};

export default connect()(Login);