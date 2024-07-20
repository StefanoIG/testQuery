import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql } from '@apollo/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Definir consultas y mutaciones GraphQL
const GET_CARRERAS = gql`
  query GetCarreras {
    carreras {
      id
      nombre_carrera
      num_semestres
    }
  }
`;

const CREATE_CARRERA = gql`
  mutation CreateCarrera($input: CreateCarreraInput!) {
    createCarrera(input: $input) {
      id
      nombre_carrera
      num_semestres
    }
  }
`;

const DELETE_CARRERA = gql`
  mutation DeleteCarrera($id: ID!) {
    deleteCarrera(id: $id)
  }
`;

const Carrera = () => {
  const { loading, error, data, refetch } = useQuery(GET_CARRERAS);
  const [createCarrera] = useMutation(CREATE_CARRERA);
  const [deleteCarrera] = useMutation(DELETE_CARRERA);
  const listRef = useRef();

  const handleAddCarrera = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Agregar Carrera',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Nombre de la Carrera">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Número de Semestres">',
      focusConfirm: false,
      preConfirm: () => {
        const nombre_carrera = document.getElementById('swal-input1').value;
        const num_semestres = parseInt(document.getElementById('swal-input2').value, 10);
        return { nombre_carrera, num_semestres };
      }
    });

    if (formValues) {
      try {
        await createCarrera({ variables: { input: formValues } });
        refetch(); // Refetch the query to update the list
        Swal.fire('¡Éxito!', 'Carrera agregada correctamente.', 'success');
      } catch (error) {
        Swal.fire('¡Error!', 'Hubo un problema al agregar la carrera.', 'error');
      }
    }
  };

  const handleDeleteCarrera = async (id) => {
    try {
      await deleteCarrera({ variables: { id } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Carrera eliminada correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al eliminar la carrera.', 'error');
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Carreras', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('carreras.pdf');
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Carreras</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddCarrera}>
        Agregar Carrera
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {data.carreras.map(carrera => (
            <li key={carrera.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Nombre de la Carrera: {carrera.nombre_carrera}</h5>
                <p>Número de Semestres: {carrera.num_semestres}</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleDeleteCarrera(carrera.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carrera;