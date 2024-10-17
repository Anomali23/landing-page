import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';

interface TestimonialCardProps {
  avatar: string | StaticImageData;
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
          <Image
            src={avatar}
            alt={name}
            height={48}
            width={48}
            className="rounded-s border-border dark:border-darkBorder rounded-base border-2"
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
