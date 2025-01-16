import React from 'react';
import Title from './Title';
import ItemExperience from './ItemExperience';
import { LIST_EXPERIENCES } from '../const/listExperiences';
import Layout from './Layout';

const Experiences = () => {
  return (
    <Layout>
      <div className='mt-10' >
        <Title text='Work Experiences' />
        
        {
          LIST_EXPERIENCES.map((item, idx) => {
              return <ItemExperience item={item} key={`${item.title}-${item.subtitle}`} />
          })
        }
      
      </div>
    </Layout>
  );
};

export default Experiences;