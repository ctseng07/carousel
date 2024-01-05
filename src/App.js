import React from 'react';

import Carousel from './components/carousel';

import { about1, about2, about3, about4, about5 } from '../src/assets/images';

function App() {
  const slides = [
    about1,
    about2,
    about3,
    about4,
    about5
  ];

  return (
    <div className='w-[30%] h-full m-auto py-20'>
      <Carousel slides={slides} />
    </div>
  )
}

export default App