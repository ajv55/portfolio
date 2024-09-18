import React from 'react';
import Image from 'next/image';
import style from '../styles.module.css';

const Background = () => {
  return (
    <div className=" absolute z-10  inset-0  overflow-hidden">
      <Image 
        src="/curved.svg" 
        layout="fill" 
        objectFit="cover" 
        alt="Curved Lines Background" 
        className="opacity-10 "
      />
      <div className="absolute inset-0 overflow-hidden">
        <div className={`${style.beam} ${style.beam1}`}></div>
        <div className={`${style.beam} ${style.beam2}`}></div>
        <div className={`${style.beam} ${style.beam3}`}></div>
        <div className={`${style.beam} ${style.beam4}`}></div>
        <div className={`${style.beam} ${style.beam5}`}></div>
        <div className={`${style.beam} ${style.beam6}`}></div>
      </div>
    </div>
  );
};

export default Background;
