import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PYTHON; // Asegúrate de tener la URL correcta para tu API de carreras

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getCarreras = async () => {
  try {
    const response = await axiosInstance.get('/carreras');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching carreras');
  }
};

export const getCarreraById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/carreras/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching carrera with id ${id}`);
  }
};

export const createCarrera = async (carreraData: any) => {
  try {
    const response = await axiosInstance.post('/carreras/', carreraData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating carrera');
  }
};

export const updateCarrera = async (id: string, carreraData: any) => {
  try {
    const response = await axiosInstance.put(`/carreras/${id}`, carreraData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating carrera with id ${id}`);
  }
};

export const deleteCarrera = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/carreras/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting carrera with id ${id}`);
  }
};

const handleAxiosError = (error: unknown, defaultMessage: string) => {
  if (axios.isAxiosError(error)) {
    console.error(`${defaultMessage}:`, error.response ? error.response.data : error.message);
    throw new Error(error.response ? error.response.data : defaultMessage);
  } else {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred');
  }
};
