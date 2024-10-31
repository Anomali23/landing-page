import MainLayout from '@/layouts/MainLayout';
import React, { useEffect } from 'react';
import SectionLayout from '@/layouts/SectionLayout';
import { motion } from 'framer-motion';
import MemberCard from '@/components/common/MemberCard';
import { useMember } from '@/stores/member-store';
import { Loader2 } from 'lucide-react';
import Head from 'next/head';

// Variants for stagger effect and individual item animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each card animation
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function TeamsPage(): React.ReactElement {
  const { loading, members, fetchMembers } = useMember();

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-bold text-center">Our Teams</h1>
      {loading ? (
        // Loading spinner and text when loading
        <div className="flex flex-col items-center justify-center h-64">
          <Loader2 className="animate-spin h-10 w-10 text-gray-500 mb-2" />
          <p className="text-gray-600 text-lg font-semibold">Loading...</p>
        </div>
      ) : (
        // Render members only when loading is false
        <motion.div
          className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          {members?.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: [null, 0.9, 1.1] }}
              transition={{ duration: 0.3 }}
              className="grow-1">
              <MemberCard
                image={item.image}
                name={item.name}
                description={item.description}
                occupation={item.teams[0]?.name || 'Unknown'}
                linkedIn={
                  item.social_media.find((media) =>
                    media.url.includes('linkedin'),
                  )?.url || ''
                }
                instagram={
                  item.social_media.find((media) =>
                    media.url.includes('instagram'),
                  )?.url || ''
                }
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

TeamsPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <Head>
        <title>Teams - Anomali</title>
        <meta name="mission-anomali-1" content="Our services are designed to make your life easier and more efficient." />
        <meta name="mission-anomali-2" content="We offer fast and reliable services to our customers." />
        <meta name="mission-anomali-3" content="We offer only the best, hand-picked items for our customers." />
      </Head>
      <SectionLayout>{page}</SectionLayout>
    </MainLayout>
  );
};
