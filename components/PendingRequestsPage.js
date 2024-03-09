import { useRouter } from 'next/router';

// pages/hospital.js
import React, { useState } from 'react';
import RegisteredHospitalsPage from './RegisteredHospitalsPage';
import RejectedRequestsPage from './RejectedRequestsPage';
import styles from '../styles/HospitalPage.module.css';



const PendingRequestsPage = () =>  {
  const router = useRouter();
  const dummyData = [
    {
      SN: 1,
      ID: "0A123",
      name: "Hospital A",
      contact: "John Doe",
      email: "john@example.com",
      type: "Hospital",
      registrationDate: "2023-01-01",
      requests: {
        tick: true,
        cross: false,
      }
    },
    {
      SN: 2,
      ID: "0A123",
      name: "Clinic B",
      contact: "Jane Smith",
      email: "jane@example.com",
      type: "Clinic",
      registrationDate: "2023-02-15",
      requests: {
        tick: false,
        cross: true,
      }
    },
    {
      SN: 3,
      ID: "0A123",
      name: "Hospital C",
      contact: "Alice Johnson",
      email: "alice@example.com",
      type: "Hospital",
      registrationDate: "2023-03-20",
      requests: {
        tick: true,
        cross: false,
      }
    },
    {
      SN: 4,
      ID: "0A123",
      name: "Clinic D",
      contact: "Bob Brown",
      email: "bob@example.com",
      type: "Clinic",
      registrationDate: "2023-04-10",
      requests: {
        tick: false,
        cross: true,
      }
    },
    {
      SN: 5,
      ID: "0A123",
      name: "Hospital E",
      contact: "Charlie Wilson",
      email: "charlie@example.com",
      type: "Hospital",
      registrationDate: "2023-05-05",
      requests: {
        tick: true,
        cross: false,
      }
    },
    {
      SN: 6,
      ID: "0A123",
      name: "Clinic F",
      contact: "David Lee",
      email: "david@example.com",
      type: "Clinic",
      registrationDate: "2023-06-15",
      requests: {
        tick: false,
        cross: true,
      }
    },
    {
      SN: 7,
      ID: "0A123",
      name: "Hospital G",
      contact: "Eva Martinez",
      email: "eva@example.com",
      type: "Hospital",
      registrationDate: "2023-07-20",
      requests: {
        tick: true,
        cross: false,
      }
    },
    {
      SN: 8,
      ID: "0A123",
      name: "Clinic H",
      contact: "Frank Harris",
      email: "frank@example.com",
      type: "Clinic",
      registrationDate: "2023-08-10",
      requests: {
        tick: false,
        cross: true,
      }
    },
    {
      SN: 9,
      ID: "0A123",
      name: "Hospital I",
      contact: "Grace Taylor",
      email: "grace@example.com",
      type: "Hospital",
      registrationDate: "2023-09-05",
      requests: {
        tick: true,
        cross: false,
      }
    },
  ];

  const currentPageData=dummyData;
  const recordsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [searchQuery, setSearchQuery] = useState(''); // State to hold search query
  const [selectedDate, setSelectedDate] = useState(''); // State to hold selected date
  const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  const totalPages = Math.ceil(dummyData.length / recordsPerPage);
 
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

  const handleToggleView = () => {
    setIsHospitalView(prevState => !prevState);
    setCurrentPage(1);
  };


  const handleHomePageClick = () => {
    router.push('/home'); 
  }; 
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    filterData(searchQuery, date); 
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
    <div>
     <div className="top-bar">
        <h2>HealthKare.AI</h2>
        <div className="admin-info">
          <p>Hi Admin</p>
          <button onClick={() => router.push('/login')}>Logout</button>
        

        </div>
      </div>
      <div className="content">
        <nav className="vertical-navbar">
          <ul>
          <li><a onClick={() => router.push('/home')}>Dashboard</a></li>
            <li><a onClick={() => router.push('/hospitals')}>Hospitals</a></li>
            <li><a onClick={() => router.push('/request')}>Requests</a></li>
            <li><a onClick={() => router.push('/ads')}>Ads Banner</a></li>          
          </ul>
        </nav>
        <div className="dashboard-data">
        
          <div className="head-data">
          <h3>Hi XYZ, Welcome to your Dashboard</h3>
          <p>This is where your dashboard data goes.</p>
          </div>
           
          <nav className={styles.horizontalnavbar}>
            
            <ul className={styles.horizontalnavbar}>
              <li><a onClick={() => router.push('/register')}>Registered Hospital/clinics 120</a></li>
              <li><a onClick={() => router.push('/pending')}>Pending Request 32</a></li>
              <li><a onClick={() => router.push('/reject')}>Rejected Request 32</a></li>
            </ul>
          </nav>
           <div className="topbartable">
            <h2>Newly onboarded</h2>
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
              <thead>
                <tr>
                  <th>SN</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Point of Contact</th>
                  <th>Email</th>
                  <th>Type</th>
                  <th>Registration Date</th>
                </tr>
              </thead>
               <tbody>
            {filteredData.map((record, index) => (
              <tr key={index}>
                <td>{record.SN}</td>
                <td>{record.ID}</td>
                <td>{record.name}</td>
                <td>{record.contact}</td>
                <td>{record.email}</td>
                <td>
            <div className={`type-oval ${record.type === 'Hospital' ? 'type-hospital' : 'type-clinic'}`}>
              {record.type}
            </div>
                </td>
                <td>{record.registrationDate}</td>
                <td>
            <button>{record.requests.tick = '✔' }</button>
            <button>{record.requests.cross = '✗' }</button>
        </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found.</p>
      )}
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
      </div>
    </div>
  );
};

export default PendingRequestsPage;
