import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PHP;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getEmpresas = async () => {
  try {
    const response = await axiosInstance.get('/empresas');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching empresas');
  }
};

export const getEmpresaById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/empresas/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching empresa with id ${id}`);
  }
};

export const createEmpresa = async (empresaData: any) => {
  try {
    const response = await axiosInstance.post('/empresas', empresaData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating empresa');
  }
};

export const updateEmpresa = async (id: string, empresaData: any) => {
  try {
    const response = await axiosInstance.put(`/empresas/${id}`, empresaData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating empresa with id ${id}`);
  }
};

export const deleteEmpresa = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/empresas/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting empresa with id ${id}`);
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
