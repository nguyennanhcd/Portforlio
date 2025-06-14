'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { info } from '@/constants/info'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeInOut',
        },
      }}
      className='py-6 '
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form
              action=''
              className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'
            >
              <h3 className='text-4xl text-accent-default'>
                Let&rsquo;s work together
              </h3>
              <p className='text-white/60'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi eligendi accusamus
                odio quibusdam quod cum sint, ullam maiores
                quae magnam est, repellendus facere
                asperiores labore neque esse, voluptate modi
                tempora?
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='firstName'
                  placeholder='First name'
                />
                <Input
                  type='lastName'
                  placeholder='Last name'
                />
                <Input type='email' placeholder='Email' />
                <Input type='phone' placeholder='Phone' />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>
                      Select a service
                    </SelectLabel>
                    <SelectItem value='est'>
                      Web Development
                    </SelectItem>
                    <SelectItem value='cst'>
                      SEO{' '}
                    </SelectItem>
                    <SelectItem value='mst'>
                      MMO Tools
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*text area */}
              <Textarea
                className='h-[200px]'
                placeholder='Type your message here...'
              />
              {/*button */}
              <Button className='max-w-40' size='md'>
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center gap-6'
                >
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md text-accent-default flex justify-center items-center'>
                    <div className='text-[28px]'>
                      {item.icon}
                    </div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>
                      {item.title}
                    </p>
                    <h3 className='text-xl'>
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
