// function
import axios from 'axios';
import config from './config';

export const login = async (phone) => {
    try {
        const response = await axios.post(`${config.api_url}/${config.v}/doctor/login`, {
            phone
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const verify = async (phone, code) => {
    try {
        const response = await axios.post(`${config.api_url}/${config.v}/doctor/otpVerify`, {
            phone,
            code
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const registerDoctor = async (
    firstName,
    email,
    password,
    reEnterPassword,
    phoneNumber,
    specialisation,
    degree,
    lastName,
    dob,
    gender,
    registrationNumber,
    yearsOfExperience,
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
    clinicLetterhead
) => {
    try {
        const response = await axios.post(`${config.api_url}/${config.v}/doctor/register`, {
            firstName,
            email,
            password,
            reEnterPassword,
            phoneNumber,
            specialisation,
            degree,
            lastName,
            dob,
            gender,
            registrationNumber,
            yearsOfExperience,
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
            clinicLetterhead
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
