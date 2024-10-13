import { cn } from '@/lib/utils';
import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
}

function SectionLayout({
  children,
  className,
}: SectionLayoutProps): React.ReactElement {
  return (
    <div className={cn('w-full h-max px-4', className)}>
      <div className="container mx-auto py-8 md:py-12 lg:py-20 gap-10">
        {children}
      </div>
    </div>
  );
}

export default SectionLayout;
