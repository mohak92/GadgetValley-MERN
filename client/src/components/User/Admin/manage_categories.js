import React, { Component } from 'react';
import UserLayout from '../../../hoc/user';
import ManageBrands from './manage_brands';
import ManageCategory from './manage_category';

class ManageCategories extends Component {
    render() {
        return (
            <div>
                <UserLayout>
                    <ManageBrands />
                    <ManageCategory />
                </UserLayout>
            </div>
        );
    }
}

export default ManageCategories;