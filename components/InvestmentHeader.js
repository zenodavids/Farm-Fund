// Importing the GiFarmTractor icon from the react-icons/gi library
import { GiFarmTractor } from 'react-icons/gi'

// Defining a functional component called InvestmentHeader
const InvestmentHeader = () => {
  // Returning JSX elements in the component
  return (
    // A div with a set of CSS classes
    <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
      <div>
        {/* A paragraph with a set of CSS classes */}
        <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
          OUR INVESTMENT PLAN
        </p>
      </div>
      {/* A heading with a set of CSS classes */}
      <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
        {/* An inline span element with a set of CSS classes */}
        <span className='relative inline-block'>
          {/* A GiFarmTractor icon with a custom color */}
          <GiFarmTractor color='#008000' />
          {/* An SVG element with a set of attributes and a pattern */}
          <svg
            viewBox='0 0 52 24'
            fill='currentColor'
            className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block text-[#008000]'
          >
            <defs>
              <pattern
                id='f51618fb-0edb-4bcb-b35a-ffc770941286'
                x='0'
                y='0'
                width='.135'
                height='.30'
              >
                <circle cx='1' cy='1' r='.7' />
              </pattern>
            </defs>
            {/* A rectangle with a pattern fill */}
            <rect
              fill='url(#f51618fb-0edb-4bcb-b35a-ffc770941286)'
              width='52'
              height='24'
            />
          </svg>
          {/* A span element with a set of CSS classes*/}
          <span className='relative'>{"Let's"}</span>
        </span>{' '}
        {/* A string with some text */}
        Get You Invested!
      </h2>
      {/* A paragraph with a set of CSS classes */}
      <p className='text-base text-gray-700 md:text-lg'>
        Let us do the heavy lifting while your investment works for you <br />
        {/* A string with some text */}
        because we believe investing should be easy and profitable.
      </p>
    </div>
  )
}

// Exporting the InvestmentHeader component as the default export
export default InvestmentHeader
