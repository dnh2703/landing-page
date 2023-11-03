import AuthRoutes from '../pages/Auth/routes';

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
