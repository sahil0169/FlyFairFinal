"use client"
import React from "react"
import { useRouter } from 'next/navigation';
import styles from './Topmenu.module.css';
export default function Topmenu() {

    const router = useRouter();
    const handleSubmit1 = (event) => {
        event.preventDefault(); 
          router.push('/FlightModule');
    };
    const handleSubmit2 = (event) => {
        event.preventDefault(); 
          router.push('/PricePridiction');
        };
    const handleSubmit3 = (event) => {
        event.preventDefault(); 
          router.push('/AirportRush');
    };
    const handleSubmit4 = (event) => {
        event.preventDefault(); 
          router.push('/');
    };
    const handleSubmit5 = (event) => {
        event.preventDefault(); 
          router.push('/firstpage');
    };
    return (
        <div className="topmenu">
            <img onClick={handleSubmit5} src="logo1.png" className="logo1" />
            <div className="topmenu1">
            <form  className={styles.form1} >
                <button onClick={handleSubmit1} type="submit" className={styles.button1} >Flights </button>
                <button onClick={handleSubmit2} type="submit" className={styles.button2} >Price Prediction </button>
                <button onClick={handleSubmit3} type="submit" className={styles.button3} >Airport Rush Analysis </button>
                <button onClick={handleSubmit4} type="submit" className={styles.button4}>Login </button>
                    <button type="submit" className={styles.button5} >Sign Up </button>
                    </form>
                    
                
            </div>
                    
        </div>
    )
}