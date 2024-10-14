import axios from "axios";

// Login
export const login = async (body) =>
  axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, body, {
    withCredentials: true,
  });

// Logout
export const logout = async () =>
  axios.delete(`${import.meta.env.VITE_API_URL}/api/auth`, {
    withCredentials: true,
  });

// Check Auth
export const checkAuth = async () =>
  axios.get(`${import.meta.env.VITE_API_URL}/api/auth`, {
    withCredentials: true,
  });
