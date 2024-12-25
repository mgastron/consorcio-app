import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (oldPassword, newPassword) => {
  try {
    await axios.post(`${API_URL}/users/change-password`, {
      oldPassword,
      newPassword
    });
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.post(`${API_URL}/users/logout`);
  } catch (error) {
    throw error;
  }
}; 