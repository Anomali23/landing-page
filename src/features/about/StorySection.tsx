import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TimelineEvent from '@/components/common/TimelineEvent';
import { Rocket } from 'lucide-react';
import Image from 'next/image';

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
        <h3 className="text-3xl font-bold text-start mb-4">Our Journey</h3>
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
          <div className="relative min-h-[300px] rounded-base shadow-light dark:shadow-dark overflow-hidden">
            <Image
              src="https://placeholder.pics/svg/450x400"
              alt="Anomali's journey"
              layout="fill" // Fill the container
              objectFit="cover" // Ensure it covers the container properly
              className="transition-transform duration-300 border-border dark:border-darkBorder border-2 rounded-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
