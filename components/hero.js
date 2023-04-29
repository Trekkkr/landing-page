import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import heroImg from '../public/images/hero.jpg'

import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <>
      <Container className='flex flex-wrap '>
        <div className='flex items-center w-full lg:w-1/2'>
          <div className='max-w-2xl mb-8'>
            <h1 className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
              Descubre nuevos caminos
            </h1>
            <p className='py-8 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'>
              La plataforma para senderistas que te permite buscar, organizar y acceder a las mejores aventuras
            </p>

            <div className='flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row'>
              <Link
                href='#waitlist'
                className='px-8 py-4 text-lg font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md '
              >
                Accede a la waitlist
              </Link>
              <div
                className='flex items-center space-x-2 text-gray-500 dark:text-gray-400'
              >
                <RocketLaunchIcon className='h-9' />
                <span> Fase beta</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center w-full lg:w-1/2'>
          <div className=''>
            <Image
              src={heroImg}
              width='616'
              height='617'
              className='object-cover'
              alt='Hero Illustration'
              loading='eager'
              placeholder='blur'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero
