import React from 'react';

const Title = ({
    text = ''
}) => {
  return (
    <h2 className='text-center text-2xl' style={{ fontFamily: 'Gilroy-Bold' }} >{text}</h2>
  );
};

export default Title;