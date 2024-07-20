import { getEstudiantes, getEstudianteById, createEstudiante, updateEstudiante, deleteEstudiante } from '../services/estudiantesService';

export const studentResolvers = {
  Query: {
    estudiantes: async () => {
      try {
        return await getEstudiantes();
      } catch (error) {
        console.error('Error fetching estudiantes:', error);
        throw new Error('Error fetching estudiantes');
      }
    },
    estudiante: async (_: any, { id }: any) => {
      try {
        return await getEstudianteById(id);
      } catch (error) {
        console.error(`Error fetching estudiante with id ${id}:`, error);
        throw new Error(`Error fetching estudiante with id ${id}`);
      }
    },
  },
  Mutation: {
    createEstudiante: async (_: any, { input }: any) => {
      try {
        const createdEstudiante = await createEstudiante(input);
        return {
          id: createdEstudiante.id,
          nombre_estudiante: createdEstudiante.nombre_estudiante,
          apellido_estudiante: createdEstudiante.apellido_estudiante,
          correo_estudiante: createdEstudiante.correo_estudiante,
          fecha_nacimiento: createdEstudiante.fecha_nacimiento,
        };
      } catch (error) {
        console.error('Error creating estudiante:', error);
        throw new Error('Error creating estudiante');
      }
    },
    updateEstudiante: async (_: any, { id, input }: any) => {
      try {
        const updatedEstudiante = await updateEstudiante(id, input);
        return {
          id: updatedEstudiante.id,
          nombre_estudiante: updatedEstudiante.nombre_estudiante,
          apellido_estudiante: updatedEstudiante.apellido_estudiante,
          correo_estudiante: updatedEstudiante.correo_estudiante,
          fecha_nacimiento: updatedEstudiante.fecha_nacimiento,
        };
      } catch (error) {
        console.error(`Error updating estudiante with id ${id}:`, error);
        throw new Error(`Error updating estudiante with id ${id}`);
      }
    },
    deleteEstudiante: async (_: any, { id }: any) => {
      try {
        const deletedEstudiante = await deleteEstudiante(id);
        return !!deletedEstudiante;
      } catch (error) {
        console.error(`Error deleting estudiante with id ${id}:`, error);
        throw new Error(`Error deleting estudiante with id ${id}`);
      }
    },
  },
};
