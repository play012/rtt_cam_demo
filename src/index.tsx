import React from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

import logo from './logo.png';
import { Model } from './Ybot';
import PosenetCam from './PosenetCam';

let kp: any;
const mapJoints = (keypoints: any) => {
  kp = keypoints;
};
const getJoints = () => {
  return kp;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

document.body.classList.add('bg-slate-800', 'flex', 'flex-col', 'min-h-screen', 'justify-center', '-translate-y-[100px]');

root.render(
  <React.StrictMode>
    <header className='text-center'>
      <img src={logo} className='h-16 mx-auto' alt='logo' />
      <div className='text-center antialiased text-white w-90 m-4'>
        <p>Demo for mapping 3D avatars to webcam poses</p>
        <p>2022 // <a href='https://github.com/play012' className='text-pink-500'>Stefan Friesen</a></p>
      </div>
    </header>

    <div className='w-[267px] mx-auto m-4 -scale-x-100'>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Model getJoints={getJoints}/>
      </Canvas>
    </div>
    <PosenetCam mapJoints={mapJoints}/>
    
  </React.StrictMode>
);