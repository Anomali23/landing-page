import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/features/home/HeroSection';
import React from 'react';
import AboutSection from '@/features/home/AboutSection';
import TeamSection from '@/features/home/TeamSection';
import FAQSection from '../features/home/FAQSection';
import TestimoniSection from '../features/home/TestimoniSection';

function HomePage(): React.ReactElement {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TestimoniSection />
      <FAQSection />
    </MainLayout>
  );
}

export default HomePage;
