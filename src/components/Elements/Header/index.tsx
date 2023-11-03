import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../index';
import useComponentVisible from '../../../hooks/useComponentVisible';
import Avatar from '../Avatar';
import useAuth from '../../../hooks/useAuth';

function Header() {
  const { isComponentVisible, ref, setIsComponentVisible } =
    useComponentVisible(false);

  const { isAuth } = useAuth();

  const navigate = useNavigate();

  return (
    <header className="p-6 w-full bg-white flex sticky top-0 justify-between items-center border-blue-gray-200 border-b">
      <h5 className="cursor-pointer" onClick={() => navigate('/')}>
        magnifico
      </h5>
      <div className="lg:flex gap-2 hidden">
        <nav className="px-2 py-3 text-m cursor-pointer">Products</nav>
        <nav className="px-2 py-3 text-m cursor-pointer">Solutions</nav>
        <nav className="px-2 py-3 text-m cursor-pointer">Services</nav>
        <nav className="px-2 py-3 text-m cursor-pointer">Help Center</nav>
        <nav className="px-2 py-3 text-m cursor-pointer">Contact</nav>
      </div>
      <div className="lg:flex gap-4 hidden">
        {isAuth ? (
          <Avatar />
        ) : (
          <>
            <Button
              onClick={() => navigate('/auth/login')}
              className="p-3 bg-transparent text-m border-transparent cursor-pointer"
            >
              <p className="px-2 text-blue-600">Login</p>
            </Button>
            <Button
              onClick={() => navigate('/auth/register')}
              className="p-3 bg-blue-600 text-m border-blue-600 cursor-pointer outline-none rounded-lg"
            >
              <p className="px-4 text-white">
                Sign Up Free<i className="pl-4 ri-arrow-right-line"></i>
              </p>
            </Button>
          </>
        )}
      </div>
      <div
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsComponentVisible(true)}
      >
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>

      <div
        className={`fixed bg-gray-100 top-0 right-0 w-40 h-screen transition-transform translate-x-full ${
          !isComponentVisible ? '' : 'translate-x-0'
        }`}
        ref={ref}
      >
        <nav className="px-7 py-5 text-m cursor-pointer">Products</nav>
        <nav className="px-7 py-5 text-m cursor-pointer">Solutions</nav>
        <nav className="px-7 py-5 text-m cursor-pointer">Services</nav>
        <nav className="px-7 py-5 text-m cursor-pointer">Help Center</nav>
        <nav className="px-7 py-5 text-m cursor-pointer">Contact</nav>

        {isAuth ? (
          <nav
            className="px-7 py-5 text-m cursor-pointer"
            onClick={() => navigate('/app/profile')}
          >
            Profile
          </nav>
        ) : (
          <>
            <nav
              className="px-7 py-5 text-m cursor-pointer"
              onClick={() => navigate('/auth/login')}
            >
              Login
            </nav>
            <nav
              className="px-7 py-5 text-m cursor-pointer"
              onClick={() => navigate('/auth/register')}
            >
              Register
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
