import axios from 'axios';
import { data } from '../config';

const BASE_URL = data.URL_PYTHON; // Asegúrate de tener la URL correcta para tu API de estudiantes

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getEstudiantes = async () => {
  try {
    const response = await axiosInstance.get('/estudiantes');
    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error fetching estudiantes');
  }
};

export const getEstudianteById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/estudiantes/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error fetching estudiante with id ${id}`);
  }
};

export const createEstudiante = async (estudianteData: any) => {
  try {
    // Remover la construcción de carrera como objeto
    const { carrera_id, ...restData } = estudianteData;

    const response = await axiosInstance.post('/estudiantes/', {
      ...restData,
      carrera: carrera_id  // Enviar carrera_id directamente
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error, 'Error creating estudiante');
  }
};



export const updateEstudiante = async (id: string, estudianteData: any) => {
  try {
    const response = await axiosInstance.put(`/estudiantes/${id}`, estudianteData);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error updating estudiante with id ${id}`);
  }
};

export const deleteEstudiante = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/estudiantes/${id}`);
    return response.data;
  } catch (error) {
    handleAxiosError(error, `Error deleting estudiante with id ${id}`);
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
