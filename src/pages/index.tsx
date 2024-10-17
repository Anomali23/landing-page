import AboutSection from '@/features/home/AboutSection';
import FAQSection from '@/features/home/FAQSection';
import HeroSection from '@/features/home/HeroSection';
import TeamSection from '@/features/home/TeamSection';
import TestimoniSection from '@/features/home/TestimoniSection';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
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

Home.getLayout = function getLayout(page : React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
