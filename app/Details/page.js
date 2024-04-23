// pages/booking.js
'use client'
import React, { useState } from 'react';
import Topmenu from '@/components/Topmenu';
import { useRouter } from 'next/navigation';
import styles from './details.module.css';
export default function Booking() {
  const [passenger, setPassenger] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    email: '',
    phone: '',
    emergencyContact: {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    }
  });
  const router = useRouter();
  

  const handleInputChange = (e, field, nested = false) => {
    if (nested) {
      setPassenger(prev => ({
        ...prev,
        emergencyContact: {
          ...prev.emergencyContact,
          [field]: e.target.value
        }
      }));
    } else {
      setPassenger({ ...passenger, [field]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push('/Seats'); 
   
  };
//   const handleRedirect = () => {
//     // Specify the path to redirect
//     r
// };

  return (
    <div>
      <img src='top.png' className="top" />
      <Topmenu/>
     
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
          <h2 className={styles.h1}>Passenger Information</h2>
          <h5>Enter the required information for each traveler and be sure that it exactly matches <br></br> the government-issued ID presented at the airport.</h5>
        <div>
          <input
             className={styles.formInput} 
            type="text"
            placeholder="First Name"
            value={passenger.firstName}
            onChange={e => handleInputChange(e, 'firstName')}
            
            required
          />
            <input
           className={styles.formInput} 
            type="text"
            placeholder="Middle Name"
            value={passenger.middleName}
            onChange={e => handleInputChange(e, 'middleName')}
          />
                  <input
                      className={styles.formInput} 
            type="text"
            placeholder="Last Name"
            value={passenger.lastName}
            onChange={e => handleInputChange(e, 'lastName')}
            required
          />
          <br></br>
                  <input
                     className={styles.formInput} 
            type="date"
            value={passenger.dob}
            onChange={e => handleInputChange(e, 'dob')}
            required
          />
          <br></br>
                  <input
                     className={styles.formInput} 
            type="email"
            placeholder="Email Address"
            value={passenger.email}
            onChange={e => handleInputChange(e, 'email')}
            required
          />
                  <input
                     className={styles.formInput} 
            type="tel"
            placeholder="Phone Number"
            value={passenger.phone}
            onChange={e => handleInputChange(e, 'phone')}
            required
          />
        </div>
        <h2 className={styles.h1}>Emergency Contact Information</h2>
        <div>
                  <input
                      className={styles.formInput} 
            type="text"
            placeholder="First Name"
            value={passenger.emergencyContact.firstName}
            onChange={e => handleInputChange(e, 'firstName', true)}
            required
          />
                  <input
                      className={styles.formInput} 
            type="text"
            placeholder="Last Name"
            value={passenger.emergencyContact.lastName}
            onChange={e => handleInputChange(e, 'lastName', true)}
            required
          />
          <br></br>
                  <input
                      className={styles.formInput} 
            type="email"
            placeholder="Email Address"
            value={passenger.emergencyContact.email}
            onChange={e => handleInputChange(e, 'email', true)}
            required
          />
                  <input
                     className={styles.formInput} 
            type="tel"
            placeholder="Phone Number"
            value={passenger.emergencyContact.phone}
            onChange={e => handleInputChange(e, 'phone', true)}
            required
          />
          </div>
          <h5>Bag Information<br></br><br></br>Each passenger is allowed one free carry-on bag and one personal item.
            <br></br> First checked bag for each passenger is also free. Second bag check fees<br></br>
            are waived for loyalty program members. See the full bag policy.</h5>
          <button className={styles.formButton} type="submit">Submit</button>
          <button onClick={handleSubmit} className={styles.formButton} type="button" >
          Select Seats
          </button>
              </form>
       
              {/* <form onSubmit={(e) => {
                    e.preventDefault();  // Prevent form from submitting traditionally
                    handleRedirect();
              }}>
                
              
        </form> */}
        <div className={styles.img}>
        <img className={styles.bagimg} src='info.png'></img>
          <img className={styles.bagimg1} src='bag.png'></img>
        </div>
      </div>
    </div>
  );
}
