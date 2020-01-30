import React from 'react';
import { Link } from 'react-router-dom';

const ButtonOne = () => {

    const buttons = (props) => {
        let template = '';
        switch (props.type) {
            case 'default':
                template =
                    <Link className='link_default'
        to={props.linkTo}{...props.addStyles}>{props.title}</Link>
                break;
            default:
                template = null;
        }


        return template
    }




    return (
        <div className='btn'>
            {buttons()}
        </div>
    )
};

export default ButtonOne;