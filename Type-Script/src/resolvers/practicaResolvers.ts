import { getPracticas, getPracticaById, createPractica, updatePractica, deletePractica } from '../services/practicaService';

export const practicaResolvers = {
  Query: {
    practicas: async () => {
      try {
        return await getPracticas();
      } catch (error) {
        console.error('Error fetching practicas:', error);
        throw new Error('Error fetching practicas');
      }
    },
    practica: async (_: any, { id }: any) => {
      try {
        return await getPracticaById(id);
      } catch (error) {
        console.error(`Error fetching practica with id ${id}:`, error);
        throw new Error(`Error fetching practica with id ${id}`);
      }
    },
  },
  Mutation: {
    createPractica: async (_: any, { input }: any) => {
      try {
        const createdPractica = await createPractica(input);
        return createdPractica;
      } catch (error) {
        console.error('Error creating practica:', error);
        throw new Error('Error creating practica');
      }
    },
    updatePractica: async (_: any, { id, input }: any) => {
      try {
        const updatedPractica = await updatePractica(id, input);
        return updatedPractica;
      } catch (error) {
        console.error(`Error updating practica with id ${id}:`, error);
        throw new Error(`Error updating practica with id ${id}`);
      }
    },
    deletePractica: async (_: any, { id }: any) => {
      try {
        const deletedPractica = await deletePractica(id);
        return !!deletedPractica;
      } catch (error) {
        console.error(`Error deleting practica with id ${id}:`, error);
        throw new Error(`Error deleting practica with id ${id}`);
      }
    },
  },
};
