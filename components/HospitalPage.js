import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HospitalComponent from './HospitalComponent'; 
import ClinicComponent from './ClinicComponent';
import styles from '../styles/HospitalPage.module.css';
import Image from 'next/image';
const AppointmentDetailsPopup = ({ appointment, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {/* Display appointment details */}
        <h2>{appointment.name}</h2>
        <p>Contact: {appointment.contact}</p>
        <p>Date & Time: {appointment.registrationDate}</p>
        <p>Doctors Name: {appointment.doctorname}</p>
        {/* Add more appointment details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const HospitalPage = () => {
  const router = useRouter();
  const handleViewMoreClick = (appointment) => {
    setPopupAppointment(appointment);
  };
  
  const dummyData = [
    {
      SN: 1,
      ID: "0A123",
      name: "Hospital A",
      contact: "Dental",
      doctorname:"Dr. Smith",
      Phone:"view more",
      email: "john@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 2,
      ID: "0A123",
      name: "Clinic B",
      contact: "general",
      doctorname:"Dr. Smith",
      Phone:"view more",
      email: "jane@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 3,
      ID: "0A123",
      name: "Hospital C",
      contact: "General",
      doctorname:"Dr. Smith",
      Phone:"view more",
      email: "alice@example.com",
      type: "on time",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 4,
      ID: "0A123",
      name: "Clinic D",
      contact: "Dental",
      doctorname:"Dr. Smith",
      Phone:"view more",
      email: "bob@example.com",
      type: "delayed",
      registrationDate: "23/02/2023, 05:OOpm",
    },
    {
      SN: 5,
      ID: "0A123",
      name: "Hospital E",
      contact: "Ortho",
      doctorname:"Dr. Smith",
      Phone:"viewmore",
      email: "charlie@example.com",
      type: "delayed",
      registrationDate: "23/02/2023, 05:OOpm",
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
    <li>
      <div className="healthkare-header">
        <h2>HealthKare.AI</h2>
        <hr />
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/dashboard.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/home')}>Dashboard</a>
      </div>
    </li>
    <li>
      <div className="nav-item1">
        <Image src="/images/ain.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/hospitals')}>Appointments</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/Doctor.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/request')}>Doctors</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/p1.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/patient')}>Patients</a>
      </div>
    </li>
    <li>
      <div className="nav-item">
        <Image src="/images/ads.png" alt="" width={30} height={30} />
        <a onClick={() => router.push('/ads')}>Ads Banner</a>
      </div>
    </li>
  </ul>
</nav>
          <div className="dashboard-data">
            {/* Your dashboard data content here */}
            {/* For example: */}
           <div className="topbartable">
            <h2>Appointments Details</h2>
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="date">Select date</label>
                      <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
                    </div>
                    <div className="field">
                      <label htmlFor="sortBy">Sort by</label>
                      <select id="sortBy">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="search"> Search</label>
                      <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search..." />
                    </div>
                  </div>
          </div>

          {dummyData.length > 0 ? (
            <table>
              {/* Table headers */}
              <thead>
                <tr className ="tr1">
                 
                  <th>Patient Name</th>
                  <th>Department</th>
                  <th>Date & Time</th>
                  <th>doctors name </th>
                  <th>status</th>
                  <th></th>
                </tr>
              </thead>
              {/* Table body */}
               <tbody>
            {/* Map through filtered data and render table rows */}
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.contact}</td>
                <td>{record.registrationDate}</td>
                <td>{record.doctorname}</td>
                <td>
                      <div className={`type-oval ${record.type === 'on time' ? 'type-hospital' : 'type-clinic'}`}>
                        {record.type}
                      </div>
                    </td>
                    <td>
            <button onClick={() => handleViewMoreClick(record)}>View More</button>
          </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found.</p>
      )}
      {/* <div className="patation">
          <Image  src="/images/patient.png"  width={285} height={432} alt="Icon 3" />
      </div> */}
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

export default HospitalPage;
