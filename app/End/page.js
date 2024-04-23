// pages/home.js
import React from 'react';
import Topmenu from '@/components/Topmenu';
import BookingForm from '@/components/BookingForm';
import styles from './end.module.css';
export default function end() {
  return (
      <div>
          <img src='top.png' className="top" />
          <Topmenu />
          <img src="end.png" className={styles.end}></img>
          
    </div>
  );
}
