import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ShoppingBag, Sprout, Zap } from 'lucide-react';

function MissionSection(): React.ReactElement {
  return (
    <div className="my-8 flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-center mb-4">Our Mission</h3>
      <div className="grid lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <Card className="bg-yellow-300">
          <CardHeader className="items-center">
            <Zap size={48} className="mb-4" />
            <h3 className="text-xl font-bold">Fast & Reliable</h3>
          </CardHeader>
          <CardContent className="text-center">
            We offer fast and reliable services to our customers.
          </CardContent>
        </Card>

        <Card className="bg-green-300">
          <CardHeader className="items-center">
            <ShoppingBag size={48} className="mb-4" />
            <h3 className="text-xl font-bold">Quality Products</h3>
          </CardHeader>
          <CardContent className="text-center">
            We offer only the best, hand-picked items for our customers.
          </CardContent>
        </Card>
        <Card className="bg-white">
          <CardHeader className="items-center">
            <Sprout size={48} className="mb-4" />
            <h3 className="text-xl font-bold">Innovative Services</h3>
          </CardHeader>
          <CardContent className="text-center">
            Our services are designed to make your life easier and more
            efficient.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MissionSection;
