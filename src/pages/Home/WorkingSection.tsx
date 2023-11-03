import WorkingImage1 from '../../assets/images/working_image_1.svg';
import WorkingImage2 from '../../assets/images/working_image_2.svg';
import WorkingImage3 from '../../assets/images/working_image_3.svg';
import { Button } from '../../components/Elements';

const WorkingSection = () => {
  return (
    <section className="lg:py-20 py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
      <div className="flex gap-4 items-start w-full lg:basis-1-2">
        <div
          className="h-120 w-full rounded-3xl flex-grow bg-no-repeat mt-20"
          style={{ backgroundImage: `url(${WorkingImage3})` }}
        ></div>
        <div
          className="h-120 w-full rounded-3xl flex-grow bg-no-repeat"
          style={{ backgroundImage: `url(${WorkingImage1})` }}
        ></div>
        <div
          className="h-120 w-full rounded-3xl round flex-grow bg-no-repeat mt-10"
          style={{ backgroundImage: `url(${WorkingImage2})` }}
        ></div>
      </div>

      <div className="flex gap-6 h-full w-full lg:basis-1-2 flex-col items-start justify-center">
        <h2>Enjoy your time working</h2>
        <p className="text-l">
          Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
          Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis
          massa tellus imperdiet aenean nulla id.
        </p>
        <Button className="text-m text-blue-600 bg-transparent cursor-pointer py-3 border-transparent">
          See how it helped others <i className="pl-4 ri-arrow-right-line"></i>
        </Button>
      </div>
    </section>
  );
};

export default WorkingSection;
