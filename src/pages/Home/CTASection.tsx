import React from 'react';
import CTAImage from '../../assets/images/cta_image.jpg';
import { Button } from '../../components/Elements';

const CTASection = () => {
  return (
    <section className="mx-0 md:mx-20 h-full cta">
      <div className="p-6 md:p-20 flex h-full flex-wrap">
        <div className="basis-1 md:basis-1-2 hidden md:flex"></div>
        <div className="basis-1 md:basis-1-2">
          <h2 className="text-white">Problems come and get solved with ease</h2>
          <p className="py-6 text-white">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
          <Button className="text-m text-white bg-transparent cursor-pointer py-3 border-transparent">
            Improve workflow <i className="pl-4 ri-arrow-right-line"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
