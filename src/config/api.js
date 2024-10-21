import axios from 'axios';

export const API_URL = "https://capstone-1-y8m9.onrender.com";


export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});


