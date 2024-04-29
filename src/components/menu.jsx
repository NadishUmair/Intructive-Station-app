import React from 'react';
import './Main.css'
const backgroundVideo = "./menu bg.mp4";
console.log(backgroundVideo);

export const Menu = () => {
  return (
    <div className='menu-section' id='menuSection' style={{backgroud:URL(backgroundVideo)}}>
      
    </div>
  );
};
