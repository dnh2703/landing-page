import React from 'react';
import { Button } from '../../components/Elements';
import FeatureImage from '../../assets/images/features_image.svg';

const FeatureSection = () => {
  return (
    <section className="py-40 flex">
      <div>
        <h2>Improve workflow</h2>
        <p className="text-gray-600 py-6">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <Button className="text-m text-blue-600 bg-transparent cursor-pointer py-3 border-transparent">
          Check the tools <i className="pl-4 ri-arrow-right-line"></i>
        </Button>
      </div>
      <div>
        <img src={FeatureImage} alt="feature_image" />
      </div>
    </section>
  );
};

export default FeatureSection;
