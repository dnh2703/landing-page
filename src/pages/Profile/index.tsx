import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <section className="py-20">
      <h5 className="pb-2">Welcome to profile</h5>
      <p className="font-semibold text-blue-600">Hi {user?.email}!</p>
    </section>
  );
};

export default Profile;
