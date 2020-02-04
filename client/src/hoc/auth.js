import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions/user_actions';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function(ComposedClass, reload, adminRoute = null){
    class AuthenticationCheck extends Component {
        
        
        state = {
            loading: true
        }
        
        
        
        
        render() {
            if(this.state.loading){
                return (
                    <div className="main_loader">
                        <CircularProgress style={{color:'#2196F3'}} thickness={7}/>
                    </div>
                )
            }
            return (
                <div>
                    Component
                </div>
            );
        }
    }
    
    function mapStateToProps(state){
        return {
            user: state.user
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck)
}





