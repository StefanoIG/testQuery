import { getRequisitos, getRequisitoById, createRequisito, updateRequisito, deleteRequisito } from '../services/requisitoService';

export const requisitoResolvers = {
  Query: {
    requisitos: async () => {
      try {
        return await getRequisitos();
      } catch (error) {
        console.error('Error fetching requisitos:', error);
        throw new Error('Error fetching requisitos');
      }
    },
    requisito: async (_: any, { id }: any) => {
      try {
        return await getRequisitoById(id);
      } catch (error) {
        console.error(`Error fetching requisito with id ${id}:`, error);
        throw new Error(`Error fetching requisito with id ${id}`);
      }
    },
  },
  Mutation: {
    createRequisito: async (_: any, { input }: any) => {
      try {
        const createdRequisito = await createRequisito(input);
        return {
          id: createdRequisito.id,
          nombre_requisito: createdRequisito.nombre_requisito,
        };
      } catch (error) {
        console.error('Error creating requisito:', error);
        throw new Error('Error creating requisito');
      }
    },
    updateRequisito: async (_: any, { id, input }: any) => {
      try {
        const updatedRequisito = await updateRequisito(id, input);
        return {
          id: updatedRequisito.id,
          nombre_requisito: updatedRequisito.nombre_requisito,
        };
      } catch (error) {
        console.error(`Error updating requisito with id ${id}:`, error);
        throw new Error(`Error updating requisito with id ${id}`);
      }
    },
    deleteRequisito: async (_: any, { id }: any) => {
      try {
        const deletedRequisito = await deleteRequisito(id);
        return !!deletedRequisito;
      } catch (error) {
        console.error(`Error deleting requisito with id ${id}:`, error);
        throw new Error(`Error deleting requisito with id ${id}`);
      }
    },
  },
};
