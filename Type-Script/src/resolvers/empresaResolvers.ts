import { getEmpresas, getEmpresaById, createEmpresa, updateEmpresa, deleteEmpresa } from '../services/empresaService';

export const empresaResolvers = {
  Query: {
    empresas: async () => {
      try {
        return await getEmpresas();
      } catch (error) {
        console.error('Error fetching empresas:', error);
        throw new Error('Error fetching empresas');
      }
    },
    empresa: async (_: any, { id }: any) => {
      try {
        return await getEmpresaById(id);
      } catch (error) {
        console.error(`Error fetching empresa with id ${id}:`, error);
        throw new Error(`Error fetching empresa with id ${id}`);
      }
    },
  },
  Mutation: {
    createEmpresa: async (_: any, { input }: any) => {
      try {
        const createdEmpresa = await createEmpresa(input);
        return createdEmpresa;
      } catch (error) {
        console.error('Error creating empresa:', error);
        throw new Error('Error creating empresa');
      }
    },
    updateEmpresa: async (_: any, { id, input }: any) => {
      try {
        const updatedEmpresa = await updateEmpresa(id, input);
        return updatedEmpresa;
      } catch (error) {
        console.error(`Error updating empresa with id ${id}:`, error);
        throw new Error(`Error updating empresa with id ${id}`);
      }
    },
    deleteEmpresa: async (_: any, { id }: any) => {
      try {
        const deletedEmpresa = await deleteEmpresa(id);
        return !!deletedEmpresa;
      } catch (error) {
        console.error(`Error deleting empresa with id ${id}:`, error);
        throw new Error(`Error deleting empresa with id ${id}`);
      }
    },
  },
};
