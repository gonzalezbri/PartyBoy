'use client';

import { Carousel } from 'flowbite-react';

export default function SlidingEvents() {
  return (
    <Carousel slideInterval={3000}>
      <img
        alt="..."
        src="https://t4.ftcdn.net/jpg/00/25/43/37/360_F_25433735_sXEoeqMVmQc9TUIeLVKXei3oQY6NY3jH.jpg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
      />
      <img
        alt="..."
        src="https://t4.ftcdn.net/jpg/00/25/43/37/360_F_25433735_sXEoeqMVmQc9TUIeLVKXei3oQY6NY3jH.jpg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://t4.ftcdn.net/jpg/00/25/43/37/360_F_25433735_sXEoeqMVmQc9TUIeLVKXei3oQY6NY3jH.jpg"
      />
    </Carousel>
  )
}


