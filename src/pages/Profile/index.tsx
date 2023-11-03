import { Button } from '../../components/Elements';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
  const { user } = useAuth();

  return (
    <section className="py-20">
      <h5 className="pb-2">Welcome to profile</h5>
      <p className="font-semibold text-blue-600">Hi {user?.email}!</p>
      <div className="flex pt-8 flex-wrap">
        <label className="basis-1 md:basis-1-2 pb-4">
          <p className="font-bold mb-2 mr-4">Your email</p>
          <input
            defaultValue={'admin@gmail.com'}
            disabled={true}
            type="text"
            className="px-2 py-2 w-full"
          />
        </label>
        <label className="basis-1 md:basis-1-2 pb-4 md:pl-10">
          <p className="font-bold mb-2 mr-4">Password</p>
          <input
            defaultValue={'admin@gmail.com'}
            disabled={true}
            type="password"
            className="px-2 py-2 w-full"
          />
        </label>
        <label className="basis-1 md:basis-1-2 pb-4">
          <p className="font-bold mb-2 mr-4">Phone number</p>
          <input
            defaultValue={'01564789795'}
            disabled={true}
            type="text"
            className="px-2 py-2 w-full"
          />
        </label>
        <label className="basis-1 md:basis-1-2 pb-4 md:pl-10">
          <p className="font-bold mb-2 mr-4">Website</p>
          <input
            defaultValue={'vmo@group.com.vn'}
            disabled={true}
            type="text"
            className="px-2 py-2 w-full"
          />
        </label>
        <Button className="bg-blue-600 text-white px-4 font-bold py-2 rounded-lg">
          Save changes
        </Button>
      </div>
    </section>
  );
};

export default Profile;
