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
            name,
            role,
            email,
            phone,
            clinicLocation,
            specialization,
            experience,
            password
) => {
    try {
        const response = await axios.post(`${config.api_url}/${config.v}/doctor/register`, {
            name,
            role,
            email,
            phone,
            clinicLocation,
            specialization,
            experience,
            password
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
