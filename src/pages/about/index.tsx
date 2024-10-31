import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import StorySection from '@/features/about/StorySection';
import MissionSection from '@/features/about/MissionSection';
import SectionLayout from '@/layouts/SectionLayout';
import FounderSection from '@/features/about/FounderSection';
import Head from 'next/head';

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
      <Head>
        <title>Anomali - About</title>
        <meta
          name="about-anomali"
          content="Anomali is a revolutionary platform that bridges the gap between innovative products and cutting-edge services, creating a unique ecosystem for modern consumers."
        />
        <meta name="history-2023" content="The Birth of Anomali (Founded in a small garage office with a vision to integrate product sales with innovative services.)" />
        <meta name="history-2024" content="" />
      </Head>
      <SectionLayout>{page}</SectionLayout>
    </MainLayout>
  );
};
export default About;
