import { Routes, Route } from 'react-router-dom';
import AppLayout from '../../../layouts/AppLayout';
import { Home } from '..';

const HomeRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default HomeRoutes;
