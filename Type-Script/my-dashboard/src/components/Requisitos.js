import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql } from '@apollo/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Definir consultas y mutaciones GraphQL
const GET_REQUISITOS = gql`
  query GetRequisitos {
    requisitos {
      id
      nombre_requisito
    }
  }
`;

const CREATE_REQUISITO = gql`
  mutation CreateRequisito($input: CreateRequisitoInput!) {
    createRequisito(input: $input) {
      id
      nombre_requisito
    }
  }
`;

const DELETE_REQUISITO = gql`
  mutation DeleteRequisito($id: ID!) {
    deleteRequisito(id: $id)
  }
`;

const Requisitos = () => {
  const { loading, error, data, refetch } = useQuery(GET_REQUISITOS);
  const [createRequisito] = useMutation(CREATE_REQUISITO);
  const [deleteRequisito] = useMutation(DELETE_REQUISITO);
  const listRef = useRef();

  const handleAddRequisito = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Agregar Requisito',
      html: '<input id="swal-input1" class="swal2-input" placeholder="Nombre del Requisito">',
      focusConfirm: false,
      preConfirm: () => {
        const nombre_requisito = document.getElementById('swal-input1').value;
        return { nombre_requisito };
      }
    });

    if (formValues) {
      try {
        await createRequisito({ variables: { input: formValues } });
        refetch(); // Refetch the query to update the list
        Swal.fire('¡Éxito!', 'Requisito agregado correctamente.', 'success');
      } catch (error) {
        Swal.fire('¡Error!', 'Hubo un problema al agregar el requisito.', 'error');
      }
    }
  };

  const handleDeleteRequisito = async (id) => {
    try {
      await deleteRequisito({ variables: { id } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Requisito eliminado correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al eliminar el requisito.', 'error');
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Requisitos', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('requisitos.pdf');
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Requisitos</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddRequisito}>
        Agregar Requisito
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {data.requisitos.map(requisito => (
            <li key={requisito.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Nombre del Requisito: {requisito.nombre_requisito}</h5>
              </div>
              <button className="btn btn-danger" onClick={() => handleDeleteRequisito(requisito.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Requisitos;