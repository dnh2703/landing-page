import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <div className="sm:bg-gray-100 flex justify-center items-center">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
