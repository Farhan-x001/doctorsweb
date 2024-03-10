// components/LoginPage.js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/WaitingPage.module.css';
import Image from 'next/image';

const WaitingPage = ({ setIsAuthenticated ,onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState();
  const router = useRouter();

  


  return (
    <div  >
    <div className={styles.body} >
      <div className={styles.healthkare}>HealthKare.AI</div>

      {/* <Image  src="/images/left.png" alt="Logo" width={100} height={100} className={styles.image2} />
      <Image  src="/images/right.png" alt="Logo" width={100} height={100} className={styles.image3} /> */}
      <div className={styles.popupOverlay}>
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <div className={styles.imageContainer}>
              <img src="/images/waiting.png" alt="Doctor" className={styles.image} />
            </div>
            <h2 className={styles.popupTitle}>Approval Pending</h2>
           <p>Registration under review</p>
              <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WaitingPage;
