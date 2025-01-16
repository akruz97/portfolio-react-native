
import React from 'react';
import Title from './Title';
import Layout from './Layout';

const AboutMe = () => {
  return (
    <Layout>
        <div className='mt-14 mb-24' >
            <Title text='About Me' />
            <p className='mt-8'>{'I am a Computer Systems Engineer, I have more than 5 years of experience as a Software Developer and as a specialist in hybrid mobile apps with React Native. I have developed several mobile applications, being involved from the design phases to the deployment to the stores, achieving hundreds of users and downloads in App Store and Google Play in some of them. I have participated in web projects with .Net and JavaScript technologies within the banking sector and others based on Odoo ERP.'}</p>
        </div>
    </Layout>
  );
};

export default AboutMe;