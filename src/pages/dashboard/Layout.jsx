import React from 'react';
import { Outlet } from 'react-router-dom';
import { SmallSidebar, BigSidebar, Navbar } from 'components';
import Wrapper from 'assets/wrappers/SharedLayout';

const Layout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Layout;
