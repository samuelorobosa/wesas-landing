import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/src/components/ui/navigation-menu';
import { Sheet, SheetTrigger, SheetContent } from '@/src/components/ui/sheet';
import { Button } from '@/src/components/ui/button';

import { navigationMenuTriggerStyle } from '@/src/components/ui/navigation-menu';
import logo from '@/src/assets/logo.jpeg';

export default function header() {
  return (
    <header className='flex flex-row justify-between font-header border-b-2 px-10'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden my-5'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <a href='#' prefetch={false}>
            <img className='logo' src={logo} alt='WeShopAndShip logo' />
          </a>
          <div className='grid gap-2 py-6'>
            <a
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Products
            </a>
            <a
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Business Solutions
            </a>
            <a
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Help Center
            </a>
            <a
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Pricing
            </a>
            <a
              href='#'
              className='flex w-full items-center py-2 text-lg font-semibold'
              prefetch={false}
            >
              Login
            </a>
          </div>
          <Button
            className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[130px]'
            asChild
          >
            <a href='/login' prefetch={false}>
              Get Started
            </a>
          </Button>
        </SheetContent>
      </Sheet>
      <div className='hidden lg:flex'>
        <a href='#' prefetch={false}>
          <img className='logo' src={logo} alt='WeShopAndShip logo' />
        </a>
        <div className='px-10 flex flex-row gap-5'>
          <NavigationMenu className='hidden lg:flex'>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='font-bold'>
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild className='px-4 py-2 m-0'>
                    <a
                      href='#'
                      className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2'
                      prefetch={false}
                    >
                      Link
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='font-bold'>
                  Business Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent className=''>
                  <NavigationMenuLink asChild className='px-4 py-2 m-0'>
                    <a
                      href='#'
                      className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2'
                      prefetch={false}
                    >
                      Link
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='font-bold'>
                  Help Center
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink asChild className='px-4 py-2 m-0'>
                    <a
                      href='#'
                      className='group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2'
                      prefetch={false}
                    >
                      Link
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <a href='/pricing' legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  style={{ fontWeight: '700' }}
                >
                  Pricing
                </NavigationMenuLink>
              </a>{' '}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-4'>
        <NavigationMenu className='px-3 py-2'>
          <a href='/pricing' legacyBehavior passHref prefetch={false}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              style={{ fontWeight: '700' }}
            >
              Login
            </NavigationMenuLink>
          </a>
        </NavigationMenu>
        <Button
          className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[130px]'
          asChild
        >
          <a href='/login' prefetch={false}>
            Get Started
          </a>
        </Button>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}
