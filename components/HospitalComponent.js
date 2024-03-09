import React from 'react';
import styles from '../styles/RequestPage.module.css';

const HospitalComponent = ({ hospitals, currentPage, handlePageChange }) => {
  // Define constants for pagination
  const recordsPerPage = 8;
  const totalPages = Math.ceil(hospitals.length / recordsPerPage);

  // Get current page data
  const currentPageData = hospitals.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div>
      <h1>Hospitals</h1>
      <div className="topbartable">
                  <div className="fields">
                    <div className="field">
                      <label htmlFor="date">Select date</label>
                      <input type="text" id="date" defaultValue="16/12/2023" />
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
                      <input type="text" id="search" placeholder="Search..." />
                    </div>
                  </div>
          </div>
      <div className="table-container">
        <table>
          {/* Table headers */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Point of Contact</th>
              <th>Email</th>
              <th>Type</th>
              <th>Registration Date</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {/* Map through current page data and render table rows */}
            {currentPageData.map((record, index) => (
              <tr key={index}>
                <td>{record.SN}</td>
                <td>{record.name}</td>
                <td>{record.contact}</td>
                <td>{record.email}</td>
                <td>
                  {/* Apply conditional class based on type */}
                  <div className={`type-oval ${record.type === 'Hospital' ? 'type-hospital' : 'type-clinic'}`}>
                    {record.type}
                  </div>
                </td>
                <td>{record.registrationDate}</td>
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
  );
};

export default HospitalComponent;
