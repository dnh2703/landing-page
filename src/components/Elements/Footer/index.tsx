import React from 'react';

const Footer = () => {
  return (
    <footer className="flex py-6 lg:py-20 flex-col lg:flex-row flex-1">
      <div className="w-full flex gap-2 items-center">
        <p className="text-l font-bold">magnifico</p>
        <p>@ 2023. All rights reserved.</p>
      </div>
      <div className="flex items-center">
        <nav className="cursor-pointer">Terms</nav>
        <nav className="cursor-pointer pl-6">Privacy</nav>
        <nav className="cursor-pointer pl-6">Support</nav>
        <nav className="cursor-pointer pl-6">About</nav>
        <nav className="cursor-pointer pl-6">Resources</nav>
        <nav className="cursor-pointer pl-6">Contact</nav>
      </div>
    </footer>
  );
};

export default Footer;
