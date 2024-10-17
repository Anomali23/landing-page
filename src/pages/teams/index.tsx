import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import SectionLayout from '@/layouts/SectionLayout';
import { motion } from 'framer-motion';
import MemberCard from '@/components/common/MemberCard';
import TeamsHendri from '@/assets/images/teams/teams_hendri.jpg';
import TeamsDito from '@/assets/images/teams/teams_dito.jpeg';
import TeamsDhimas from '@/assets/images/teams/teams_dhimas.jpeg';

const member = [
  {
    image: TeamsHendri,
    name: 'Hendri Wahyu Perdana',
    occupation: 'Chief Executive Officer',
    linkedIn: 'https://www.linkedin.com/',
    instagram: '',
  },
  {
    image: TeamsDito,
    name: 'Dito Ardi Pratama',
    occupation: 'Human Resource Development',
    linkedIn: 'https://www.linkedin.com/',
    instagram: '',
  },
  {
    image: TeamsDhimas,
    name: 'Dhimas Afrisetiawan',
    occupation: 'Chief Operations Officer',
    linkedIn: 'https://www.linkedin.com/',
    instagram: '',
  },
];

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
    // filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
function Teams(): React.ReactElement {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-bold text-center">Our Teams</h1>
      <motion.div
        className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        {member.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: [null, 0.9, 1.1] }}
            transition={{ duration: 0.3 }}
            className="grow-1">
            <MemberCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

Teams.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <MainLayout>
      <SectionLayout>{page}</SectionLayout>
    </MainLayout>
  );
};

export default Teams;
