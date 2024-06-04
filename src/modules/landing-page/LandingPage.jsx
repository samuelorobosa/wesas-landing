import React from 'react';
import Header from '@/src/components/ui/header';
import Footer from '@/src/components/ui/footer';
import icon from '@/src/assets/Icon.png';
import secondIcon from '@/src/assets/Icon2nd_folder.png';
import thirdIcon from '@/src/assets/Icon3rd_folder.png';
import picture from '@/src/assets/Picture.png';
import firstPhoneIllustration from '@/src/assets/1st_phone.png';
import secondPhoneIllustration from '@/src/assets/2nd_phone.png';
import thirdPhoneIllustration from '@/src/assets/3rd_phone.png';
import fourthPhoneIllustration from '@/src/assets/4th_phone.png';
import { PlayIcon } from '@radix-ui/react-icons';
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
        <section className='font-body px-10 sm:px-20 py-14 flex flex-col sm:flex-row items-center justify-between'>
          <div className='w-full text-base sm:w-[50%] text-start mb-16 sm:mb-0'>
            <h1 className='font-[800] text-6xl sm:text-7xl mb-4 font-header'>
              Building apps just got easier
            </h1>
            <p className='font-medium text-justify text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus, et finibus odio pellentesque nec. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec dictum ac risus
              vel porttitor. Nullam sollicitudin arcu eget elit rhoncus, ut
              imperdiet ex commodo.
            </p>

            <div className='mt-5 flex gap-3 items-center'>
              <Button
                className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[150px] sm:w-[225px] py-7 sm:px-8 px-6'
                asChild
              >
                <a href='/login' className='text-xl'>
                  Get Started
                </a>
              </Button>
              <Button
                className='bg-white hover:bg-blue-600 hover:text-white text-blue-600 w-[150px] sm:w-[225px] py-7 sm:px-8 px-6'
                asChild
              >
                {/* <svg
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                  ></path>
                </svg> */}
                {/* <PlayIcon /> */}
                <a href='/login' className='text-xl'>
                  Watch Video
                </a>
              </Button>
            </div>
          </div>
          <div className='w-full sm:w-[50%] flex justify-center'>
            <img src={firstPhoneIllustration} alt='Illustration' />
          </div>
        </section>

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
            <img src={secondIcon} alt='icon' width={80} height={80} />
            <h2 className='font-bold text-2xl py-3'>Fermentum amet</h2>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center sm:w-[30%]'>
            <img src={thirdIcon} alt='icon' width={80} height={80} />
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

        <section
          className={`font-body px-10 sm:px-20 py-14 flex flex-col sm:flex-row-reverse items-center justify-between`}
        >
          <div className='sm:w-[50%] text-start mb-16 sm:mb-0'>
            <p className='font-medium text-justify text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus, et finibus odio pellentesque nec. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec dictum ac risus
              vel porttitor. Nullam sollicitudin arcu eget elit rhoncus, ut
              imperdiet ex commodo.
            </p>
          </div>
          <div className='w-full sm:w-[50%] flex justify-center'>
            <img src={secondPhoneIllustration} alt='Illustration' />
          </div>
        </section>

        <div className='py-12 px-10 sm:px-0  text-center'>
          <h2 className='font-bold text-6xl mb-4'>Focus on what matters</h2>
          <p className='text-xl font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate quam sit amet sapien elementum sagittis.
          </p>
        </div>

        <section className='font-body px-10 sm:px-20 py-14 flex flex-col sm:flex-row-reverse items-center justify-between'>
          <div className='sm:w-[50%] text-start text-lg mb-16 sm:mb-0'>
            <div className='mb-10 border-l-4 border-blue-600 pl-10 py-2'>
              <h3 className='font-bold mb-5'>
                Bibendum gravida dolor egestas aliquam
              </h3>
              <p className='font-medium text-justify text-lg'>
                Egestas tincidunt hendrerit nibh platea sit vivamus aenean
                rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris
                duis neque molestie venenatis nibh hendrerit pharetra. Tortor
                suscipit leo sit tellus ac scelerisque gravida sem.
              </p>
            </div>
            <h3 className='font-bold mb-10 border-l-4 pl-10 py-2'>
              Egestas lorem eget
            </h3>
            <h3 className='font-bold border-l-4 pl-10 py-2'>
              Tellus eget feugiat sit
            </h3>
          </div>
          <div className='w-full sm:w-[50%] flex justify-center'>
            <img src={thirdPhoneIllustration} alt='Illustration' />
          </div>
        </section>

        <Button
          className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[150px] sm:w-[225px] py-7 sm:px-8 px-6 mb-10'
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
            <AccordionTrigger className='text-blue-600 text-xl sm:text-2xl'>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </AccordionTrigger>
            <AccordionContent className='text-base text-center'>
              Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
              consequat donec id fermentum. Metus, tortor tellus ornare mauris,
              convallis quis. Tristique vulputate enim, vitae sodales nisl enim
              est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida
              vitae fringilla eu tellus neque est feugiat.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2' className='py-2'>
            <AccordionTrigger className='text-blue-600 text-xl sm:text-2xl'>
              Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque,
              dolor?
            </AccordionTrigger>
            <AccordionContent className='text-base text-center'>
              Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet
              consequat donec id fermentum. Metus, tortor tellus ornare mauris,
              convallis quis. Tristique vulputate enim, vitae sodales nisl enim
              est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida
              vitae fringilla eu tellus neque est feugiat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* <SectionCard
          reverse={false}
          showButtons={true}
          heading={'Start now and get the best services'}
          className={'py-20 bg-[#F1F5F9]'}
        /> */}
        <section className='font-body px-10 sm:px-20 py-20 flex flex-col sm:flex-row items-center justify-between bg-[#F1F5F9]'>
          <div className='sm:w-[50%] text-start mb-16 sm:mb-0'>
            <h1 className='font-[800] text-6xl sm:text-7xl mb-4'>
              Start now and get the best services
            </h1>
            <p className='font-medium text-justify text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vulputate quam sit amet sapien elementum sagittis. Morbi vehicula
              ultrices lacus, et finibus odio pellentesque nec. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec dictum ac risus
              vel porttitor. Nullam sollicitudin arcu eget elit rhoncus, ut
              imperdiet ex commodo.
            </p>
            <div className='mt-7 flex gap-3 items-center'>
              <Button
                className='bg-blue-600 hover:text-blue-600 hover:bg-white w-[150px] sm:w-[225px] py-7 sm:px-8 px-6'
                asChild
              >
                <a href='/login' className='text-xl'>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
          <div className='w-full sm:w-[50%] flex justify-center'>
            <img src={fourthPhoneIllustration} alt='Illustration' />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
