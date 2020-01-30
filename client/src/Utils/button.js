import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

const ButtonOne = (props) => {

    const buttons = () => {
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