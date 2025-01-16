
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
import { useTranslation } from 'react-i18next';

const Projects = () => {

  const { t } = useTranslation();

  return (
    <section className='w-full' id='projects'>
        <div className='mt-16 sm:mt-24'>
            <Title text={t('projects')} />
      
            <ItemProject 
            image={ImgProjectFlawless} 
            image2={ImgProjectFlawless2} 
            title={'Flawless App'} 
            description={t('flawless')} />

            <hr className='mt-20 mx-8 sm:mx-24' />

            <ItemProject 
            image={ImgProjectKik} 
            image2={ImgProjectKik2}
            title={'KIK App'} 
            description={t('kik')} />

            <hr className='mt-20 mx-8 sm:mx-24' />

            <ItemProject 
            image={ImgProjectOroVerde}
            image2={ImgProjectOroVerde2} 
            title={'Oro Verde App v1'} 
            description={t('oroverde')} />

            <hr className='mt-20 mx-8 sm:mx-24' />

            <ItemProject 
            image={ImgProjectKiupon}
            image2={ImgProjectKiupon2} 
            title={'Kiupon App'} 
            description={t('kiupon')} />

            <hr className='mt-20 mx-8 sm:mx-24' />

            <ItemProject 
            image={ImgProjectTrueki} 
            image2={ImgProjectTrueki2}
            title={'Trueki App'} 
            description={t('trueki')} />
        </div>
    </section>
  );
};

export default Projects;