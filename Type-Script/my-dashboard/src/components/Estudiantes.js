import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql } from '@apollo/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const GET_ESTUDIANTES = gql`
  query GetEstudiantes {
    estudiantes {
    id
    nombre_estudiante
    apellido_estudiante
    correo_estudiante
    fecha_nacimiento
  }
  }
`;

const CREATE_ESTUDIANTE = gql`
  mutation Mutation($input: CreateEstudianteInput!) {
  createEstudiante(input: $input) {
    id
    carrera {
      id
    }
    nombre_estudiante
    apellido_estudiante
    correo_estudiante
    fecha_nacimiento
  }
}

`;

const DELETE_ESTUDIANTE = gql`
  mutation DeleteEstudiante($id: ID!) {
    deleteEstudiante(id: $id)
  }
`;

const Estudiantes = () => {
  const { loading, error, data, refetch } = useQuery(GET_ESTUDIANTES);
  const [createEstudiante] = useMutation(CREATE_ESTUDIANTE);
  const [deleteEstudiante] = useMutation(DELETE_ESTUDIANTE);
  const listRef = useRef();

const handleAddEstudiante = async () => {
  const { value: formValues } = await Swal.fire({
    title: 'Agregar Estudiante',
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Nombre">' +
      '<input id="swal-input2" class="swal2-input" placeholder="Apellido">' +
      '<input id="swal-input3" class="swal2-input" placeholder="Correo">' +
      '<input id="swal-input4" class="swal2-input" placeholder="Fecha de Nacimiento (YYYY-MM-DD)">' +
      '<input id="swal-input5" class="swal2-input" placeholder="ID de Carrera">',
    focusConfirm: false,
    preConfirm: () => {
      const nombre_estudiante = document.getElementById('swal-input1').value;
      const apellido_estudiante = document.getElementById('swal-input2').value;
      const correo_estudiante = document.getElementById('swal-input3').value;
      const fecha_nacimiento = document.getElementById('swal-input4').value;
      const carreraId = document.getElementById('swal-input5').value;
      return { 
        nombre_estudiante, 
        apellido_estudiante, 
        correo_estudiante, 
        fecha_nacimiento, 
        carrera: { id: carreraId } 
      };
    }
  });

  if (formValues) {
    try {
      await createEstudiante({ variables: { input: formValues } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Estudiante agregado correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al agregar el estudiante.', 'error');
    }
  }
};

  const handleDeleteEstudiante = async (id) => {
    try {
      await deleteEstudiante({ variables: { id } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Estudiante eliminado correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al eliminar el estudiante.', 'error');
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Estudiantes', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('estudiantes.pdf');
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Estudiantes</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddEstudiante}>
        Agregar Estudiante
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {data.estudiantes.map(estudiante => (
            <li key={estudiante.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Nombre: {estudiante.nombre_estudiante}</h5>
                <p>Apellido: {estudiante.apellido_estudiante}</p>
                <p>Correo: {estudiante.correo_estudiante}</p>
                <p>Fecha de Nacimiento: {estudiante.fecha_nacimiento}</p>
                <p>Carrera: {estudiante.carrera}</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleDeleteEstudiante(estudiante.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Estudiantes;
