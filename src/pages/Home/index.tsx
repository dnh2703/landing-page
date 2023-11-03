import React from 'react';
import HeroSection from './HeroSection';
import WorkingSection from './WorkingSection';
import ToolSection from './ToolSection';
import CTASection from './CTASection';
import ContactForm from './ContactForm';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <WorkingSection />
      <ToolSection />
      <CTASection />
      <ContactForm />
    </>
  );
};
