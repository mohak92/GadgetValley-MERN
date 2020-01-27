import React from './node_modules/react';

const ButtonOne = () => {

        const buttons = () =>{
            let template = '';
            switch(props.type){
                default: 
                    template=null;
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