'use client'

import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

// components
import Social from '@/components/Social'
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'
import TypeWriter from '@/components/TypeWritter'

// constant
import { mySelf } from '@/constants/mySelf'

export default function Home() {
  return (
    <section className='h-full xl:-mt-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-4'>
          {/*text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span>Software Developer</span>
            <h1 className='h1 mb-6'>
              Hi,I&rsquo;m <br />{' '}
              <TypeWriter mySelf={mySelf} />
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              I excel at crafting elegant digital
              experiences and I am proficient in various
              programming languages and technologies
            </p>
            {/*btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/*photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}
