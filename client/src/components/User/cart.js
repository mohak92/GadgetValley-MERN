import React, { Component } from 'react';
import UserLayout from '../../hoc/user'
import { Connect } from 'react-redux'
import FrontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFrown from '@fortawesome/fontawesome-free-solid/faFrown'
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile'


class UserCart extends Component {
    render() {
        return (
            <UserLayout>
             <div>
                    Cart
            </div>
            </UserLayout>
        );
    }
}

export default UserCart;