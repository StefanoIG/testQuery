import { getEstados, getEstadoById, createEstado, updateEstado, deleteEstado } from '../services/estadoService';

export const estadoResolvers = {
  Query: {
    estados: async () => {
      try {
        return await getEstados();
      } catch (error) {
        console.error('Error fetching estados:', error);
        throw new Error('Error fetching estados');
      }
    },
    estado: async (_: any, { id }: any) => {
      try {
        return await getEstadoById(id);
      } catch (error) {
        console.error(`Error fetching estado with id ${id}:`, error);
        throw new Error(`Error fetching estado with id ${id}`);
      }
    },
  },
  Mutation: {
    createEstado: async (_: any, { input }: any) => {
      try {
        const createdEstado = await createEstado(input);
        return createdEstado;
      } catch (error) {
        console.error('Error creating estado:', error);
        throw new Error('Error creating estado');
      }
    },
    updateEstado: async (_: any, { id, input }: any) => {
      try {
        const updatedEstado = await updateEstado(id, input);
        return updatedEstado;
      } catch (error) {
        console.error(`Error updating estado with id ${id}:`, error);
        throw new Error(`Error updating estado with id ${id}`);
      }
    },
    deleteEstado: async (_: any, { id }: any) => {
      try {
        const deletedEstado = await deleteEstado(id);
        return !!deletedEstado;
      } catch (error) {
        console.error(`Error deleting estado with id ${id}:`, error);
        throw new Error(`Error deleting estado with id ${id}`);
      }
    },
  },
};
