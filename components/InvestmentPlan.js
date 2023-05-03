// This is a functional component named InvestmentPlan that receives props.
const InvestmentPlan = ({ icon, onClick, plan, duration, desc }) => {
  // This line creates a new constant called Icon and assigns the value of the icon prop to it.
  const Icon = icon

  // This is the root div of the component with some classes.
  return (
    <div className='relative text-center'>
      {/* This div creates a circle containing an SVG icon */}
      <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20'>
        <svg
          className='w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16'
          stroke='currentColor'
          viewBox='0 0 52 52'
        >
          {/* This line renders the icon passed as a prop */}
          <Icon size={50} className='text-[#008000]' />
        </svg>
      </div>

      {/* This h6 displays the name of the investment plan */}
      <h6 className='mb-2 text-2xl font-extrabold'>{plan}</h6>

      {/* This h6 displays the duration of the investment plan */}
      <h6 className='mb-2 text-2xl font-normal'>{duration}</h6>

      {/* This p displays the description of the investment plan */}
      <p className='max-w-md mb-3 text-sm text-gray-900 sm:mx-auto'>{desc}</p>

      {/* This p is a clickable text that fires a function passed as a prop */}
      <p
        onClick={onClick}
        aria-label=''
        className='inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer animate-bounce hover:animate-none'
      >
        Invest Here.
      </p>

      {/* This div contains an SVG icon */}
      <div className='top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute'>
        <svg
          className='w-8 text-gray-700 transform rotate-90 lg:rotate-0'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          viewBox='0 0 24 24'
        ></svg>
      </div>
    </div>
  )
}

export default InvestmentPlan
