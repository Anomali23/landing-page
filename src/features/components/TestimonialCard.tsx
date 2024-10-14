import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  occupation?: string;
  content: string;
}

function TestimonialCard({
  avatar,
  name,
  occupation,
  content,
}: TestimonialCardProps): React.ReactElement {
  return (
    <Card className='bg-white'>
      <CardHeader>
        <div className="flex flex-row gap-5">
          <img
            src={avatar}
            alt={name}
            className="rounded-s border-border dark:border-darkBorder h-12 w-12 rounded-base border-2"
          />
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold">{name}</h3>
            <h4 className="text-sm font-normal">{occupation}</h4>
          </div>
        </div>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

export default TestimonialCard;
