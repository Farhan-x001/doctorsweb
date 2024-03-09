// pages/_app.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LandingPage from '../components/LandingPage';
import DoctorLoginPage from '../components/DoctorLoginPage';
import HospitalLoginPage from '../components/HospitalLoginPage';
import RegistrationPageDoctor from '../components/RegistrationPageDoctor1';
import RegistrationPageHospital from '../components/RegistrationPageHospital';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated && !['/landing', '/doctor-login', '/hospital-login', '/registration-doctor', '/registration-hospital'].includes(router.pathname)) {
      router.push('/landing');
    }
  }, [isAuthenticated, router]);

  // If user is not authenticated, render appropriate page
  if (!isAuthenticated && ['/landing', '/doctor-login', '/hospital-login', '/registration-doctor', '/registration-hospital'].includes(router.pathname)) {
    if (router.pathname === '/doctor-login') {
      return <DoctorLoginPage setIsAuthenticated={setIsAuthenticated} />;
    } else if (router.pathname === '/hospital-login') {
      return <HospitalLoginPage setIsAuthenticated={setIsAuthenticated} />;
    } else if (router.pathname === '/registration-doctor') {
      return <RegistrationPageDoctor setIsAuthenticated={setIsAuthenticated} />;
    } else if (router.pathname === '/registration-hospital') {
      return <RegistrationPageHospital setIsAuthenticated={setIsAuthenticated} />;
    } else {
      return <LandingPage />;
    }
  }

  // If user is authenticated or on a route other than the above, render the requested page
  return <Component {...pageProps} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />;
}

export default MyApp;
