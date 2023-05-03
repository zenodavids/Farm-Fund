// Importing the necessary dependencies from React and Next.js
import Link from 'next/link'
import { useState } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'

// This component renders individual items in the navigation bar
const NavBarItem = ({ title, classprops, link }) => (
  // Creating an <li> element with a Link component wrapped around the item title

  <li
    // Setting the class name of the <li> element with dynamic classes
    className={`font-medium tracking-wide text-[#777] transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer ${classprops}`}
  >
    <Link href={`${link}`}>{title}</Link>
  </li>
)
// This component renders the entire navigation bar
export const Navbar = (props) => {
  // Creating a state variable to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Creating a container element for the entire navigation bar
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Creating a Logo for the Navbar */}
        <Link
          href='/'
          aria-label='LOGIC'
          title='LOGIC'
          className='inline-flex items-center'
        >
          <span className='ml-2 text-xl font-bold tracking-wide uppercase'>
            FarmFund
          </span>
        </Link>
        {/* Creating the navigation items */}
        <ul className='flex items-center hidden space-x-8 lg:flex'>
          {/* Mapping through an array of navigation items to create individual NavBarItem components */}
          {[
            // TODO : You can add multiple pages, following the below sample
            // { title: 'Home', link: '#' },
            // { title: 'NFTs', link: '#' },
            // { title: 'About us', link: '#' },
          ].map((item, index) => (
            <NavBarItem
              key={item.title + index}
              title={item.title}
              link={item.link}
            />
          ))}
          {/* Conditionally rendering a Connect Wallet button based on whether the user is currently connected or not */}
          <li>
            {props.walletConnected() ? (
              <p
                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none cursor-pointer'
                aria-label='Connected'
                title='Connected'
              >
                Wallet Connected
              </p>
            ) : (
              <p
                className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none cursor-pointer'
                aria-label='Connect Wallet'
                title='Connect Wallet'
                onClick={() => props.connect()}
              >
                Connect Wallet
              </p>
            )}
          </li>
        </ul>

        {/* Creating the mobile menu icon */}
        <div className='lg:hidden'>
          {/* Conditionally rendering the mobile menu icon based on whether the mobile menu is open or not */}
          {!isMenuOpen && (
            <CgMenuGridR
              fontSize={50}
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline cursor-pointer'
              onClick={() => setIsMenuOpen(true)}
            />
          )}

          {/* Creating the mobile menu */}
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      href='#'
                      aria-label='LOGIC'
                      title='LOGIC'
                      className='inline-flex items-center'
                    >
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        LOGIC
                      </span>
                    </Link>
                  </div>
                  <div>
                    <AiOutlineClose
                      fontSize={28}
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline cursor-pointer'
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    {[
                      // TODO : You can add multiple pages, following the below sample
                      // { title: 'NFTs', link: '#' },
                      // { title: 'About us', link: '#' },
                    ].map((item, index) => (
                      <NavBarItem
                        key={item.title + index}
                        title={item.title}
                        link={item.link}
                      />
                    ))}
                    <li>
                      {props.walletConnected() ? (
                        <p
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor-pointer'
                          aria-label='Connected'
                          title='Connected'
                        >
                          Wallet Connected
                        </p>
                      ) : (
                        <p
                          className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor-pointer'
                          aria-label='Connect Wallet'
                          title='Connect Wallet'
                          onClick={() => props.connect()}
                        >
                          Connect Wallet
                        </p>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
