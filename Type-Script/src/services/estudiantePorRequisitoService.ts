import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PYTHON;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getEstudiantesPorRequisito = async () => {
  try {
    const response = await axiosInstance.get('/estudiantes-requisitos');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching estudiantes por requisito');
  }
};

export const getEstudiantePorRequisitoById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/estudiantes-requisitos/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching estudiante por requisito with id ${id}`);
  }
};

export const createEstudiantePorRequisito = async (estudiantePorRequisitoData: any) => {
  try {
    const { estudianteId, requisitoId, ...restData } = estudiantePorRequisitoData;
    const response = await axiosInstance.post('/estudiantes-requisitos/', {
      ...restData,
      estudiante: estudianteId,
      requisito: requisitoId
    });
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating estudiante por requisito');
  }
};

export const updateEstudiantePorRequisito = async (id: string, estudiantePorRequisitoData: any) => {
  try {
    const response = await axiosInstance.put(`/estudiantes-requisitos/${id}`, estudiantePorRequisitoData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating estudiante por requisito with id ${id}`);
  }
};

export const deleteEstudiantePorRequisito = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/estudiantes-requisitos/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting estudiante por requisito with id ${id}`);
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