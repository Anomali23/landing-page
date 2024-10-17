import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MemberCard from '@/components/common/MemberCard';
import TeamsHendri from '@/assets/images/teams/teams_hendri.jpg';
import TeamsDito from '@/assets/images/teams/teams_dito.jpeg';
import TeamsDhimas from '@/assets/images/teams/teams_dhimas.jpeg';
import SectionLayout from '@/layouts/SectionLayout';

const member = [
  {
    image: TeamsHendri,
    name: 'Hendri Wahyu Perdana',
    occupation: 'Chief Executive Officer',
    // description:
    //   "Responsible for the overall strategy and direction of the company, the CEO ensures that all parts of the organization align with the company's long-term vision and leads major decision-making processes..",
    linkedIn: 'https://www.linkedin.com/',
    instagram: '',
  },
  {
    image: TeamsDito,
    name: 'Dito Ardi Pratama',
    occupation: 'Human Resource Development',
    // description:
    //   "Manages the company's human resources, overseeing recruitment, employee development, performance management, and ensuring a productive work environment.",
    linkedIn: 'https://www.linkedin.com/',
    instagram: '',
  },
  {
    image: TeamsDhimas,
    name: 'Dhimas Afrisetiawan',
    occupation: 'Chief Operations Officer',
    // description:
    //   "Ensures the company's daily operations run smoothly, the COO is responsible for efficiency, process management, and implementing operational strategies to support business growth.",
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

function TeamSection(): React.ReactElement {
  return (
    <SectionLayout className="bg-slate-50">
      <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <motion.h3
              className="text-3xl text-black font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              Our Team
            </motion.h3>
            <motion.p
              className="text-lg font-normal"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              Discover the talented individuals driving Anomali’s success.
            </motion.p>
          </div>
          <Button className="w-full md:w-auto">Show All</Button>
        </div>
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
              transition={{ duration: 0.3 }}>
              <MemberCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
}

export default TeamSection;
