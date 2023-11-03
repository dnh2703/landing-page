import React from 'react';
import { Header } from '../components/Elements';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Elements/Footer';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
