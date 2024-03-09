// components/RegistrationPage.js

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/registration.module.css';
import Image from 'next/image';
const RegistrationPage = ({ setIsAuthenticated }) => {
  const [page, setPage] = useState(1); // State to manage the current page of the registration form
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    reEnterPassword: '',
    phoneNumber: '',
    specialisation: '',
    degree: '',
    lastName: '',
    dob: '',
    gender: '',
    registrationNumber: '',
    yearsOfExperience: '',
    clinicName: '',
    walkingAppointmentTiming: '',
    videoConsultationCharges: '',
    accountNumber: '',
    branchName: '',
    clinicRegistrationCertificate: '',
    clinicAddress: '',
    consultationCharges: '',
    bankName: '',
    ifscCode: '',
    clinicSocialMedia: '',
    clinicLetterhead: '',
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
    const requiredFields = ['firstName', 'email', 'password', 'phoneNumber', 'specialisation', 'degree', 'lastName', 'walkingAppointmentTiming', 'videoConsultationCharges', 'accountNumber', 'branchName', 'clinicRegistrationCertificate', 'clinicAddress', 'consultationCharges', 'bankName', 'ifscCode', 'clinicSocialMedia', 'clinicLetterhead'];
    for (const key of requiredFields) {
      if (!formData[key]) {
        setRegistrationStatus('Please fill out all required fields.');
        return;
      }
    }

    // Proceed with registration if all required fields are filled out
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setRegistrationStatus('Registration successful!');
        // Clear the form after successful registration
        setFormData({
          firstName: '',
          email: '',
          password: '',
          reEnterPassword: '',
          phoneNumber: '',
          specialisation: '',
          degree: '',
          lastName: '',
          dob: '',
          gender: '',
          registrationNumber: '',
          yearsOfExperience: '',
          clinicName: '',
          walkingAppointmentTiming: '',
          videoConsultationCharges: '',
          accountNumber: '',
          branchName: '',
          clinicRegistrationCertificate: '',
          clinicAddress: '',
          consultationCharges: '',
          bankName: '',
          ifscCode: '',
          clinicSocialMedia: '',
          clinicLetterhead: '',
        });
        setIsAuthenticated(true);
        router.push('/landing'); // Redirect to doctor login page after successful registration
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setRegistrationStatus('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <div className={styles.head}><h1>Healthkare.ai</h1></div>
      <Image  src="/images/right.png" alt="Logo" width={100} height={100} className={styles.image3} />
      <div className={styles.container}>
        <h2 style={{textAlign: 'center'}}>Registration Page ({page}/2)</h2>
        <h3 className={styles.leftAlign}>hospital</h3>
                <h3 className={styles.rightAlign}>doctors</h3>

        {page === 1 && (
  <div className={styles.gridContainer}>
    <div className={styles.gridItem}>
      <h2>Hospital Details</h2>
      <h3>First Name:</h3>
      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
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
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Specialisation:</h3>
      <input
        type="text"
        placeholder="Specialisation"
        value={formData.specialisation}
        onChange={(e) => setFormData({ ...formData, specialisation: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Degree:</h3>
      <input
        type="text"
        placeholder="Degree"
        value={formData.degree}
        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
        className={styles.input}
        required
      />
    <input
      type="file"
      id="fileInput"
      style={{ display: "block"
     }}
      onChange={(e) => handleFileUpload(e.target.files)}
    />
    </div>
    <div className={styles.gridItem}>
      <h3>Date of Birth:</h3>
      <input
        type="date"
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Gender:</h3>
      <select
        value={formData.gender}
        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        className={styles.input}
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className={styles.gridItem}>
      <h3>Registration Number:</h3>
      <input
        type="text"
        placeholder="Registration Number"
        value={formData.registrationNumber}
        onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Years of Experience:</h3>
      <input
        type="number"
        placeholder="Years of Experience"
        value={formData.yearsOfExperience}
        onChange={(e) => setFormData({ ...formData, yearsOfExperience: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <p>{registrationStatus}</p>

  </div>
)}
      {page === 2 && (
  <div className={styles.gridContainer}>
    <div className={styles.gridItem}>
      <h3>Legal Hospital Name</h3>
      <input
        type="text"
        placeholder=" "
        value={formData.lastName}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Owners Name</h3>
      <input
        type="text"
        placeholder="Timing for walking appointment"
        value={formData.walkingAppointmentTiming}
        onChange={(e) => setFormData({ ...formData, walkingAppointmentTiming: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Email id</h3>
      <input
        type="text"
        placeholder=" "
        value={formData.videoConsultationCharges}
        onChange={(e) => setFormData({ ...formData, videoConsultationCharges: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Email Address</h3>
      <input
        type="text"
        placeholder="Account Number"
        value={formData.accountNumber}
        onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Start date of hospital</h3>
      <input
        type="date"
        placeholder="Branch Name"
        value={formData.branchName}
        onChange={(e) => setFormData({ ...formData, branchName: e.target.value })}
        className={styles.input}
        required
      />
    </div>
   
    <div className={styles.gridItem}>
      <h3>Phone Number</h3>
      <input
        type="text"
        placeholder="Clinic Address"
        value={formData.clinicAddress}
        onChange={(e) => setFormData({ ...formData, clinicAddress: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
    <h3>Location</h3>
      <input
        type="text"
        placeholder=" "
        value={formData.consultationCharges}
        onChange={(e) => setFormData({ ...formData, consultationCharges: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Address</h3>
      <input
        type="text"
        placeholder="Bank Name"
        value={formData.bankName}
        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
      <h3>Phone Number</h3>
      <input
        type="number"
        placeholder=" "
        value={formData.ifscCode}
        onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
        className={styles.input}
        required
      />
    </div>
    <div className={styles.gridItem}>
    <div className={styles.gridItem}>
      <h3>ID Proof:</h3>
      <input
        type="text"
        placeholder="Clinic Registration certificate"
        value={formData.clinicRegistrationCertificate}
        onChange={(e) => setFormData({ ...formData, clinicRegistrationCertificate: e.target.value })}
        className={styles.input}
        required
      />
      <input
      type="file"
      id="fileInput"
      style={{ display: "block"
     }}
      onChange={(e) => handleFileUpload(e.target.files)}
    />
    </div>
    </div>
    <div className={styles.gridItem}>
      <h3>hospital liscence:</h3>
      <input
        type="text"
        placeholder="Clinic letterhead"
        value={formData.clinicLetterhead}
        onChange={(e) => setFormData({ ...formData, clinicLetterhead: e.target.value })}
        className={styles.input}
        required
      />
      <input
      type="file"
      id="fileInput"
      style={{ display: "block"
     }}
      onChange={(e) => handleFileUpload(e.target.files)}
    />
    </div>
    <p>{registrationStatus}</p>
  </div>
)}
        <div className={styles.navigation}>
          {page > 1 && <button onClick={prevPage} className={styles.button}>Previous</button>}
          {page < 2 ? (
            <button onClick={nextPage} className={styles.button}>Next</button>
          ) : (
            <button onClick={handleRegister} className={styles.button}>Register</button>
          )}
        </div>
      </div>
      {/* <Image  src="/images/left.png" alt="Logo" width={100} height={100} className={styles.image2} /> */}
    </div>
  );
};

export default RegistrationPage;
