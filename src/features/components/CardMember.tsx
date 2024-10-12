import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { InstagramIcon, LinkedinIcon } from 'lucide-react';

interface CardMemberProps {
  image: string;
  name: string;
  description?: string;
  occupation?: string;
  linkedIn: string;
  instagram: string;
}

function CardMember({
  image,
  name,
  // description,
  occupation,
  linkedIn,
  instagram,
}: CardMemberProps): React.ReactElement {
  return (
    <Card className="bg-white flex flex-col min-h-[420px]">
      <CardHeader className="pb-0 gap-2 flex-grow">
        <img src={image} alt={name} className="rounded-[2.5px] object-cover max-h-[300px]" />
        <div className="flex flex-col gap-1 items-center pt-2">
          <CardTitle className='text-center'>{name}</CardTitle>
          <span className="text-sm font-medium">{occupation}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* <CardDescription className="text-center pb-2">
          {description}
        </CardDescription> */}
        <div className="flex flex-row gap-3 justify-center pt-2">
          <Link to={linkedIn}>
            <LinkedinIcon />
          </Link>
          <Link to={instagram}>
            <InstagramIcon />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}


export default CardMember;
