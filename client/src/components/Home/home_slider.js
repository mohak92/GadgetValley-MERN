import React from 'react';
import Slider from 'react-slick';
import ButtonOne from '../utils/button';

const HomeSlider = (props) => {

    const slides = [
        {
            img:'/images/gadgetHome.jpg',
            lineOne:'Smartphone',
            lineTwo:'iPhone XS',
            linkTitle:'Shop now',
            linkTwo:'/shop?categ=iPhone XS'
        },
        {
            img:'/images/gadgetHome2.jpg',
            lineOne:'Xbox One',
            lineTwo:'Huge discounts',
            linkTitle:'View offers',
            linkTwo:'/shop'
        }
    ]
    
    const settings = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false 
    }


   const generateSlides = () => (
        slides ?
        slides.map((item,i) =>(
            <div key={i}>
            <div className='featured_image'>
                style={{
                    background:`url(${item.img})`,
                    height:`${window.innerHeight}px`
                }}
                <div className="featured_action">
            <div className="tag title">{item.lineOne}</div>
            <div className="tag low_title">{item.lineTwo}</div>

                </div>
            </div>
            </div>
        ))
        :null
    )



    return (
        <div className='featured_container'>
            <Slider {...settings}>
                { generateSlides()}
            </Slider>
            
        </div>
    );
};

export default HomeSlider;