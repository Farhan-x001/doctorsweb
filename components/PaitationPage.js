import React, { useState } from 'react';
import { useRouter } from 'next/router';
import HospitalComponent from './HospitalComponent'; 
import ClinicComponent from './ClinicComponent';
import styles from '../styles/PaitationPage.module.css';
import Image from 'next/image';
// const dummyData = [
//   {
//     SN: 1,
//     name: " John Doe",
//     designation: "22,Female",
//     time: "Appointment time - 10:00 AM ",
//     registrationDate: "2024-03-07",
//   },
//   {
//     SN: 2,
//     name: " Jane Smith",
//     designation: "22,Female",
//     time: "Appointment time - 02:00 PM ",
//     registrationDate: "2024-03-07",
//   },
//   {
//     SN: 3,
//     name: " Alice Johnson",
//     designation: "22,Female",
//     time: "Appointment time - 11:00 AM",
//     registrationDate: "2024-03-08",
//   },
//   {
//     SN: 4,
//     name: " Robert Brown",
//     designation: "22,Female",
//     time: "Appointment time  - 05:00 PM",
//     registrationDate: "2024-03-08",
//   },
//   {
//     SN: 5,
//     name: " Emily Davis",
//     designation: "22,Female",
//     time: "Appointment time - 01:00 PM",
//     registrationDate: "2024-03-09",
//   },
//   {
//     SN: 6,
//     name: " Michael Wilson",
//     designation: "22,Female",
//     time: "Appointment time - 03:00 PM",
//     registrationDate: "2024-03-09",
//   },
//   {
//     SN: 7,
//     name: " Jane Smith",
//     designation: "22,Female",
//     time: "Appointment time - 02:00 PM ",
//     registrationDate: "2024-03-07",
//   },
//   {
//     SN: 8,
//     name: " Alice Johnson",
//     designation: "22,Female",
//     time: "Appointment time - 11:00 AM",
//     registrationDate: "2024-03-08",
//   },
//   {
//     SN: 9,
//     name: " Robert Brown",
//     designation: "22,Female",
//     time: "Appointment time  - 05:00 PM",
//     registrationDate: "2024-03-08",
//   },
//   {
//     SN: 10,
//     name: " Emily Davis",
//     designation: "22,Female",
//     time: "Appointment time - 01:00 PM",
//     registrationDate: "2024-03-09",
//   },
//   {
//     SN: 11,
//     name: " Michael Wilson",
//     designation: "22,Female",
//     time: "Appointment time - 03:00 PM",
//     registrationDate: "2024-03-09",
//   },
// ];
// const PaitationPage = () => {
  // const PaitationPage = () => {
    import AppointmentDetailsPopup from './AppointmentDetailsPopup'; 
    const PaitationPage = () => {
      const router = useRouter();
      const [showAddDoctorPopup, setShowAddDoctorPopup] = useState(false);
      const handleViewMoreClick = (appointment) => {
        setPopupAppointment(appointment);
      };
      const [dummyData, setDummyData] = useState([
        {
          SN: 1,
          name: "Dr. John Doe",
          designation: "22,Male",
          time: "10:00 AM - 12:00 PM",
          registrationDate: "2024-03-07",
          bloodGroup: "AB+",
          age: 42,
          gender: "Male",
          appointmentDetails: "12/2/2023, 12:30 PM",
          lastBookingDetails: "28/1/2023, 12:20 AM",
          diagnosisReport: "/reports/diagnosis1.pdf",
          prescriptionReport: "/reports/prescription1.pdf"
        },
        {
          SN: 2,
          name: "Dr. Jane Smith",
          designation: "22,Male",
          time: "02:00 PM - 04:00 PM",
          registrationDate: "2024-03-07",
          bloodGroup: "A-",
          age: 35,
          gender: "Female",
          appointmentDetails: "15/2/2023, 3:45 PM",
          lastBookingDetails: "30/1/2023, 11:10 AM",
          diagnosisReport: "/reports/diagnosis2.pdf",
          prescriptionReport: "/reports/prescription2.pdf"
        },
        {
          SN: 3,
          name: "Dr. Alice Johnson",
          designation: "22,Male",
          time: "09:00 AM - 11:00 AM",
          registrationDate: "2024-03-08",
          bloodGroup: "B+",
          age: 50,
          gender: "Female",
          appointmentDetails: "20/2/2023, 10:15 AM",
          lastBookingDetails: "25/1/2023, 09:45 AM",
          diagnosisReport: "/reports/diagnosis3.pdf",
          prescriptionReport: "/reports/prescription3.pdf"
        },
        {
          SN: 4,
          name: "Dr. Robert Brown",
          designation: "22,Male",
          time: "03:00 PM - 05:00 PM",
          registrationDate: "2024-03-08",
          bloodGroup: "O+",
          age: 48,
          gender: "Male",
          appointmentDetails: "18/2/2023, 4:00 PM",
          lastBookingDetails: "27/1/2023, 1:30 PM",
          diagnosisReport: "/reports/diagnosis4.pdf",
          prescriptionReport: "/reports/prescription4.pdf"
        },
        {
          SN: 5,
          name: "Dr. Emily Davis",
          designation: "22,Male",
          time: "11:00 AM - 01:00 PM",
          registrationDate: "2024-03-09",
          bloodGroup: "A+",
          age: 40,
          gender: "Female",
          appointmentDetails: "25/2/2023, 11:45 AM",
          lastBookingDetails: "29/1/2023, 10:50 AM",
          diagnosisReport: "/reports/diagnosis5.pdf",
          prescriptionReport: "/reports/prescription5.pdf"
        },
        {
          SN: 6,
          name: "Dr. Michael Wilson",
          designation: "22,Male",
          time: "01:00 PM - 03:00 PM",
          registrationDate: "2024-03-09",
          bloodGroup: "B-",
          age: 55,
          gender: "Male",
          appointmentDetails: "22/2/2023, 2:30 PM",
          lastBookingDetails: "26/1/2023, 3:20 PM",
          diagnosisReport: "/reports/diagnosis6.pdf",
          prescriptionReport: "/reports/prescription6.pdf"
        },
        {
          SN: 7,
          name: "Dr. Michael Wilson",
          designation: "22,Male",
          time: "01:00 PM - 03:00 PM",
          registrationDate: "2024-03-09",
          bloodGroup: "B-",
          age: 55,
          gender: "Male",
          appointmentDetails: "22/2/2023, 2:30 PM",
          lastBookingDetails: "26/1/2023, 3:20 PM",
          diagnosisReport: "/reports/diagnosis6.pdf",
          prescriptionReport: "/reports/prescription6.pdf"
        }
      ]);
      
       // Initial dummy data
    
        const [popupAppointment, setPopupAppointment] = useState(null); // Define state variable
        const [searchQuery, setSearchQuery] = useState("");
        const [selectedDate, setSelectedDate] = useState('');
        const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
      
    
    
        const recordsPerPage = 8;
        const totalPages = Math.ceil(dummyData.length / recordsPerPage);
    
      const currentPageData=dummyData;
      const [currentPage, setCurrentPage] = useState(1); // Current page number
     
      const handleAddDoctorClick = () => {
        setShowAddDoctorPopup(true);
      };
      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          filterData(searchQuery, selectedDate);
        }
      };
    
      const filterData = (query, date) => {
        let filtered = dummyData;
        if (date) {
          filtered = filtered.filter(record => record.registrationDate === date);
        }
        if (query) {
          const lowerCaseQuery = query.toLowerCase();
          filtered = filtered.filter(record =>
            record.SN.toString().includes(lowerCaseQuery) ||
            record.name.toLowerCase().includes(lowerCaseQuery) ||
            record.designation.toLowerCase().includes(lowerCaseQuery) ||
            (record.contact && record.contact.toLowerCase().includes(lowerCaseQuery))
          );
        }
        setFilteredData(filtered);
      };
      
      
    
      const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        filterData(query, selectedDate);
      };
    
      const handleDateChange = (event) => {
        const date = event.target.value;
        setSelectedDate(date);
        filterData(searchQuery, date);
      };
      const handleAddDoctor = (newDoctor) => {
        setFilteredData([...filteredData, newDoctor]);
        setDummyData([...dummyData, newDoctor]); // Update dummyData as well
        setShowAddDoctorPopup(false);
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
      <div className="nav-item">
        <Image src="/images/hospital.png" alt="" width={30} height={30} />
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
      <div className="nav-item1">
        <Image src="/images/pin.png" alt="" width={30} height={30} />
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
                      <label htmlFor="search">Search</label>
                      <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search..." />
                    </div>
                      <div>
                      <button onClick={handleAddDoctorClick} className={styles.button}>+ add doctor</button>
                </div>
                  </div>
                {/* {showAddDoctorPopup && (
                  <AddDoctorPopup onClose={() => setShowAddDoctorPopup(false)} onAddDoctor={handleAddDoctor} />
                )} */}
                    </div>
                    <div className={styles.appointmentcontainer}>
                  {filteredData.map(appointment => (
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
