import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PYTHON; // Asegúrate de tener la URL correcta para tu API de requisitos

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getRequisitos = async () => {
  try {
    const response = await axiosInstance.get('/requisitos');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching requisitos');
  }
};

export const getRequisitoById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/requisitos/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching requisito with id ${id}`);
  }
};

export const createRequisito = async (requisitoData: any) => {
  try {
    const response = await axiosInstance.post('/requisitos/', requisitoData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating requisito');
  }
};

export const updateRequisito = async (id: string, requisitoData: any) => {
  try {
    const response = await axiosInstance.put(`/requisitos/${id}`, requisitoData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating requisito with id ${id}`);
  }
};

export const deleteRequisito = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/requisitos/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting requisito with id ${id}`);
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
