import React from 'react';
import styles from '../styles/RequestPage.module.css';

const recordsPerPage = 8;
const ClinicComponent = ({ clinics, currentPage, totalPages, handlePageChange }) => {
  // Calculate total number of pages
  const totalClinicPages = Math.ceil(clinics.length / recordsPerPage);
  // Get current page data
  const currentPageData = clinics.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  return (
    <div>
      <h1>Clinics</h1>
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

export default ClinicComponent;
