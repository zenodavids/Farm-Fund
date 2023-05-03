/* eslint-disable @next/next/no-img-element */
// This defines a React functional component called HeroBanner
const HeroBanner = () => {
  // This returns the JSX code that defines the HeroBanner component
  return (
    // This div contains the main content of the component, including a grid layout
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      {/* This grid defines two columns for the content */}
      <div className='grid gap-10 lg:grid-cols-2'>
        {/* This div contains the left column content */}
        <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
          {/* This div contains the main heading of the banner */}
          <div className='max-w-xl mb-6'>
            {/* This is the main heading text with some styling */}
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Let us handle the {/* This span contains a highlighted text */}
              <span className='inline-block text-deep-purple-accent-400'>
                HARDWORK
              </span>{' '}
              <br />
              for You!
            </h2>
          </div>
        </div>
        {/* This div contains the right column content */}
        <div className='flex items-center justify-center -mx-4 lg:pl-8'>
          {/* This div contains two images in a vertical column */}
          <div className='flex flex-col items-end px-3'>
            {/* This is the first image with some styling */}
            <img
              className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
              src='https://images.unsplash.com/photo-1556762163-542910c8765d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt=''
            />
            {/* This is the second image with some styling */}
            <img
              className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
              src='https://images.unsplash.com/photo-1551649001-7a2482d98d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
              alt=''
            />
          </div>
          {/* This div contains the third image with some styling */}
          <div className='px-3'>
            <img
              className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
              src='https://images.unsplash.com/photo-1606041974734-0341c2d2d988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
