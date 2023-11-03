import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../../../layouts/AuthLayout';
import { LoginForm, RegisterForm } from '..';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<AuthLayout />}>
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
