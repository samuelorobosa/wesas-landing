import React from 'react';
import logo from '@/src/assets/logo.jpeg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function footer() {
  return (
    <footer className='text-gray-600 sm:px-20'>
      <div className='flex flex-col lg:flex-row lg:justify-between px-10 sm:px-0 gap-10 sm:gap-20 font-body py-16 border-b-2 mb-2'>
        <div className='flex flex-col gap-5 items-start'>
          <h3 className='font-bold'>Categories</h3>
          <a href='#'>User Interface</a>
          <a href='#'>User Experience</a>
          <a href='#'>Digital Media</a>
          <a href='#'>Lifestyle</a>
          <a href='#'>Programming</a>
          <a href='#'>Animation</a>
        </div>
        <div className='flex flex-col text-gray-600 gap-5 items-start'>
          <h3 className='font-bold'>Product</h3>
          <a href='#'>Pricing</a>
          <a href='#'>Overview</a>
          <a href='#'>Browse</a>
          <a href='#'>Accessibility</a>
          <a href='#'>Five</a>
          <a href='#'>Changelong</a>
        </div>
        <div className='flex flex-col text-gray-600 gap-5 items-start'>
          <h3 className='font-bold'>Solutions</h3>
          <a href='#'>Brainstorming</a>
          <a href='#'>Ideation</a>
          <a href='#'>Wireframing</a>
          <a href='#'>Research</a>
          <a href='#'>Design</a>
          <a href='#'>Concept</a>
        </div>
        <div className='flex flex-col text-gray-600 gap-5 items-start'>
          <h3 className='font-bold'>Resources</h3>
          <a href='#'>Help Center</a>
          <a href='#'>Blog</a>
          <a href='#'>Tutorials</a>
          <a href='#'>FAQs</a>
          <a href='#'>Community</a>
          <a href='#'>Events</a>
        </div>
        <div className='flex flex-col text-gray-600 gap-5 items-start'>
          <h3 className='font-bold'>Support</h3>
          <a href='#'>Contact Us</a>
          <a href='#'>Developers</a>
          <a href='#'>Documentation</a>
          <a href='#'>Integrations</a>
          <a href='#'>Reports</a>
          <a href='#'>Webinar</a>
        </div>
        <div className='flex flex-col text-gray-600 gap-5 items-start'>
          <h3 className='font-bold'>Company</h3>
          <a href='#'>About</a>
          <a href='#'>Press</a>
          <a href='#'>Events</a>
          <a href='#'>Careers</a>
          <a href='#'>Customers</a>
          <a href='#'>Partners</a>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-between'>
        <a href='#' prefetch={false}>
          <img className='logo' src={logo} alt='WeShopAndShip logo' />
        </a>

        <p>WeShopAndShip @ 2023 All rights reserved</p>

        <div className='flex items-center gap-5 my-10 sm:mt-0'>
          <a href='#'>
            <FaYoutube size={22} />
          </a>
          <a href='#'>
            <FaFacebook size={22} />
          </a>
          <a href='#'>
            <FaTwitter size={22} />
          </a>
          <a href='#'>
            <FaInstagram size={22} />
          </a>
          <a href='#'>
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
