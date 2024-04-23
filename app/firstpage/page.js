// pages/home.js
import React from 'react';
import Topmenu from '@/components/Topmenu';
import BookingForm from '@/components/BookingForm';

export default function firstpage() {
  return (
      <div>
          <img src='top.png' className="top" />
          <Topmenu/>
          <img src="yjs.png" className="yjs"></img>
          <BookingForm/>
    </div>
  );
}
