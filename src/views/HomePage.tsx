import MainLayout from '@/layouts/MainLayout';
import HeroSection from '@/features/home/HeroSection';
import React from 'react';
import AboutSection from '@/features/home/AboutSection';
import TeamSection from '@/features/home/TeamSection';

function HomePage(): React.ReactElement {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <TeamSection />
    </MainLayout>
  );
}

export default HomePage;
