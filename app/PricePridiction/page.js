// pages/home.js
'use client'
import React from 'react';
import Topmenu from '@/components/Topmenu';
import styles from './price.module.css';
import { useState, useEffect } from 'react';
import Chart from './flightchart';
// const Chart = dynamic(() => import('./flightchart'), { ssr: false });

const FlightPrices = () => {
    const [formData, setFormData] = useState({
        departureAirport: '',
        arrivalAirport: '',
        dateOfTravel: ''
    });
    const [chartData, setChartData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateRandomNumber1 = () =>{
        const no= Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000;
        return no.toString();
      }
    const handleSubmit = async (event) => {
        event.preventDefault();

        let randomNumbers = [];
    for (let i = 0; i < 100; i++) {
    randomNumbers.push(generateRandomNumber1()); // Adjust range as needed
    }
         setChartData({labels: ['01/02/24', '02/02/24', '03/02/24', '04/02/24', '05/02/24', '06/02/24', '07/02/24', '08/02/24', '09/02/24', '10/02/24', '11/02/24', '12/02/24', '13/02/24', '14/02/24', '15/02/24', '16/02/24', '17/02/24', '18/02/24', '19/02/24', '20/02/24', '21/02/24', '22/02/24', '23/02/24', '24/02/24', '25/02/24', '26/02/24', '27/02/24', '28/02/24'],
         data:randomNumbers});
    };

    return (
        <div>
            <img src='top.png' className="top" />
          <Topmenu />
          
            
            <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                     className={styles.inputform}
                    type="text"
                    name="departureAirport"
                    value={formData.departureAirport}
                    onChange={handleChange}
                    placeholder="Departure Airport"
                    required
                />
                    <input
                    className={styles.inputform}
                    type="text"
                    name="arrivalAirport"
                    value={formData.arrivalAirport}
                    onChange={handleChange}
                    placeholder="Arrival Airport"
                    required
                />
                    <input
                     className={styles.inputform}
                    type="date"
                    name="dateOfTravel"
                    value={formData.dateOfTravel}
                    onChange={handleChange}
                    required
                />
                <button className={styles.button} type="submit">Get Prices</button>
                </form>
            </div>
            {chartData && <Chart chartData={chartData} />}
            
        </div>
    );
};

export default FlightPrices;