// pages/api/register.js

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    // Assuming you're using some database like MongoDB
    // You should replace this code with actual database logic to save the user data
    try {
      const { firstName,
      email,
      password,
      reEnterPassword,
      phoneNumber,
      specialisation,
      degree,
      clinicName,
      walkingAppointmentTiming,
      videoConsultationCharges,
      accountNumber,
      branchName,
      clinicRegistrationCertificate,
      clinicAddress,
      consultationCharges,
      bankName,
      ifscCode,
      clinicSocialMedia,
      clinicLetterhead} = req.body;
      return res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error('Error registering user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  