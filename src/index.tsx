import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './logo.png';
import ThreeJS from './ThreeJS';
import PosenetCam from './PosenetCam';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.body.classList.add('bg-slate-800', 'flex', 'flex-col', 'min-h-screen', 'justify-center', '-translate-y-[100px]');

root.render(
  <React.StrictMode>
    <header className='text-center'>
      <img src={logo} className='h-16 mx-auto' alt='logo' />
      <div className='text-center antialiased text-white w-90 p-4'>
        <p>Demo for mapping 3D avatars to webcam poses</p>
        <p>2022 // <a href='https://github.com/play012' className='text-pink-500'>Stefan Friesen</a></p>
      </div>
    </header>

    <ThreeJS/>
    <PosenetCam/>
    
  </React.StrictMode>
);