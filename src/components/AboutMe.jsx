
import React from 'react';
import Title from './Title';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {

  const { t }  = useTranslation();

  return (
    <Layout>
        <div className='mt-14 mb-24' >
            <Title text={t('resume').toUpperCase()} />
            <p className='mt-8 text-justify'>{t('aboutMe')}</p>
        </div>
    </Layout>
  );
};

export default AboutMe;