import { MdGrass } from 'react-icons/md' // Importing a specific icon from react-icons/md library.
import { FaSeedling } from 'react-icons/fa' // Importing a specific icon from react-icons/fa library.
import { GiFruitTree } from 'react-icons/gi' // Importing a specific icon from react-icons/gi library.

const InvestmentForm = (props) => {
  // Declaring a functional component named InvestmentForm that accepts props as its parameter.
  const {
    onClose, // Destructuring props object to get onClose property.
    InvestmentDuration, // Destructuring props object to get InvestmentDuration property.
    InvestmentPercentage, // Destructuring props object to get InvestmentPercentage property.
    setAmount, // Destructuring props object to get setAmount property.
    invest, // Destructuring props object to get invest property.
    refreshInvestmentList, // Destructuring props object to get refreshInvestmentList property.
  } = props // Destructuring the props object.

  return (
    // Start of JSX block
    <>
      <div
        className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-gray-700 z-50'
        onClick={props.onClose} // Call the onClose function when clicking on the div element.
      >
        <div
          className='bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative'
          onClick={(e) => e.stopPropagation()} // Prevent the click event from bubbling up to the parent element.
        >
          <div className='md:flex items-center'>
            <div className='mt-4 md:mt-0 md:ml-6 text-center md:text-left'>
              <p className='font-bold'>
                You Chose the {InvestmentPercentage} for {InvestmentDuration}{' '}
                days Plan!{' '}
              </p>
              <p className='text-sm text-gray-700 my-8'>
                Invest your funds with us and enjoy guaranteed returns on
                investment of {InvestmentPercentage} for {InvestmentDuration}{' '}
                days. We offer you the security and peace of mind you deserve as
                an investor. While we are confident you will want to keep your
                funds invested until maturity, we understand that unexpected
                circumstances may arise. If you choose to withdraw your
                investment before the maturity date, you will receive a full
                refund of your principal, but no profit. Invest with us today
                and watch your money grow!
              </p>{' '}
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-zip'
                type='text'
                placeholder='0.1'
                onChange={(e) => props.setAmount(e.target.value)} // Call the setAmount function when the input value changes.
              />
            </div>
          </div>
          <div className='text-center mt-4 md:flex md:justify-center'>
            <button
              onClick={() => invest()} // Call the invest function when clicking the button element.
              className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-[#008000] text-white rounded-lg font-semibold text-sm my-8
          md:mt-0 md:order-1'
            >
              Invest Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestmentForm
