import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HospitalComponent from './HospitalComponent'; 
import ClinicComponent from './ClinicComponent';
import styles from '../styles/PaitationPage.module.css';
import Image from 'next/image';
const AppointmentDetailsPopup = ({ appointment, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {/* Display appointment details */}
        <h2>{appointment.name}</h2>
        <p>Contact: {appointment.contact}</p>
        <p>Date & Time: {appointment.registrationDate}</p>
        <p>Doctors Name: {appointment.name}</p>
        {/* Add more appointment details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const PaitationPage = () => {
  const router = useRouter();
  const handleViewMoreClick = (appointment) => {
    setPopupAppointment(appointment);
  };
  
  const dummyData = [
    {
      SN: 1,
      name: " John Doe",
      designation: "22,Female",
      time: "Appointment time - 10:00 AM ",
      registrationDate: "2024-03-07",
    },
    {
      SN: 2,
      name: " Jane Smith",
      designation: "22,Female",
      time: "Appointment time - 02:00 PM ",
      registrationDate: "2024-03-07",
    },
    {
      SN: 3,
      name: " Alice Johnson",
      designation: "22,Female",
      time: "Appointment time - 11:00 AM",
      registrationDate: "2024-03-08",
    },
    {
      SN: 4,
      name: " Robert Brown",
      designation: "22,Female",
      time: "Appointment time  - 05:00 PM",
      registrationDate: "2024-03-08",
    },
    {
      SN: 5,
      name: " Emily Davis",
      designation: "22,Female",
      time: "Appointment time - 01:00 PM",
      registrationDate: "2024-03-09",
    },
    {
      SN: 6,
      name: " Michael Wilson",
      designation: "22,Female",
      time: "Appointment time - 03:00 PM",
      registrationDate: "2024-03-09",
    },
    {
      SN: 7,
      name: " Jane Smith",
      designation: "22,Female",
      time: "Appointment time - 02:00 PM ",
      registrationDate: "2024-03-07",
    },
    {
      SN: 8,
      name: " Alice Johnson",
      designation: "22,Female",
      time: "Appointment time - 11:00 AM",
      registrationDate: "2024-03-08",
    },
    {
      SN: 9,
      name: " Robert Brown",
      designation: "22,Female",
      time: "Appointment time  - 05:00 PM",
      registrationDate: "2024-03-08",
    },
    {
      SN: 10,
      name: " Emily Davis",
      designation: "22,Female",
      time: "Appointment time - 01:00 PM",
      registrationDate: "2024-03-09",
    },
    {
      SN: 11,
      name: " Michael Wilson",
      designation: "22,Female",
      time: "Appointment time - 03:00 PM",
      registrationDate: "2024-03-09",
    },
  ];
  
    const recordsPerPage = 8;
    const [popupAppointment, setPopupAppointment] = useState(null); // Define state variable

  const [currentPage, setCurrentPage] = useState(1); 
  const [isHospitalView, setIsHospitalView] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query
  const [selectedDate, setSelectedDate] = useState(''); // State to hold selected date
  const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  const totalPages = Math.ceil(dummyData.length / recordsPerPage);
  const hospitals = dummyData.filter(record => record.type === 'Hospital');
  const clinics = dummyData.filter(record => record.type === 'Clinic');
  const currentPageData = isHospitalView ? hospitals.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  ) : clinics.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const filtered = currentPageData.filter(record =>
        record.SN.toString().includes(searchQuery) ||
        record.name.toLowerCase().includes(searchQuery) ||
        record.contact.toLowerCase().includes(searchQuery)
      );
      setFilteredData(filtered);
      setCurrentPage(1); 
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleToggleView = (isHospital) => {
    setIsHospitalView(isHospital);
    setCurrentPage(1);
    if (isHospital) {
      setFilteredData(hospitals);
    } else {
      setFilteredData(clinics);
    }
  };

  const handleadddoctor = (page)=>{
    console.log("Adding doctor");
  }


  const handleHomePageClick = () => {
    router.push('/home'); // Redirect to the home page
  }; 
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterData(searchQuery, date); // Filter data based on search query and selected date
  };
  const filterData = (query, date) => {
    let filtered = currentPageData;
    if (date) {
      filtered = filtered.filter(record => record.registrationDate === date);
    }
    filtered = filtered.filter(record =>
      record.SN.toString().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.contact.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = currentPageData.filter(record =>
      record.SN.toString().includes(query) || record.ID.toString().includes(query) ||
      record.name.toLowerCase().includes(query) ||
      record.contact.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); 
  };

  return (
<div className="content">
        
        <nav className="vertical-navbar">
          
        <ul>
        <h3>HealthKare.AI</h3>
        <li>
          <Image  src="/images/dashboard.png" alt=""  width={100} height={100} />
          <a onClick={() => router.push('/home')}>Dashboard</a>
        </li>
        <li>
          <Image  src="/images/hospital.png" alt="" width={100} height={100} />
          <a onClick={() => router.push('/hospitals')}>Appointments</a>
        </li>
        <li>
          <Image  src="/images/request.png" alt=""  width={100} height={100} />
          <a onClick={() => router.push('/request')}>Doctors</a>
        </li>
        <li>
            <Image  src="/images/ads.png" alt=""  width={100} height={100} />
            <a onClick={() => router.push('/patient')}>Patients</a>
          </li>          
        
        <li>
          <Image  src="/images/ads.png" alt=""  width={100} height={100} />
          <a onClick={() => router.push('/ads')}>Ads Banner</a>
        </li>            
        </ul>
      </nav>
          <div className="dashboard-data">
            {/* Your dashboard data content here */}
            {/* For example: */}
<div className="topbartable">
            <h2>Appointments Details</h2>
            {/* <div>
        <button onClick={handleadddoctor} className={styles.button}>+ add doctor</button>
      </div> */}
          </div>
          <div className={styles.appointmentcontainer}>
    {dummyData.map(appointment => (
      <div key={appointment.SN} className={styles.card}>
        <img src="/images/patients.png" alt="Doctor" className={styles.image} />
        <h2 className={styles.name}>{appointment.name}</h2>
        <p className={styles.designation}><em>{appointment.designation}</em></p>
        <p className={styles.time}><em>{appointment.time}</em></p>
        <button className={styles.viewMore} onClick={() => handleViewMoreClick(appointment)}>View More</button>
      </div>
    ))}
  </div>
      
          <div className="pagination">
            <div className="pagination">
              Page {currentPage} of {totalPages}
            </div>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              &laquo; Prev
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                {index + 1}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next &raquo;
            </button>
          </div>
        </div>
        {popupAppointment && (
        <AppointmentDetailsPopup appointment={popupAppointment} onClose={() => setPopupAppointment(null)} />
      )}
      </div>
    
  );
};

export default PaitationPage;
