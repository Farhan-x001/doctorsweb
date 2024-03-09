import { useState } from 'react';
import { useRouter } from 'next/router';

export default function DoctorRegistration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegistration = () => {
    // Your registration logic for doctor registration
    // Redirect to home page after successful registration
    router.push('/home');
  };

  return (
    <div>
      <h1>Doctor Registration</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}
