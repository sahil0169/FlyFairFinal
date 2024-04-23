'use client'
import React, { useState } from 'react';
import styles from './payment.module.css';
import { useRouter } from 'next/navigation';
import Topmenu from '@/components/Topmenu';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [cardDetails, setCardDetails] = useState({
        nameOnCard: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        saveCard: false,
        email: '',
        password: ''
    });
    const router = useRouter();
    const handleSubmit1 = (event) => {
     
        router.push('/End'); 
       
      };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setCardDetails(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Payment Details:", cardDetails);
        // Here you would typically handle the payment processing or form submission
    };

    return (
    <div>
            <img src='top.png' className="top" />
            <Topmenu/>
      <div className={styles.flex}>
        <div className={styles.container}>
                    <h1 className={styles.h1} >Payment Options</h1>
            <div className={styles.options}>
                {['Credit Card', 'Google Pay', 'Apple Pay', 'PayPal', 'Netbanking'].map(option => (
                    <button key={option} onClick={() => setPaymentMethod(option)}
                        className={`${styles.button} ${paymentMethod === option ? styles.active : ''}`}>
                        {option}
                    </button>
                ))}
            </div>
            {paymentMethod === 'Credit Card' && (
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input className={styles.forminput} type="text" placeholder="Name on Card" name="nameOnCard" value={cardDetails.nameOnCard} onChange={handleInputChange} />
                    <input className={styles.forminput} type="text" placeholder="Card Number" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange} />
                    <input className={styles.forminput} type="text" placeholder="Expiration Date" name="expDate" value={cardDetails.expDate} onChange={handleInputChange} />
                    <input className={styles.forminput} type="text" placeholder="CVV" name="cvv" value={cardDetails.cvv} onChange={handleInputChange} />
                    <label>
                        <input type="checkbox" name="saveCard" checked={cardDetails.saveCard} onChange={handleInputChange} />
                        Save card and create account for later
                    </label>
                        <input className={styles.forminput} type="email" placeholder="Email Address" name="email" value={cardDetails.email} onChange={handleInputChange} />
                        <input className={styles.forminput} type="password" placeholder="Password" name="password" value={cardDetails.password} onChange={handleInputChange} />
                    <button type="submit" className={styles.submitButton}>Submit Payment</button>
                </form>
                    )}
                    
                    <div className={styles.socialLogins}>
                    <h2 className={styles.h1}>------------or--------</h2>
                <button className={styles.socialButton}>Signup with Google</button>
                <button className={styles.socialButton}>Continue with Apple</button>
                <button className={styles.socialButton}>Continue with Facebook</button>
            </div>
                </div >
                <div className={styles.flex1}>
                <img src="info.png" className={styles.image}></img>
                <form onClick={handleSubmit1}>
                <button className={styles.formButton} type="button" >
                 Make Payment
                 </button>
                    </form>
                    </div>
         </div>
            
    </div>
    );
};

export default Payment;
