import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PHP;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getPracticas = async () => {
  try {
    const response = await axiosInstance.get('/practicas');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching practicas');
  }
};

export const getPracticaById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/practicas/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching practica with id ${id}`);
  }
};

export const createPractica = async (practicaData: any) => {
  try {
    const { empresa_id, estudiante_id, estado_id, ...restData } = practicaData;
    const response = await axiosInstance.post('/practicas', {
      ...restData,
      empresa: empresa_id,
      estudiante: estudiante_id,
      estado: estado_id,
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating practica');
  }
};

export const updatePractica = async (id: string, practicaData: any) => {
  try {
    const { empresa_id, estudiante_id, estado_id, ...restData } = practicaData;
    const response = await axiosInstance.put(`/practicas/${id}`, {
      ...restData,
      empresa: empresa_id,
      estudiante: estudiante_id,
      estado: estado_id,
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating practica with id ${id}`);
  }
};

export const deletePractica = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/practicas/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting practica with id ${id}`);
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
