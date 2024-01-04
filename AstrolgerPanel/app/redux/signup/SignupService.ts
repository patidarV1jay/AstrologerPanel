import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

interface Payload {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  experience: string;
  city: string;
  country: string;
  bio: string;
  languageSelected: string[] | undefined;
  selectedGender: string;
  selectedDevices: string[] | undefined;
}

const registerUser = createAsyncThunk(
  'RegisterUser',
  async (values: Payload) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      selectedGender,
      experience,
      city,
      country,
      bio,
      languageSelected,
      selectedDevices,
    } = values;
    try {
      const response = await axiosInstance.post('asrto_signup', {
        name: firstName + ' ' + lastName,
        email,
        mobile_no: phone,
        gender: selectedGender,
        experience,
        city,
        country,
        bio,
        system_known: selectedDevices,
        language_known: languageSelected,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
);

export default registerUser;
