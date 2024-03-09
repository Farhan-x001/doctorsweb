// components/RegistrationPage.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/registration.module.css';
import { registerDoctor } from '../lib/frontend_functions.js';
import Image from 'next/image';

const RegistrationPage = ({ setIsAuthenticated }) => {
  const [page, setPage] = useState(1); // State to manage the current page of the registration form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    specialization: '',
    role: '',
    experience: '',
    clinicLocation: '',
  });
  const [registrationStatus, setRegistrationStatus] = useState('');
  const router = useRouter();

  const nextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation - check if required fields are filled out
    const requiredFields = ['name', 'email', 'password', 'phone', 'specialization', 'role', 'experience', 'clinicLocation'];
    // for (const key of requiredFields) {
    //   if (!formData[key]) {
    //     setRegistrationStatus('Please fill out all required fields.');
    //     return;
    //   }
    // }

    // Proceed with registration if all required fields are filled out
    try {
      const response = await registerDoctor(
        formData.name,
        formData.email,
        formData.password,
        formData.phone,
        formData.specialization,
        formData.role,
        formData.experience,
        formData.clinicLocation
      );
    
      setRegistrationStatus(response.message);
      
      if (response.success) {
        setIsAuthenticated(true);
        router.push('/landing');
        console.log('Registration successful!');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setRegistrationStatus('Registration failed. Please try again.');
      console.log('Registration not successful!');
    }
  };

  return (
    <div>
      <div className={styles.head}><h1>Healthkare.ai</h1></div>
      <Image src="/images/right.png" alt="Logo" width={100} height={100} className={styles.image3} />
      <div className={styles.container}>
        <h2 style={{ textAlign: 'center' }}>Registration Page ({page}/2)</h2>
        {page === 1 && (
          <div className={styles.gridContainer}>
            <div className={styles.gridItem}>
              <h3>Full Name:</h3>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <h3>Email Address:</h3>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <h3>Create Password:</h3>
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <h3>Phone Number:</h3>
              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <h3>Specialisation:</h3>
              <input
                type="text"
                placeholder="Specialisation"
                value={formData.specialization}
                onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <h3>Role/Degree:</h3>
              <input
                type="text"
                placeholder="Role/Degree"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.gridItem}>
              <h3>Years of Experience:</h3>
              <input
                type="number"
                placeholder="Years of Experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className={styles.input}
                required
              />
            </div>
            <p>{registrationStatus}</p>
          </div>
        )}
        <div className={styles.navigation}>
          {page > 1 && <button onClick={prevPage} className={styles.button}>Previous</button>}
          {page < 2 ? (
            <button onClick={handleRegister} className={styles.button}>Next</button>
          ) : (
            <button onClick={handleRegister} className={styles.button}>Register</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
