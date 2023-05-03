// Define a React functional component named `Header`
const Header = () => {
  return (
    // Return a JSX element
    <div className='relative'>
      {/* Disable eslint rule for `img` element */}
      {/* Image source is an Unsplash photo */}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src='https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80'
        className='absolute inset-0 object-cover w-full h-full'
        alt=''
      />
      {/* Add a div container for a section */}
      {/* Apply styling using Tailwind CSS class names */}
      <div className='relative bg-opacity-75 bg-deep-purple-accent-700'>
        {/* Add an SVG element for a curved background */}
        {/* Apply styling using Tailwind CSS class names */}
        <svg
          className='absolute inset-x-0 bottom-0 text-white'
          viewBox='0 0 1160 163'
        >
          <path
            fill='currentColor'
            d='M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z'
          />
        </svg>
        {/* Add a div container for the section content */}
        {/* Apply styling using Tailwind CSS class names */}
        <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full :max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          {/* Add a div container for a two-column layout */}
          {/* Apply styling using Tailwind CSS class names */}
          <div className='flex flex-col items-center justify-between xl:flex-row'>
            {/* Add a div container for the left column */}
            {/* Apply styling using Tailwind CSS class names */}
            <div className='w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 py-4'>
              {/* Add a heading */}
              {/* Apply styling using Tailwind CSS class names */}
              <h2 className='max-w-lg mb-6 font-sans text-6xl font-bold tracking-tight text-white sm:text-6xl sm:leading-none '>
                FarmFund
              </h2>
              {/* Add a paragraph */}
              {/* Apply styling using Tailwind CSS class names */}
              <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
                Stake in Agriculture, Reap the Rewards!
              </p>
            </div>
            {/* Add a div container for the right column */}
            {/* Apply styling using Tailwind CSS class names */}
            <div className='w-fullmax-w-xl xl:px-8 xl:w-5/12'>
              <div className='bg-white rounded shadow-2xl p-7 sm:p-10 h-auto '>
                <h3 className='mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl'>
                  Harvest Your Investment
                </h3>
                <p>
                  Get ready to earn{' '}
                  <span className='uppercase text-[#008000] font-bold '>
                    green
                  </span>{' '}
                  while going{' '}
                  <span className='uppercase text-[#008000] font-bold '>
                    green
                  </span>{' '}
                  with FarmFund! FarmFund lets you invest in sustainable farming
                  practices, earning a return on your investment. <br /> With
                  FarmFund, your money is used to plant crops, producing
                  high-quality, organic food that is distributed to investors
                  and consumers alike. <br />
                  FarmFund is committed to using organic farming methods to
                  protect the environment and promote biodiversity.
                  <br />
                  Join us today and stake your claim in the future of
                  agriculture while growing your wealth sustainably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
