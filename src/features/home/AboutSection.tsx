import React from 'react';
import { motion } from 'framer-motion';
import { TypingText } from '../components/TypingText';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SectionLayout from '@/layouts/SectionLayout';

// Define the type for the CardAbout array
interface CardInfo {
  title: string;
  description: string;
}

const CardAbout: CardInfo[] = [
  {
    title: '2023 Year Established',
    description:
      'Since our inception, we have focused on delivering exceptional value to our clients, adapting to their unique challenges and fostering long-term partnerships.',
  },
  {
    title: '50 Clients Served',
    description:
      'We have successfully collaborated with a diverse range of clients, helping them navigate their industries and achieve their goals.',
  },
  {
    title: '5 Team Members',
    description:
      'Our team consists of dedicated professionals with expertise in various fields, ensuring that we provide comprehensive consulting services.',
  },
  {
    title: '100+ Projects Completed',
    description:
      'With a commitment to excellence, we have completed numerous projects that have significantly impacted our clients’ success.',
  },
];

function AboutSection(): React.ReactElement {
  return (
    <SectionLayout>
      <div className="lg:flex justify-center items-center py-8 md:py-12 lg:py-20 gap-10">
        <div className="flex flex-col gap-4 md:gap-8 w-full">
          <div className="w-full flex flex-col gap-2">
            <TypingText text="About Anomali" className="text-4xl font-bold" />
            <motion.p
              className="text-lg my-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              Anomali is dedicated to transforming the consulting landscape with
              innovative solutions. Our mission is to empower businesses through
              tailored services that drive growth and efficiency, ensuring a
              personalized approach to every client.
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {CardAbout.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: [null, 0.9, 1.1] }}
                transition={{ duration: 0.3 }}
                className="flex">
                <Card className="bg-white min-h-[190px]">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full ">
          <img
            src="https://10web-site.ai/198/wp-content/uploads/sites/210/2024/10/tenweb_media_shZUl4ZB.webp"
            alt="About Anomali"
            className="rounded-3xl hidden lg:block lg:w-[600px] lg:h-[600px] object-cover"
          />
        </div>
      </div>
    </SectionLayout>
  );
}

export default AboutSection;
