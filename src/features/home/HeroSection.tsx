import React from 'react';
import { Button } from '@/components/ui/button';
import useScrambleText from '@/hooks/useScrambleText';
import { motion } from 'framer-motion';
import ScrambleText from '../components/ScrambleText';

function MainCard(): React.ReactElement {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const hidden = { opacity: 0, y: 20 }; // For the paragraph

  const buttonLeftVariant = {
    hidden: { x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const buttonRightVariant = {
    hidden: { x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="h-[40rem] w-full dark:bg-black bg-slate-50 dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
      <div className="flex flex-col gap-4 text-black items-center text-center h-full justify-center relative">
        <ScrambleText originalText='Welcome to Anomali' />
        <motion.p
          initial="hidden"
          animate="visible"
          variants={{ hidden, visible }}
          className="text-lg w-2/3 description">
          Discover a wide range of quality products and services tailored to
          meet your needs. Shop with confidence and enjoy a seamless online
          experience.
        </motion.p>
        <div className="flex gap-5 md:flex-row">
          {/* Get Started button (from the left) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonLeftVariant}>
            <Button variant="default">Get Started</Button>
          </motion.div>

          {/* Learn More button (from the right) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={buttonRightVariant}>
            <Button variant="neutral">Learn More</Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
