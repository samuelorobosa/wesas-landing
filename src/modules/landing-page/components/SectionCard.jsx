import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiPlay } from 'react-icons/fi';
import { Button } from '@/src/components/ui/button';
import phoneIllustration from '@/src/assets/iPhone.png';
import { cn } from '@/src/lib/utils';

export default function SectionCard({
  reverse,
  showButtons,
  showSecondButton = false,
  heading = false,
  className,
}) {
  return (
    <section
      className={`font-body px-10 sm:px-20 py-14 flex flex-col sm:${
        reverse ? 'flex-row-reverse' : 'flex-row'
      } items-center justify-between ${className}`}
    >
      <div className='sm:w-[50%] text-start mb-16 sm:mb-0'>
        {heading && <h1 className='font-[800] text-7xl mb-4'>{heading}</h1>}
        <p className='font-medium text-justify text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
          ultrices lacus, et finibus odio pellentesque nec. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec dictum ac risus vel
          porttitor. Nullam sollicitudin arcu eget elit rhoncus, ut imperdiet ex
          commodo.
        </p>

        {showButtons && (
          <div className='mt-5 flex gap-3 items-center'>
            <Button
              className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[225px] py-8 px-6'
              asChild
            >
              <a href='/login' className='text-xl'>
                Get Started
              </a>
            </Button>
            {showSecondButton && (
              <Button
                className='bg-white hover:bg-blue-600 hover:text-white text-blue-600 w-[225px] py-8 px-6'
                asChild
              >
                {/* <FaPlay /> */}
                <a href='/login' className='text-xl'>
                  Watch Video
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
      <div className='w-[50%] flex justify-center'>
        <img src={phoneIllustration} alt='Illustration' />
      </div>
    </section>
  );
}
