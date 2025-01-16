import React from 'react';
import { dictIcons } from '../assets/icons';

const ItemExperience = ({item}) => {

    const {
        title,
        subtitle,
        activities = [],
        technologies = [],
        time = ''
     } = item;

  return (
    <div key={`${title}-${subtitle}`} className='mt-10 flex flex-col sm:flex-row '>
      <div className='flex-row w-64'>
        <h4 className='text-sm' style={{ fontFamily: 'Gilroy-Bold' }} >{title}</h4>
        <h3 className='text-sm'>{subtitle}</h3>
        <h3 className='text-sm md:mt-5 text-slate-400'>{time}</h3>
      </div>
      <div className='flex-1 text-justify mt-5 md:mt-0 sm:mt-0 '>
        <ul className='list-item '>
        {
            activities.map((item, idx) => {
                return <li className='text-sm' key={idx} >{item}</li>
            })
        }
        </ul>
        <div className='flex flex-wrap mt-4'>
        {
            technologies.map((iconTech, idx) => {
                return (
                    <div className='px-4' key={idx}>
                        {dictIcons[iconTech]}
                    </div>
                )
            })
        }
        </div>
      </div>
    
    </div>
  );
};

export default ItemExperience;