import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Navbar(): React.ReactElement {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 bg-white z-[999]">
      <nav className="flex items-center justify-between w-full">
        {/* Logo dan Search Bar */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold">
            <h2>Anomali</h2>
          </Link>
        </div>

        {/* Button dan menu di bagian kanan */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Menu links hanya di desktop */}
          <nav className="hidden md:flex gap-5">
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground font-normal">
              About
            </Link>
            <Link
              href="/teams"
              className="text-muted-foreground transition-colors hover:text-foreground font-normal">
              Team
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-foreground font-normal">
              Blog
            </Link>
          </nav>

          {/* Sign In button hanya di desktop */}
          <div className="hidden md:flex gap-2">
            <Link href="#">
              <Button size="sm" variant="neutral" >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu (Hamburger) hanya untuk mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="noShadow"
                size="icon"
                className="shrink-0 md:hidden bg-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-5 text-lg font-medium pt-16">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-normal">
                  Anomali
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground font-normal">
                  About
                </Link>
                <Link
                  href="/teams"
                  className="text-muted-foreground hover:text-foreground font-normal">
                  Team
                </Link>
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-foreground font-normal">
                  Blog
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
