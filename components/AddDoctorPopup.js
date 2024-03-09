// components/AddDoctorPopup.js
import React, { useState } from 'react';
import styles from '../styles/PopupStyles.module.css';

const AddDoctorPopup = ({ onClose, onAddDoctor }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [time, setTime] = useState('');

  const handleAddDoctor = () => {
    const newDoctor = { name, designation,time };
    onAddDoctor(newDoctor);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Add New Doctor</h2>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Designation:</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        <label>Time:</label>
        <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        <button onClick={handleAddDoctor}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddDoctorPopup;
