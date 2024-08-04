import { Button } from '@/src/components/ui/button';
import logo from '@/src/assets/logo.jpeg';
import { useState } from 'react';
import { Sheet, SheetContent } from '@/src/components/ui/sheet.jsx';

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    if (open) setOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <header className="flex flex-row items-center justify-between font-header border-b-2 px-6">
        <a className="lg:hidden" href="#">
          <img className="logo" src={logo} alt="WeShopAndShip logo" />
        </a>
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          size="icon"
          className="lg:hidden my-5 ml-auto"
        >
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
        <div className="hidden lg:flex">
          <a href="#">
            <img className="logo" src={logo} alt="WeShopAndShip logo" />
          </a>
          <div className="px-10 flex flex-row gap-5 items-center">
            <span
              onClick={() => scrollTo('about')}
              className="font-medium inter-font text-sm cursor-pointer"
            >
              About Us
            </span>
            <span
              onClick={() => scrollTo('services')}
              className="font-medium inter-font text-sm cursor-pointer"
            >
              Services
            </span>
            <span
              onClick={() => scrollTo('testimonials')}
              className="font-medium inter-font text-sm cursor-pointer"
            >
              Testimonials
            </span>
            <span
              onClick={() => scrollTo('faq')}
              className="font-medium inter-font text-sm cursor-pointer"
            >
              FAQ
            </span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="default"
            className="bg-blue hover:text-blue-600 hover:bg-primary-tint-300 flex items-center inter-font"
          >
            <a href="/login">Login</a>
          </Button>
          <Button
            variant="default"
            className="bg-blue hover:text-blue-600 hover:bg-primary-tint-300 flex items-center inter-font"
          >
            <a href="/login">Get Started</a>
          </Button>
        </div>
      </header>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <a href="#">
            <img className="logo" src={logo} alt="WeShopAndShip logo" />
          </a>
          <div className="grid gap-2 py-6">
            <span
              onClick={() => scrollTo('about')}
              className="font-semibold inter-font text-lg py-2 cursor-pointer"
            >
              About Us
            </span>
            <span
              onClick={() => scrollTo('services')}
              className="font-semibold inter-font text-lg py-2 cursor-pointer"
            >
              Services
            </span>
            <span
              onClick={() => scrollTo('testimonials')}
              className="font-semibold inter-font text-lg py-2 cursor-pointer"
            >
              Testimonials
            </span>
            <span
              onClick={() => scrollTo('faq')}
              className="font-semibold inter-font text-lg py-2 cursor-pointer"
            >
              FAQ
            </span>
          </div>
          <Button
            className="bg-blue-600 hover:text-blue-600 hover:bg-white"
            asChild
          >
            <a href="/login">Get Started</a>
          </Button>
        </SheetContent>
      </Sheet>
    </>
  );
}
