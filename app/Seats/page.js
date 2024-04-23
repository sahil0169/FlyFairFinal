// pages/seat-selection.js
'use client'
import React, { useState } from 'react';

import styles from './Seats.module.css';
import { useRouter } from 'next/navigation';
import Topmenu from '@/components/Topmenu';


  
const SeatSelection = () => {
    // Create initial state for seats in a single-aisle airplane configuration
    const initialState = new Array(22).fill(null).map(() => new Array(6).fill(0));

    const [seats, setSeats] = useState(initialState);

    const toggleSeatSelection = (rowIndex, seatIndex) => {
        setSeats(currentSeats => currentSeats.map((row, ri) =>
            ri === rowIndex ? row.map((seat, si) => si === seatIndex ? seat ^ 1 : seat) : row
        ));
    };
    const router = useRouter();
    const handleSubmit = (event) => {
        router.push('/Payment'); 
      };
    return (
        <div>
            <img src='top.png' className="top" />
           <Topmenu/>
         <div className={styles.container}>
            <img className={styles.leftimg} src='leftplane.png'></img>
            {/* <h1>Seat Selection</h1> */}
            <div className={styles.plane}>
                {seats.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.row}>
                        {row.map((seat, seatIndex) => (
                            <>
                                <div key={`${rowIndex}-${seatIndex}`}
                                     className={`${styles.seat} ${seat === 1 ? styles.taken : styles.available}`}
                                     onClick={() => toggleSeatSelection(rowIndex, seatIndex)}>
                                    {rowIndex + 1}{String.fromCharCode(65 + seatIndex)}
                                </div>
                                {seatIndex === 2 && <div key={`aisle-${rowIndex}`} className={styles.aisle}></div>}
                            </>
                        ))}
                    </div>
                ))}
            </div>
                <img className={styles.rightimg} src='rightplane.png'></img>
                <div className={styles.flex}>
                <img className={styles.seatimg} src='seat.png'></img>
                <form onClick={handleSubmit}>
                <button className={styles.formButton} type="button" >
          Make Payment
          </button>
                    </form>
                    </div>
            </div>
     </div>
    );
};

export default SeatSelection;