
import React from 'react';
import Layout from './Layout';
import Title from './Title';

import ImgProjectFlawless from "./../assets/img/projects/flawless/Pixel True Mockup (5).png"
import ImgProjectFlawless2 from "./../assets/img/projects/flawless/Pixel True Mockup (6).png"

import ImgProjectKik from "./../assets/img/projects/kik/Pixel True Mockup.png"
import ImgProjectKik2 from "./../assets/img/projects/kik/Pixel True Mockup high.png"

import ImgProjectOroVerde from "./../assets/img/projects/oroverde/Pixel True Mockup (2).png"
import ImgProjectOroVerde2 from "./../assets/img/projects/oroverde/Pixel True Mockup (1).png"

import ImgProjectKiupon from "./../assets/img/projects/kiupon/Pixel True Mockup (8).png"
import ImgProjectKiupon2 from "./../assets/img/projects/kiupon/Pixel True Mockup (9).png"

import ImgProjectTrueki from "./../assets/img/projects/trueki/Pixel True Mockup (3).png"
import ImgProjectTrueki2 from "./../assets/img/projects/trueki/Pixel True Mockup (4).png"

import ItemProject from './ItemProject';

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='mt-24'>
            <Title text='Projects Mobile' />
            <ItemProject 
            image={ImgProjectFlawless} 
            image2={ImgProjectFlawless2} 
            title={'Flawless App'} 
            description={'Android and iOS mobile app for the contracting of services professional services with integration to Flow payment gateway.'} />

            <ItemProject 
            image={ImgProjectKik} 
            image2={ImgProjectKik2}
            title={'KIK App'} 
            description={'Android and iOS mobile app for the management of social media marketing campaigns marketing campaigns in social networks, oriented to brands (stores) and influencers.'} />

            <ItemProject 
            image={ImgProjectOroVerde}
            image2={ImgProjectOroVerde2} 
            title={'Oro Verde App v1'} 
            description={'Android and iOS mobile app for the Oro Verde hotel chain, allowing hundreds of users to manage and use the Oro Verde Pasaporte Oro Verde'} />

            <ItemProject 
            image={ImgProjectKiupon}
            image2={ImgProjectKiupon2} 
            title={'Kiupon App'} 
            description={'Android and iOS mobile app for a digital coupons with benefits and discounts to local, restaurants, and commercial establishments in the city of Guayaquil - Ecuador, with implementation to Paymentez payment gateway under recurring monthly subscription model.'} />

            <ItemProject 
            image={ImgProjectTrueki} 
            image2={ImgProjectTrueki2}
            title={'Trueki App'} 
            description={'Development of an android MVP application called Trueki, social media app for the exchange of various products between users with Odoo ERP integration.'} />
        </div>
    </div>
  );
};

export default Projects;