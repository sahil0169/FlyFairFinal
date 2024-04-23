
'use client'
import React, { useState } from 'react';
import Topmenu from '@/components/Topmenu';
import styles from './search.module.css';
import Chart from './rushchart';
export default function Search() {
  const [airportCode, setAirportCode] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);  // State to track submission
  const [randomNumber, setRandomNumber] = useState(null);
  const [chartData, setChartData] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);  // Set to true when form is submitted
  };

  const generateRandomNumber1 = () =>{
    const no= Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    return no.toString();
  }
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    setRandomNumber(number);

    let randomNumbers = [];
    for (let i = 0; i < 100; i++) {
    randomNumbers.push(generateRandomNumber1()); // Adjust range as needed
    }
    
    setChartData({
      labels: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'],
      data:  randomNumbers });
  };
  return (

    <div>
      <img src='top.png' className="top" />
          <Topmenu/>
      <div className={styles.container}>
        <div className={styles.price}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="airportCode">Airport Code:</label>
          <input
            type="text"
            id="airportCode"
            value={airportCode}
            onChange={e => setAirportCode(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
          />
        </div>
          <button onClick={generateRandomNumber} type="submit" className={styles.button}>Search</button>
          </form>
          <div className={styles.graph}>
            {randomNumber !== null && <p style={{ marginLeft:'450px', fontSize: '24px',color:'purple' }}>Expected Rush : {randomNumber}</p>}
            {chartData && <Chart chartData={chartData} />}
          </div>
         
          </div>
      </div>
      </div>
  );
}






// const Predict = () => {
//     const [gateNumber, setGateNumber] = useState('');
//     const [dateOfTravel, setDateOfTravel] = useState('');
//     const [timeOfTravel, setTimeOfTravel] = useState('');
//     const [prediction, setPrediction] = useState(null);

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await fetch('/api', {
//             method: 'POST',
            
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 gateNumber,
//                 dateOfTravel,
//                 timeOfTravel,
//             }),
//         });
//         const data = await response.json();
//         setPrediction(data.predictedPassengers);
//     };

//     return (
//         <div>
//             <h1>Predict Passenger Count</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="number"
//                     value={gateNumber}
//                     onChange={(e) => setGateNumber(e.target.value)}
//                     placeholder="Enter gate number"
//                 />
//                 <input
//                     type="date"
//                     value={dateOfTravel}
//                     onChange={(e) => setDateOfTravel(e.target.value)}
//                 />
//                 <input
//                     type="time"
//                     value={timeOfTravel}
//                     onChange={(e) => setTimeOfTravel(e.target.value)}
//                 />
//                 <button type="submit">Predict</button>
//             </form>
//             {prediction && <p>Predicted number of passengers: {prediction}</p>}
//         </div>
//     );
// };

// // export default Predict;

