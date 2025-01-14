import Link from 'next/link'
import ThemeChanger from './DarkSwitch'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'

const Navbar = () => {
  const navigation = [
    '¿Qué es Trekkkr?',
    'FAQ'
  ]

  return (
    <div className='w-full bg-white dark:bg-trueGray-900 sticky top-0'>
      <nav className='container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link className='logo-dark' href='/'>
                  <Image
                    src='/logo.png'
                    alt='Trekkkr logo'
                    width='120'
                    height='60'
                    className='w-24'
                  />
                </Link>
                <Link className='logo-light' href='/'>
                  <Image
                    src='/logo-white.png'
                    alt='Trekkkr logo'
                    width='120'
                    height='60'
                    className='w-24'
                  />
                </Link>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto text-gray-500 rounded-lg lg:hidden hover:text-[#EC5153] focus:text-[#EC5153] focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-wrap w-full my-5 lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={`#${item}`} className='w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-[#EC5153] focus:text-[#EC5153] focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none'>
                        {item}
                      </Link>
                    ))}
                    <Link href='#waitlist' className='w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md lg:ml-5'>
                      Waitlist
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <li className='mr-3 nav__item' key={index}>
                <Link href={`#${menu}`} className='inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-[#EC5153] hover:bg-gray-50 focus:text-[#EC5153] focus:bg-gray-50 focus:outline-none dark:focus:bg-gray-800'>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          <Link href='#waitlist' className='px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md md:ml-5'>
            Waitlist
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
