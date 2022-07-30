import React from 'react';
import ReactDOM from 'react-dom/client';
import Webcam from "react-webcam";

import './index.css';
import logo from './logo.png';
import ThreeJS from './ThreeJS';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.body.classList.add('bg-slate-800', 'flex', 'flex-col', 'min-h-screen', 'justify-center');

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
    <Webcam className='mx-auto'
      width={267}
      mirrored={true}/>
  </React.StrictMode>
);