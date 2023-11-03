import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Avatar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('current_user');
    navigate('/auth/login');
  };

  return (
    <>
      <div
        className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <svg
          className="absolute w-12 h-12 text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <div className={`right-0 ${isOpen ? 'fixed' : 'hidden'}`}>
        <nav
          className="bg-gray-100  px-5 py-2 cursor-pointer"
          onClick={() => navigate('/app/profile')}
        >
          Profile
        </nav>
        <nav
          className="bg-gray-100 font-bold px-5 py-2 cursor-pointer"
          onClick={() => logout()}
        >
          Logout
        </nav>
        <nav
          className="bg-gray-100  px-5 py-2 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Close
        </nav>
      </div>
    </>
  );
};

export default Avatar;
