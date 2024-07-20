import { getEstudiantesPorRequisito, getEstudiantePorRequisitoById, createEstudiantePorRequisito, updateEstudiantePorRequisito, deleteEstudiantePorRequisito } from '../services/estudiantePorRequisitoService';

export const estudiantePorRequisitoResolvers = {
  Query: {
    estudiantePorRequisitos: async () => {
      try {
        return await getEstudiantesPorRequisito();
      } catch (error) {
        console.error('Error fetching estudiantes por requisito:', error);
        throw new Error('Error fetching estudiantes por requisito');
      }
    },
    estudiantePorRequisito: async (_: any, { id }: any) => {
      try {
        return await getEstudiantePorRequisitoById(id);
      } catch (error) {
        console.error(`Error fetching estudiante por requisito with id ${id}:`, error);
        throw new Error(`Error fetching estudiante por requisito with id ${id}`);
      }
    },
  },
  Mutation: {
    createEstudiantePorRequisito: async (_: any, { input }: any) => {
      try {
        const { estudianteId, requisitoId, ...restData } = input;
        const createdEstudiantePorRequisito = await createEstudiantePorRequisito({
          ...restData,
          estudiante: estudianteId,
          requisito: requisitoId
        });
        return {
          id: createdEstudiantePorRequisito.id,
          estudiante: createdEstudiantePorRequisito.estudiante,
          requisito: createdEstudiantePorRequisito.requisito,
          es_cumplido: createdEstudiantePorRequisito.es_cumplido,
        };
      } catch (error) {
        console.error('Error creating estudiante por requisito:', error);
        throw new Error('Error creating estudiante por requisito');
      }
    },
    updateEstudiantePorRequisito: async (_: any, { id, input }: any) => {
      try {
        const updatedEstudiantePorRequisito = await updateEstudiantePorRequisito(id, input);
        return {
          id: updatedEstudiantePorRequisito.id,
          estudiante: updatedEstudiantePorRequisito.estudiante,
          requisito: updatedEstudiantePorRequisito.requisito,
          es_cumplido: updatedEstudiantePorRequisito.es_cumplido,
        };
      } catch (error) {
        console.error(`Error updating estudiante por requisito with id ${id}:`, error);
        throw new Error(`Error updating estudiante por requisito with id ${id}`);
      }
    },
    deleteEstudiantePorRequisito: async (_: any, { id }: any) => {
      try {
        const deletedEstudiantePorRequisito = await deleteEstudiantePorRequisito(id);
        return !!deletedEstudiantePorRequisito;
      } catch (error) {
        console.error(`Error deleting estudiante por requisito with id ${id}:`, error);
        throw new Error(`Error deleting estudiante por requisito with id ${id}`);
      }
    },
  },
};