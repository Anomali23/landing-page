import SectionLayout from '@/layouts/SectionLayout';
import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

interface Testimonials {
  avatar: string;
  name: string;
  occupation?: string;
  content: string;
}

const testimonials: Testimonials[] = [
  {
    avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=Michael%20Orson',
    name: 'Michael Orson',
    occupation: 'Digital Marketing',
    content:
      'Working with this team has been a fantastic experience. Their expertise in digital marketing helped us reach new heights.',
  },
  {
    avatar:
      'https://api.dicebear.com/9.x/identicon/svg?seed=William%20Fredrick',
    name: 'William Fredrick',
    occupation: 'Data Analytics',
    content:
      'Their data-driven approach allowed us to uncover key insights that were critical to our business success.',
  },
  {
    avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=Osborn%20Walter',
    name: 'Osborn Walter',
    occupation: 'Customer Support',
    content:
      'Their support team is outstanding. They resolved all our issues promptly and professionally.',
  },
  {
    avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=Adam%20Smith',
    name: 'Adam Smith',
    occupation: 'Website Development',
    content:
      'They developed a stunning and functional website that perfectly represents our brand.',
  },
  {
    avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=Kenny%20Smith',
    name: 'Kenny Smith',
    occupation: 'Frontend Developer',
    content:
      'The frontend development exceeded our expectations, creating a seamless user experience.',
  },
  {
    avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=Norris%20Lee',
    name: 'Norris Lee',
    occupation: 'Human Resource',
    content:
      'Thanks to their solutions, we streamlined our HR processes, saving time and improving efficiency.',
  },
  {
    avatar: 'https://api.dicebear.com/9.x/identicon/svg?seed=Bill%20Odson',
    name: 'Bill Odson',
    occupation: 'Digital Marketing',
    content:
      'They significantly improved our online presence through strategic digital marketing campaigns.',
  },
];

function TestimoniSection(): React.ReactElement {
  return (
    <SectionLayout className="bg-slate-50">
      <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
        <div className="header flex flex-col gap-4 text-center">
          <h3 className="text-3xl font-bold">What Our Client Says</h3>
          <h4 className="text-lg font-medium">
            Our clients share their experiences and thoughts on working with us,
            helping us continue to grow.
          </h4>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div className="group flex flex-col justify-center gap-4 md:gap-6 lg:gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                name={testimonial.name}
                occupation={testimonial.occupation}
                content={testimonial.content}
              />
            ))}
          </div>
          <div className="group flex flex-col justify-center gap-4 md:gap-6 lg:gap-8">
            {testimonials.slice(2, 5).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                name={testimonial.name}
                occupation={testimonial.occupation}
                content={testimonial.content}
              />
            ))}
          </div>
          <div className="group flex flex-col justify-center gap-4 md:gap-6 lg:gap-8">
            {testimonials.slice(5, 7).map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                name={testimonial.name}
                occupation={testimonial.occupation}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default TestimoniSection;
