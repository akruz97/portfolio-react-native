
import React from 'react';

const ItemProject = ({
    image,
    image2,
    title,
    description
}) => {
  return (
    <div className='w-full mx-auto md:w-2/3 mt-20'>
       <div className='flex flex-col sm:flex-col md:flex-col xl:flex-row'>
            <div className='flex flex-row sm:flex-row md:flex-row mt-24 md:mt-14 '>
              <div className='size-64 self-center sm:self-auto  '>
                  <img src={image} alt="" className='object-contain ' />
              </div>
              <div className='size-64 self-center sm:self-auto  '>
                  <img src={image2} alt="" className='object-contain ' />
              </div>
            </div>
            <div className='flex-1 flex flex-col justify-center px-8 sm:px-12 mt-10 sm:mt-10'>
                <h4 className='text-xl' style={{ fontFamily: 'Gilroy-Bold' }} >{title}</h4>
                <p className='mt-6 text-md'>{description}</p>
            </div>

        </div>
    </div>
  );
};

export default ItemProject;