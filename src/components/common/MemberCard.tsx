import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { InstagramIcon, LinkedinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface MemberCardProps {
  className?: string;
  image: string | StaticImageData;
  name: string;
  description?: string;
  occupation?: string;
  linkedIn?: string;
  instagram?: string;
}

function MemberCard({
  className,
  image,
  name,
  description,
  occupation,
  linkedIn,
  instagram,
}: MemberCardProps): React.ReactElement {
  return (
    <Card
      className={cn(
        'bg-white flex flex-col justify-between min-h-[420px] h-full',
        className,
      )}>
      <CardHeader className="pb-0 gap-2 flex-grow">
        <Image
          src={image}
          alt={name}
          className="rounded-[2.5px] object-cover max-h-[300px]"
        />
        <div className="flex flex-col gap-1 text-center items-center pt-2">
          <CardTitle className="text-center">{name}</CardTitle>
          <span className="text-sm font-medium">{occupation}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {description && (
          <CardDescription className="text-center pb-2">
            {description}
          </CardDescription>
        )}

        {(linkedIn || instagram) && (
          <div className="flex justify-center gap-4 pt-4">
            {linkedIn && (
              <Link href={linkedIn}>
                <LinkedinIcon />
              </Link>
            )}
            {instagram && (
              <Link href={instagram}>
                <InstagramIcon />
              </Link>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default MemberCard;
