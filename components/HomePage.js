//HomePage.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const HomePage = () => {
  const router = useRouter();
  const dummyData = [
    {
      SN: 1,
      ID: "0A123",
      name: "Hospital A",
      contact: "Dental",
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
      Phone:"967457xxx",
      email: "charlie@example.com",
      type: "delayed",
      registrationDate: "23/02/2023, 05:OOpm",
    },
  ];
  const filtereedData = [
    { 
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      image: '/images/ads.png'
    },
    { 
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      image: '/images/ads.png'
    },
    { 
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      image: '/images/ads.png'
    },
    { 
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      image: '/images/ads.png'
    },
    { 
      name: 'John Doe',
      age: 35,
      gender: 'Male',
      image: '/images/ads.png'
    },
    { 
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      image: '/images/ads.png'
    },
    // Add more data as needed
  ];
  
  const currentPageData=dummyData;
  const recordsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const [selectedDate, setSelectedDate] = useState(''); // State to hold selected date
  const [filteredData, setFilteredData] = useState(dummyData); // State to hold filtered data
  const totalPages = Math.ceil(dummyData.length / recordsPerPage);
 
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const filtered = dummyData.filter(record =>
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
          <div className="head-data">
          <p>Hi, here is your daily analytics</p>
          <h1> Dashboard</h1>
          </div>
           
           <div className="boxline">

          <div className="box">
            <h2>124</h2>
            <Image  src="/images/icon1.png"  width={100} height={100} alt="Icon 1" />
            <p>Appointments</p>
          </div>
          <div className="box">
            <h2>12</h2>
            <Image  src="/images/icon2.png"  width={100} height={100} alt="Icon 2" />
            <p>Avalible doctors</p>
          </div>
          <div className="box">
            <h2>98712</h2>
            <Image  src="/images/icon3.png"  width={100} height={100} alt="Icon 3" />
            <p>INR/Day</p>
          </div>
           </div>
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
                <tr>
                 
                  <th>Patient Name</th>
                  <th>Department</th>
                  <th>Date & Time</th>
                  <th>Type</th>
                  <th>Phone number</th>
                  <th>Email</th>
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
                <td>
                      <div className={`type-oval ${record.type === 'on time' ? 'type-hospital' : 'type-clinic'}`}>
                        {record.type}
                      </div>
                    </td>
                <td>{record.Phone}</td>
                
                <td>{record.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No records found.</p>
      )}
     <div className="patation">
  <table className="new">
    <thead>
      <tr>
        <th>Patient list</th>
      </tr>
    </thead>
    <tbody>
      {filtereedData.map((record, index) => (
        <tr key={index}>
          <td>
            <div>
              <img src={record.image} alt="Record Icon" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
              {record.name}
            </div>
            <div style={{ fontSize: '12px', lineHeight: '1' }}>
              <div className="spandata">
              <span>{record.age}</span>
              <span>, {record.gender}</span>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
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
      </div>
    </div>
  );
};


export default HomePage;
