import React, { useState } from 'react';
import Header from '@/src/components/ui/header';
import Footer from '@/src/components/ui/footer';
import icon from '@/src/assets/Icon.png';
import picture from '@/src/assets/Picture.png';
import SectionCard from './components/SectionCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/src/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/src/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';

export default function LandingPage() {
  return (
    <div className='max-w-full'>
      <Header />

      <div className='font-body'>
        <SectionCard
          reverse={false}
          showButtons={true}
          showSecondButton={true}
          heading={'Building apps just got easier'}
        />

        <section className='flex flex-col sm:flex-row items-center justify-center bg-custom-gradient gap-12 mt-4 pt-10 pb-16 px-10 sm:px-20'>
          <div className='flex flex-col justify-center items-center sm:w-[30%]'>
            <img src={icon} alt='icon' width={80} height={80} />
            <h2 className='font-bold text-2xl py-3'>Fermentum amet</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center sm:w-[30%]'>
            <img src={icon} alt='icon' width={80} height={80} />
            <h2 className='font-bold text-2xl py-3'>Fermentum amet</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center sm:w-[30%]'>
            <img src={icon} alt='icon' width={80} height={80} />
            <h2 className='font-bold text-2xl py-3'>Fermentum amet</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus.
            </p>
          </div>
        </section>

        <div className='py-12 px-10 sm:px-0 text-center'>
          <h2 className='font-bold text-6xl mb-4'>All the essential tools</h2>
          <p className='text-xl font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate quam sit amet sapien elementum sagittis.
          </p>
        </div>

        <SectionCard reverse={true} showButtons={false} />

        <div className='py-12 px-10 sm:px-0  text-center'>
          <h2 className='font-bold text-6xl mb-4'>Focus on what matters</h2>
          <p className='text-xl font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate quam sit amet sapien elementum sagittis.
          </p>
        </div>

        <SectionCard reverse={true} showButtons={false} />

        <Button
          className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[225px] py-8 px-6 mb-10'
          asChild
        >
          <a href='/login' className='text-xl'>
            Get Started
          </a>
        </Button>

        <div className=''>
          <Carousel
            className='bg-[#F1F5F9] py-20'
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <div className='flex justify-center items-center gap-20'>
                  <img src={picture} alt='picture' />
                  <div className='flex flex-col items-start justify-center'>
                    <h3 className='uppercase text-lg font-semibold text-gray-600 mb-3'>
                      Success Stories
                    </h3>
                    <p className='text-justify text-xl w-[528px]'>
                      <span
                        className='text-[#EAB308] text-3xl
'
                      >
                        “
                      </span>{' '}
                      Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo.{' '}
                      <span
                        className='text-[#EF4444] text-3xl
'
                      >
                        ”
                      </span>
                    </p>
                    <p className='text-lg mt-2'>Marie Poirot</p>
                    <p className='font-bold text-lg'>Bigapp</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className='flex justify-center items-center gap-20'>
                  <img src={picture} alt='picture' />
                  <div className='flex flex-col items-start justify-center'>
                    <h3 className='uppercase text-lg font-semibold text-gray-600 mb-3'>
                      Success Stories
                    </h3>
                    <p className='text-justify text-xl w-[528px]'>
                      <span
                        className='text-[#EAB308] text-3xl
'
                      >
                        “
                      </span>{' '}
                      Id urna, nisl, ut quam. Diam suspendisse fringilla quam
                      arcu mattis est velit in. Nibh in purus sit convallis
                      phasellus ut. At vel erat ultricies commodo. Neque
                      suspendisse a habitasse commodo.{' '}
                      <span
                        className='text-[#EF4444] text-3xl
'
                      >
                        ”
                      </span>
                    </p>
                    <p className='text-lg mt-2'>Marie Poirot</p>
                    <p className='font-bold text-lg'>Bigapp</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className='mt-20 mb-16 px-10 sm:px-0 '>
          <h2 className='font-bold text-6xl mb-4'>Answers to your questions</h2>
        </div>

        <Accordion type='single' collapsible className='mb-32 px-20'>
          <AccordionItem value='item-1' className='py-2'>
            <AccordionTrigger className='text-blue-600 text-2xl'>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </AccordionTrigger>
            <AccordionContent>
              Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
              consequat donec id fermentum. Metus, tortor tellus ornare mauris,
              convallis quis. Tristique vulputate enim, vitae sodales nisl enim
              est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida
              vitae fringilla eu tellus neque est feugiat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='py-2'>
            <AccordionTrigger className='text-blue-600 text-2xl'>
              Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque,
              dolor?
            </AccordionTrigger>
            <AccordionContent>
              Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
              consequat donec id fermentum. Metus, tortor tellus ornare mauris,
              convallis quis. Tristique vulputate enim, vitae sodales nisl enim
              est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida
              vitae fringilla eu tellus neque est feugiat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <SectionCard
          reverse={false}
          showButtons={true}
          heading={'Start now and get the best services'}
          className={'py-20 bg-[#F1F5F9]'}
        />
      </div>

      <Footer />
    </div>
  );
}
