import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import StorySection from '@/features/about/StorySection';
import MissionSection from '@/features/about/MissionSection';
import SectionLayout from '@/layouts/SectionLayout';

function AboutPage(): React.ReactElement {
  return (
    <MainLayout>
      <SectionLayout>
        <StorySection />
        <MissionSection />
      </SectionLayout>
    </MainLayout>
  );
}

export default AboutPage;
