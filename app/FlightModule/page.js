// // pages/flights.js
'use client'
 import Topmenu from '@/components/Topmenu';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './flights.module.css';
import initialFlights from './flightsdata.js'

export default function FlightSearch() {
    const [flights, setFlights] = useState(initialFlights);
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [date, setDate] = useState('');
    const [adults, setAdults] = useState('');
    const [priceOrder, setPriceOrder] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [selectedAirline, setSelectedAirline] = useState('');
  const [stops, setStops] = useState('');
   const [showResults, setShowResults] = useState(false);
   const router = useRouter();
    useEffect(() => {
      let filteredFlights = [...initialFlights];
  
      if (departure) {
          filteredFlights = filteredFlights.filter(flight => flight.departure === departure);
      }
  
      if (arrival) {
          filteredFlights = filteredFlights.filter(flight => flight.arrival === arrival);
      }
  
      if (priceOrder === 'lowToHigh') {
          filteredFlights.sort((a, b) => a.price - b.price);
      } else if (priceOrder === 'highToLow') {
          filteredFlights.sort((a, b) => b.price - a.price);
      }
  
      if (selectedAirline) {
          filteredFlights = filteredFlights.filter(flight => flight.airline === selectedAirline);
      }
  
      if (stops) {
          filteredFlights = filteredFlights.filter(flight => flight.stops.toString() === stops);
      }
  
      if (departureTime) {
          const timeRanges = {
              morning: ['00:00', '12:00'],
              afternoon: ['12:01', '17:00'],
              evening: ['17:01', '21:00'],
              night: ['21:01', '23:59']
          };
          const [start, end] = timeRanges[departureTime];
          filteredFlights = filteredFlights.filter(flight => {
              const startTime = flight.timing.split(' - ')[0];
              return startTime >= start && startTime <= end;
          });
      }
  
      setFlights(filteredFlights);
      // setShowResults(true);
  }, [departure, arrival, priceOrder, selectedAirline, stops, departureTime]);
  

    const handleSubmit = (event) => {
      event.preventDefault();
      setShowResults(true);
        // Implement the search based on the departure, arrival, date, and adults
        //console.log({ departure, arrival, date, adults });
  };
  const handleRedirect = () => {
    router.push('/Details');  // Specify the path to redirect
};

  return (
    <div>
      <img src='top.png' className="top" />
      <Topmenu/>
     
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <select className={styles.inputform} onChange={e => setDeparture(e.target.value)}>
                    <option value="">Departure Airport</option>
                    <option value="DEL">Delhi</option>
                    <option value="BOM">Mumbai</option>
                    <option value="BLR">Bangalore</option>
                    <option value="HYD">Hyderabad</option>
                    <option value="MAA">Chennai</option>
                    <option value="CCU">Kolkata</option>
                    <option value="COK">Kochi</option>
                    <option value="AMD">Ahmedbad</option>
                    <option value="GOI">Goa</option>
                    <option value="JAI">Jaipur</option>
                    <option value="PNQ">Pune</option>
                    <option value="ATQ">Amritsar</option>
                    {/* add other airports */}
                </select>
                <select className={styles.inputform} onChange={e => setArrival(e.target.value)}>
                <option value="">Departure Airport</option>
                    <option value="DEL">Delhi</option>
                    <option value="BOM">Mumbai</option>
                    <option value="BLR">Bangalore</option>
                    <option value="HYD">Hyderabad</option>
                    <option value="MAA">Chennai</option>
                    <option value="CCU">Kolkata</option>
                    <option value="COK">Kochi</option>
                    <option value="AMD">Ahmedbad</option>
                    <option value="GOI">Goa</option>
                    <option value="JAI">Jaipur</option>
                    <option value="PNQ">Pune</option>
                    <option value="ATQ">Amritsar</option>
                    {/* add other airports */}
                </select>
                <input className={styles.inputform} type="date" value={date} onChange={e => setDate(e.target.value)} />
                <input className={styles.inputform} type="number" placeholder="No of adults" value={adults} onChange={e => setAdults(e.target.value)} />
                <button className={styles.button} type="submit" onSubmit={handleSubmit}>Search</button>
            </form>
        
            <div className={styles.filters}>
                <select className={styles.dropdown} onChange={e => setPriceOrder(e.target.value)}>
                    <option value="">Price Filter</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
                <select className={styles.dropdown} onChange={e => setDepartureTime(e.target.value)}>
                    <option value="">Departure Timings</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="night">Night</option>
                </select>
                <select className={styles.dropdown} onChange={e => setSelectedAirline(e.target.value)}>
                    <option value="">Airlines</option>
                    <option value="Emirates">Emirates</option>
                    <option value="Indigo">Indigo</option>
                    <option value="Akasa">Akasa</option>
                    <option value="Air India">Air India</option>
                    <option value="SpiceJet">Spice Jet</option>        
                    <option value="Jet Airways">Jet Airways</option>      
                     <option value="Vistara">Vistara</option>
                </select>
                <select className={styles.dropdown} onChange={e => setStops(e.target.value)}>
                    <option value="">Stops</option>
                    <option value="0">No Stop</option>
                    <option value="1">1 Stop</option>
                </select>
        </div>
        { showResults && (
          <div className={styles.flight}>
            <div>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Airline</th>
                  <th>Flying Start and End Time</th>
                  <th>No of Stops</th>
                  <th>Total Cost of the Flight</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight, index) => (
                  <tr key={index}>
                    <td>{flight.airline}</td>
                    <td>{flight.timing}</td>
                    <td>{flight.stops === 0 ? "Non-stop" : `${flight.stops} stops`}</td>
                    <td>{flight.price}</td>
                  </tr>
                ))}
              </tbody>
              </table>
              <form onSubmit={(e) => {
                    e.preventDefault();  // Prevent form from submitting traditionally
                    handleRedirect();
              }}>
                
                <button className={styles.button1} type="submit" >Search</button>
                </form>
             
              </div>
            <img src="flightd.png" className={styles.flightimg}></img>
          </div>
        )}
        </div>
     </div>
   
    
    );
}

