import { getCarreras, getCarreraById, createCarrera, updateCarrera, deleteCarrera } from '../services/carreraService';

export const carreraResolvers = {
  Query: {
    carreras: async () => {
      try {
        return await getCarreras();
      } catch (error) {
        console.error('Error fetching carreras:', error);
        throw new Error('Error fetching carreras');
      }
    },
    carrera: async (_: any, { id }: any) => {
      try {
        return await getCarreraById(id);
      } catch (error) {
        console.error(`Error fetching carrera with id ${id}:`, error);
        throw new Error(`Error fetching carrera with id ${id}`);
      }
    },
  },
  Mutation: {
    createCarrera: async (_: any, { input }: any) => {
      try {
        const createdCarrera = await createCarrera(input);
        return {
          id: createdCarrera.id,
          nombre_carrera: createdCarrera.nombre_carrera,
          num_semestres: createdCarrera.num_semestres,
        };
      } catch (error) {
        console.error('Error creating carrera:', error);
        throw new Error('Error creating carrera');
      }
    },
    updateCarrera: async (_: any, { id, input }: any) => {
      try {
        const updatedCarrera = await updateCarrera(id, input);
        return {
          id: updatedCarrera.id,
          nombre_carrera: updatedCarrera.nombre_carrera,
          num_semestres: updatedCarrera.num_semestres,
        };
      } catch (error) {
        console.error(`Error updating carrera with id ${id}:`, error);
        throw new Error(`Error updating carrera with id ${id}`);
      }
    },
    deleteCarrera: async (_: any, { id }: any) => {
      try {
        const deletedCarrera = await deleteCarrera(id);
        return !!deletedCarrera;
      } catch (error) {
        console.error(`Error deleting carrera with id ${id}:`, error);
        throw new Error(`Error deleting carrera with id ${id}`);
      }
    },
  },
};
