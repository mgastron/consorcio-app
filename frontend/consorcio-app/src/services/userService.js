import axios from 'axios';
import API_URL from '../config/api';

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
}; 