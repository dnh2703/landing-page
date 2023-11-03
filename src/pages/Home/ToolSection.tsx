import React from 'react';
import { Button } from '../../components/Elements';
import ToolImage from '../../assets/images/tool_image.svg';

const ToolSection = () => {
  return (
    <section className="lg:py-20 py-12 flex flex-1 gap-8 md:gap-20 lg:gap-32 flex-col lg:flex-row">
      <div className="flex flex-col">
        <h2>Get all the tools your team needs</h2>
        <p className="text-gray-600 py-6">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <Button className="flex justify-start text-m text-blue-600 bg-transparent cursor-pointer py-3 border-transparent">
          See how it helped others <i className="pl-4 ri-arrow-right-line"></i>
        </Button>
      </div>

      <div className="w-full flex justify-center items-center">
        <img className="mr-0 lg:mr-20" src={ToolImage} alt="tool_image" />
      </div>
    </section>
  );
};

export default ToolSection;
