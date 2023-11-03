import React from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public.routes';
import HomeRoutes from '../pages/Home/routes';
import useAuth from '../hooks/useAuth';
import { protectedRoutes } from './protected.routes';

const AppRoutes = () => {
  const { isAuth } = useAuth();

  const routes = isAuth ? protectedRoutes : publicRoutes;

  const commonRoutes = [{ path: '/', element: <HomeRoutes /> }];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

export default AppRoutes;
