import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionLayout from '@/layouts/SectionLayout';
import { motion } from 'framer-motion';

type FAQInfo = {
  title: string;
  description: string;
};

const faqData: FAQInfo[] = [
  {
    title: 'What services do you offer?',
    description:
      'Anomali provides a range of consulting services tailored to meet the unique needs of each client.',
  },
  {
    title: 'How can I contact you?',
    description:
      'You can reach us through our contact page or directly via email at support@anomali.com.',
  },
  {
    title: 'What is your consultation process?',
    description:
      'Our process involves understanding your needs, developing a strategy, and implementing solutions collaboratively.',
  },
  {
    title: 'Do you offer remote consultations?',
    description:
      'Yes, we provide remote consultations to accommodate clients from various locations.',
  },
  {
    title: 'How do I get started?',
    description:
      'Simply fill out our inquiry form, and one of our team members will get back to you shortly.',
  },
];

function FAQSection(): React.ReactElement {
  return (
    <SectionLayout>
      <div className="flex flex-col gap-6 text-center">
        <div className="flex flex-col gap-4 pb-4">
          <motion.h3
            className="text-3xl text-black font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Frequently Asked Questions
          </motion.h3>
          <motion.p
            className="text-lg font-normal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Here you can find answers to the most common inquiries about our
            services and processes. We aim to provide clarity and support.
          </motion.p>
        </div>
        <div className="md:mx-auto md:w-[750px] grid gap-4">
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              className="w-full lg:w-[unset] text-start"
              type="single"
              collapsible>
              <AccordionItem className="max-w-full" value="item-1">
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-4">
          <motion.h3
            className="text-3xl text-black font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            Need More Help?
          </motion.h3>
          <motion.p
            className="text-lg font-normal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            If you have any other questions, feel free to ask. We&apos;re here
            to help.
          </motion.p>
          <Link to="mailto:admin@anomali.com" className="pt-5">
            <Button size="lg" className='font-bold text-md'>Contact Us</Button>
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}

export default FAQSection;
