import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TimelineEvent from '../components/TimelineEvent';
import { Rocket } from 'lucide-react';

function StorySection(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="flex flex-col gap-6 items-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-center">
          About Anomali
        </h3>
        <p className="text-xl max-w-4xl text-center">
          Anomali is a revolutionary platform that bridges the gap between
          innovative products and cutting-edge services, creating a unique
          ecosystem for modern consumers.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          Our Story
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-3xl font-bold">History</h3>
            </CardHeader>
            <CardContent>
              <TimelineEvent
                year="2023"
                title="The Birth of Anomali"
                description="Founded in a small garage office with a vision to integrate product sales with innovative services."
                icon={Rocket}
              />
              <TimelineEvent
                year="2024"
                title="The Birth of Anomali"
                description="Founded in a small garage office with a vision to integrate product sales with innovative services."
                icon={Rocket}
              />
            </CardContent>
          </Card>
          <img
            alt="Anomali's journey"
            className="transition-transform duration-300 object-cover border-border dark:border-darkBorder border-2 shadow-light dark:shadow-dark min-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default StorySection;
