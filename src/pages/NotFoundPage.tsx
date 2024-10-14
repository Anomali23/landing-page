import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-400 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="p-6 md:p-12 flex flex-col md:flex-row justify-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-center text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-4 animate-glitch">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
              Oops! Page not found
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button size='lg' className='text-md'>
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
