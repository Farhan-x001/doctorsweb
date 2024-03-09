import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ads.module.css';
import Image from 'next/image';

const AdsPage = () => {
  const router = useRouter();
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    // Do something with the selected file
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
    // Do something with the dropped file
  };

  const handleViewFile = () => {
    // Implement logic to view the uploaded file
    console.log("View file:", uploadedFile);
  };

  return (
    <div className="content">
      <nav className="vertical-navbar">
        <ul>
          <h3>HealthKare.AI</h3>
          <li>
            <Image src="/images/dashboard.png" alt="" width={100} height={100} />
            <a onClick={() => router.push('/home')}>Dashboard</a>
          </li>
          <li>
            <Image src="/images/hospital.png" alt="" width={100} height={100} />
            <a onClick={() => router.push('/hospitals')}>Appointments</a>
          </li>
          <li>
            <Image src="/images/request.png" alt="" width={100} height={100} />
            <a onClick={() => router.push('/request')}>Doctors</a>
          </li>
          <li>
            <Image src="/images/ads.png" alt="" width={100} height={100} />
            <a onClick={() => router.push('/patient')}>Patients</a>
          </li>
          <li>
            <Image src="/images/ads.png" alt="" width={100} height={100} />
            <a onClick={() => router.push('/ads')}>Ads Banner</a>
          </li>
        </ul>
        
      </nav>
      <div className="dashboard-data">
      <div className="head-data">
          <h1> Upload Banner</h1>
           <p>Upload the banner you want to dispaly</p>
          </div>
        <div
          className={`${styles.dragDropBlock} ${isDragging ? styles.dragging : ''}`}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <img src="images/cloud-icon.png" alt="Cloud Icon" className={styles.cloudIcon} />
          <p>Drag & Drop files here</p>
          <label htmlFor="fileInput" className={styles.fileButton}>Browse Files</label>
          <input
            type="file"
            id="fileInput"
            className={styles.fileInput}
            onChange={handleFileChange}
            hidden
          />
          <p className={styles.fileType}>File should be jpeg, png, or pdf</p>
          <p className={styles.maxSize}>Max size 50 MB</p>
        </div>
        {uploadedFile && (
          <div className={styles.uploadedFileSection}>
            <p>Uploaded File: {uploadedFile.name}</p>
            <button onClick={handleViewFile}>View</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdsPage;
