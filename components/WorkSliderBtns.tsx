'use client'

import { useSwiper } from 'swiper/react'
import {
  PiCaretLeftBold,
  PiCaretRightBold,
} from 'react-icons/pi'

interface WorkSliderBtnsProps {
  containerStyles: string
  btnStyles: string
}

const WorkSliderBtns = ({
  containerStyles,
  btnStyles,
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper()
  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className='cursor-pointer' />
      </button>
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className='cursor-pointer' />
      </button>
    </div>
  )
}

export default WorkSliderBtns
