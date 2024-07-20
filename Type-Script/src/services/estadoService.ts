import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PHP;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getEstados = async () => {
  try {
    const response = await axiosInstance.get('/estados');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching estados');
  }
};

export const getEstadoById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/estados/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching estado with id ${id}`);
  }
};

export const createEstado = async (estadoData: any) => {
  try {
    const response = await axiosInstance.post('/estados', estadoData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating estado');
  }
};

export const updateEstado = async (id: string, estadoData: any) => {
  try {
    const response = await axiosInstance.put(`/estados/${id}`, estadoData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating estado with id ${id}`);
  }
};

export const deleteEstado = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/estados/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting estado with id ${id}`);
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
