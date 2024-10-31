import AboutSection from '@/features/home/AboutSection';
import FAQSection from '@/features/home/FAQSection';
import HeroSection from '@/features/home/HeroSection';
import TeamSection from '@/features/home/TeamSection';
import TestimoniSection from '@/features/home/TestimoniSection';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TestimoniSection />
      <FAQSection />
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <Head>
        <title>Anomali - Homepage</title>
        <meta
          name="description"
          content="Anomali - A modern, responsive, and user-friendly web application"
        />
      </Head>
      {page}
    </MainLayout>
  );
};
