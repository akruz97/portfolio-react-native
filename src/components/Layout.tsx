
import React from 'react';

const Layout = ({
    children
}) => {
  return (
    <div className='w-screen w-sc mx-auto px-12 lg:px-36 xl:px-96 2xl:max-w-screen-2xl'>
        {children}
    </div>
  );
};

export default Layout;