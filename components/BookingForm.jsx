// pages/booking.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BookingForm.module.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    fromAirport: '',
    toAirport: '',
    dateOfTravel: '',
    numberOfPassengers: 1
  });

  const airports = ['JFK - New York', 'LAX - Los Angeles', 'DCA - Washington D.C.', 'LHR - London', 'CDG - Paris'];
  const router = useRouter();
  const handleChange = (event) => {
    const { name, value } = event.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/PricePridiction');
    // Add your booking logic or API call here
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <select className={styles.inputform} name="fromAirport" value={formData.fromAirport} onChange={handleChange} required>
          <option value="">From Where?</option>
          {airports.map(airport => (
            <option key={airport} value={airport}>{airport}</option>
          ))}
          </select>
          

        <select className={styles.inputform} name="toAirport" value={formData.toAirport} onChange={handleChange} required>
          <option value="">To Where?</option>
          {airports.map(airport => (
            <option key={airport} value={airport}>{airport}</option>
          ))}
        </select>

        
        <input
          type="date"
          name="dateOfTravel"
          value={formData.dateOfTravel}
          onChange={handleChange}
          className={styles.inputform}
          required
        />

       
        <input
          type="number"
          name="numberOfPassengers"
          value={formData.numberOfPassengers}
          min="1"
          max="10"
          onChange={handleChange}
          className={styles.inputform}
          required
        />

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
}
