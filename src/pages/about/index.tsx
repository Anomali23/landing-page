import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import StorySection from '@/features/about/StorySection';
import MissionSection from '@/features/about/MissionSection';
import SectionLayout from '@/layouts/SectionLayout';
import FounderSection from '@/features/about/FounderSection';

function About(): React.ReactElement {
  return (
    <>
      <StorySection />
      <MissionSection />
      <FounderSection />
    </>
  );
}

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <SectionLayout>{page}</SectionLayout>
    </MainLayout>
  );
};
export default About;
