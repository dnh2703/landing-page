import React, { useEffect } from 'react';

const useAuth = () => {
  let user:any = localStorage.getItem('current_user');
  let isAuth = false;
  if (user) {
    user = JSON.parse(user);
    isAuth = true;
  }

  return { user, isAuth };
};

export default useAuth;
