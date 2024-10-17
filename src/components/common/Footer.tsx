import React from 'react';
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer(): React.ReactElement {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 md:py-8 lg:py-10 bottom-0 w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="#" className="inline-flex items-center space-x-2">
            <span className="text-lg font-bold">Anomali</span>
          </Link>
          <p className="text-gray-500 dark:text-gray-400">
          Discover a wide range of quality products and services tailored to meet your needs. Shop with confidence and enjoy a seamless online experience.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Menu</h4>
          <div className="space-y-2 flex flex-col">
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 block">
              Home
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 block">
              Products
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 block">
              Services
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Social</h4>
          <div className="flex space-x-4">
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Information</h4>
          <div className="space-y-2">
            <p className="text-gray-500 dark:text-gray-400">Monday - Friday: 9am - 5pm</p>
            <p className="text-gray-500 dark:text-gray-400">Saturday - Sunday: Closed</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-12 lg:mt-16">
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 md:pt-8 lg:pt-10 flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; 2024 Anomali. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Created by{' '}
            <Link to="#" className="hover:underline">
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
