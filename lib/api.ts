import axios from 'axios';
import { Restaurant, RecommendationRequest } from '../types';

const API_URL = `${process.env.NEXT_PUBLIC_SERVICE_API_URL}/api`;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const signUp = async (name: string, email: string, password: string): Promise<void> => {
  await api.post('/signup', { name, email, password });
};

export const login = async (email: string, password: string): Promise<string> => {
  const response = await api.post('/login', { email, password });
  localStorage.setItem('token', response.data.token);
  return response.data.token;
};

export const logout = async (): Promise<void> => {
  await api.post('/logout');
  localStorage.removeItem('token');
};

export const getRecommendations = async (request: RecommendationRequest): Promise<Restaurant[]> => {
  const response = await api.post('/restaurants', request);
  return response.data;
};

export const getRecommendationsNoAuth = async (request: RecommendationRequest): Promise<Restaurant[]> => {
  const response = await api.post('/restaurants-no-auth', request);
  return response.data;
};

export const getSavedRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await api.get('/get-saved-restaurants');
    return response.data;
  } catch (error) {
    console.error('Error getting saved restaurants:', error);
    throw error;
  }
};

export const putSavedRestaurant = async (restaurant: Restaurant): Promise<void> => {
  try {
    await api.put('/put-saved-restaurant', restaurant);
  } catch (error) {
    console.error('Error saving restaurant:', error);
    throw error;
  }
};

export const deleteSavedRestaurant = async (restaurantId: string): Promise<void> => {
  try {
    await api.delete('/delete-saved-restaurant', { data: { restaurant_id: restaurantId } });
  } catch (error) {
    console.error('Error deleting saved restaurant:', error);
    throw error;
  }
};