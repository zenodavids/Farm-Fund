import Link from 'next/link' // Importing the Link component from Next.js

const Footer = () => {
  // Defining a functional component called Footer
  return (
    <div className='relative mt-64 bg-deep-purple-accent-400 bg-[#008000]'>
      {' '}
      {/* A div container with background color and CSS classes */}
      <svg
        className='absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#008000] -z-1' // An SVG element with CSS classes and styles
        preserveAspectRatio='none'
        viewBox='0 0 1440 54'
      >
        <path
          fill='currentColor'
          d='M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z'
        />
      </svg>
      <div className='px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        {' '}
        {/* A div container with CSS classes */}
        <div className='grid gap-16 row-gap-10 mb-8 lg:grid-cols-6'>
          {' '}
          {/* A grid container with CSS classes */}
          <div className='md:max-w-md lg:col-span-2'></div>{' '}
          {/* A div container with CSS classes */}
        </div>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row'>
          {' '}
          {/* A flex container with CSS classes */}
          <p className='text-sm text-gray-100 text-center'>
            {' '}
            {/* A paragraph element with CSS classes */}© Copyright 2023 Fund
            Farm Inc. All rights reserved.
          </p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'></div>{' '}
          {/* A div container with CSS classes */}
        </div>
      </div>
    </div>
  )
}

export default Footer // Exporting the Footer component as the default export
