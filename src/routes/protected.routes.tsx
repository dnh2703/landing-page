import { Navigate } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Profile from '../pages/Profile';

export const protectedRoutes = [
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      { path: 'profile', element: <Profile /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
