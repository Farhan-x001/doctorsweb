// components/LandingPage.js
import styles from '../styles/landing.module.css'; // Corrected the import path
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.healthkare}>HealthKare.AI</div>
    <div className={styles.centered}>
      <h1 className={styles.brandLabel}>Select your role</h1>
      <p className={styles.para}>To move forward you have to select your role</p>
      <div className={styles.linksContainer}>
        <div className={styles.linkBox}>
          <Link href="/doctor-login">
          <div className ={styles.img1}>
          <Image src="/images/doctorsicon.png" alt="Hospital Icon" width={100} height={100} className={styles.image1} />
              <h4>Doctors</h4>
            </div>
          </Link>
        </div>
        <div className={styles.linkBox}>
          <Link href="/hospital-login">
            <div className ={styles.img2}>
            <Image src="/images/hospital-icon.png" alt="Hospital Icon" width={100} height={100}  />
              <h4>Hospital</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;
