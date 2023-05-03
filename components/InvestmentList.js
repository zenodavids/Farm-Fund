// Importing necessary icons from react-icons
import { MdGrass } from 'react-icons/md'
import { FaSeedling } from 'react-icons/fa'
import { GiFruitTree } from 'react-icons/gi'

// Declaring a functional component named InvestmentTable, which accepts props 'investments' and 'withdrawInvestment'
const InvestmentTable = ({ investments, withdrawInvestment }) => {
  // Returning the JSX code that will be rendered on the browser
  return (
    <div>
      {/* Header for the table */}
      <h2 className='max-w-lg my-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
        View Your Investments
      </h2>
      <div className='overflow-x-auto '>
        <div className='min-w-screen h-auto w-full  flex items-center justify-center bg-gray-100 font-sans overflow-hidden'>
          <div className='w-full lg:w-5/6'>
            {/* Creating a table with a shadow effect */}
            <div className='bg-white shadow-md rounded '>
              <table className='min-w-max w-full table-auto'>
                {/* Defining the header row */}
                <thead>
                  <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                    <th className='py-3 px-2 text-left'>Plan</th>
                    <th className='py-3 px-2 text-left'>Amount</th>
                    <th className='py-3 px-2 text-center'>Current Interest</th>
                    <th className='py-3 px-2 text-center'>Days Left</th>
                    <th className='py-3 px-2 text-center'>Status</th>
                  </tr>
                </thead>
                {/* Creating table rows for each investment */}
                {investments.length > 0 &&
                  investments.map((user, idx) => (
                    <tbody
                      key={idx}
                      className='text-gray-600 text-sm font-light'
                    >
                      <tr className='border-b border-gray-200 hover:bg-gray-100'>
                        {/* Displaying plan icon based on interest rate */}
                        <td className='py-3 px-6 text-left whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className='mr-2'>
                              {' '}
                              {user.interestRate === 2 && (
                                <FaSeedling color='#008000' />
                              )}
                              {user.interestRate === 5 && (
                                <MdGrass color='#008000' />
                              )}
                              {user.interestRate === 12 && (
                                <GiFruitTree color='#008000' />
                              )}
                            </div>
                          </div>
                        </td>
                        {/* Displaying the amount of ether staked */}
                        <td className='py-3 px-6 text-left'>
                          <div className='flex items-center'>
                            <span>{user.etherStaked}</span>
                          </div>
                        </td>
                        {/* Displaying the current interest earned */}
                        <td className='py-3 px-6 text-center'>
                          <div className='flex items-center justify-center'>
                            {user.etherInterest}%
                          </div>
                        </td>
                        {/* Displaying the number of days remaining */}
                        <td className='py-3 px-6 text-center'>
                          <div className='flex item-center justify-center'>
                            <div className='w-4 mr-2 transform '>
                              {user.daysRemaining}
                            </div>
                          </div>
                        </td>
                        {/* Displaying the investment status */}
                        <td className='py-3 px-6 text-center'>
                          {user.open ? (
                            <span
                              onClick={() =>
                                withdrawInvestment(user.investmentId)
                              }
                              className='bg-[#008000] text-white py-1 px-3 rounded-full text-xs  hover:scale-110 cursor-pointer'
                            >
                              Withdraw
                            </span>
                          ) : (
                            <span
                              onClick={() =>
                                withdrawInvestment(user.investmentId)
                              }
                              className=' text-[#777] py-1 px-3 rounded-full text-xs text-extrabold'
                            >
                              Withdrawn
                            </span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentTable
