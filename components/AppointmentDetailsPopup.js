import React from 'react';
import styles from '../styles/PopupStylesdoc.module.css';

const AppointmentDetailsPopup = ({ appointment, onClose }) => {
    return (
      <div className={styles.popupOverlay}>
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2 className={styles.popupTitle}>{appointment.name}</h2>
            <hr className={styles.hr} />
            <div className={styles.imageContainer}>
              <img src="/images/doctorsicon.png" alt="Doctor" className={styles.image} />
            </div>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={appointment.name} disabled />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="bloodGroup">Blood Group</label>
                <input type="text" id="bloodGroup" value={appointment.bloodGroup} disabled />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="age">Age</label>
                <input type="text" id="age" value={appointment.age} disabled />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="gender">Gender</label>
                <input type="text" id="gender" value={appointment.gender} disabled />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="appointmentDetails">Appointment Details</label>
                <textarea id="appointmentDetails" value={appointment.appointmentDetails} disabled />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="lastBookingDetails">Last Booking Details</label>
                <textarea id="lastBookingDetails" value={appointment.lastBookingDetails} disabled />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="diagnosisReport">Diagnosis Report</label>
                <a href={appointment.diagnosisReport} download>Download</a>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="prescriptionReport">Prescription Report</label>
                <a href={appointment.prescriptionReport} download>Download</a>
              </div>
              <button onClick={onClose}>Close</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default AppointmentDetailsPopup;
