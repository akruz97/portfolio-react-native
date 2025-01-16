import React from 'react';
import Title from './Title';
import ItemExperience from './ItemExperience';
import { LIST_EXPERIENCES } from '../const/listExperiences';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';
import { LIST_EXPERIENCES_ES } from '../const/listExperiencesES';

const Experiences = () => {

  const { t, i18n: { language } }  = useTranslation();

  const listLang = language === 'en' ? LIST_EXPERIENCES : LIST_EXPERIENCES_ES

  return (
    <Layout>
      <section className='mt-10' id='experiences' >
        <Title text={t('experiences')} />
        
        {
          listLang.map((item, idx) => {
              return <ItemExperience item={item} key={`${item.title}-${item.subtitle}`} />
          })
        }
      
      </section>
    </Layout>
  );
};

export default Experiences;