import { Button } from '../../components/Elements';
import HeroImg from '../../assets/images/hero_image.svg';
import ShellsLogo from '../../assets/logos/shells-logo.svg';
import SmartFinderLogo from '../../assets/logos/smartfinder-logo.svg';
import ArtVenueLogo from '../../assets/logos/artvenue-logo.svg';
import WavesLogo from '../../assets/logos/waves-logo.svg';

const HeroSection = () => {
  return (
    <section className="lg:py-20 py-12 flex lg:flex-row flex-col gap-8 lg:gap-20 flex-1 border-b border-blue-gray-200">
      <div className="flex flex-col basis-1-2 gap-6 flex-1 items-start py-6">
        <h1>Team projects, done well</h1>
        <p className="text-l">
          The only platform that gives your team all the tools needed to work
          together on their awesome projects.
        </p>
        <div className="w-full flex gap-4 ">
          <input
            placeholder="Enter work email"
            className="py-3 pl-4 rounded-lg flex-grow"
          />
          <Button className="text-m flex bg-blue-600 rounded-lg text-white items-center justify-center">
            <p className="p-3 flex">
              <p className="px-4">Sign Up Free</p>
              <i className=" ri-arrow-right-line"></i>
            </p>
          </Button>
        </div>

        <div className="bg-blue-gray-100 w-full p-4 gap-4 flex-wrap rounded-lg flex items-center justify-between">
          <div className="">
            <img src={ShellsLogo} alt="shells_logo" />
          </div>
          <div className="">
            <img src={SmartFinderLogo} alt="smartfinder_logo" />
          </div>
          <div className="">
            <img src={ArtVenueLogo} alt="artvenue_logo" />
          </div>
          <div className="">
            <img src={WavesLogo} alt="waves_logo" />
          </div>
        </div>
      </div>
      <div className="flex basis-1-2">
        <img className="w-full " src={HeroImg} alt="hero_image" />
      </div>
    </section>
  );
};

export default HeroSection;
