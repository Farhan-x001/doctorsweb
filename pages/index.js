// components/LandingPage.js

import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Healthkare.ai</h1>
      <p>Please select your role:</p>
      <Link href="/doctor-login">Doctor Login</Link>
      <br/>
      <Link href="/hospital-login">Hospital Login</Link>
    </div>
  );
};

export default LandingPage;
