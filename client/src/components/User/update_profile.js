import React from 'react';
import Userlayout from '../../hoc/user'
import UpdatePersonalNfo from './update_personal_nfo'

const UpdateProfile = () => {
    return (
        <Userlayout>
            <h1>Profile</h1>
            <UpdatePersonalNfo/>
        </Userlayout>
    );
};

export default UpdateProfile;