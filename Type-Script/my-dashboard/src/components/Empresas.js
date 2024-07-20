import React, { useRef } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { gql } from '@apollo/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Definir consultas y mutaciones GraphQL
const GET_EMPRESAS = gql`
  query GetEmpresas {
    empresas {
      id
      nombre_empresa
      nombre_tutor_empresa
      email_tutor_empresa
      telefono_empresa
      direccion_empresa
      num_practicantes
      area_practicas
    }
  }
`;

const CREATE_EMPRESA = gql`
  mutation CreateEmpresa($input: CreateEmpresaInput!) {
    createEmpresa(input: $input) {
      id
      nombre_empresa
      nombre_tutor_empresa
      email_tutor_empresa
      telefono_empresa
      direccion_empresa
      area_practicas
      num_practicantes
    }
  }
`;

const DELETE_EMPRESA = gql`
  mutation DeleteEmpresa($id: ID!) {
    deleteEmpresa(id: $id)
  }
`;

const Empresa = () => {
  const { loading, error, data, refetch } = useQuery(GET_EMPRESAS);
  const [createEmpresa] = useMutation(CREATE_EMPRESA);
  const [deleteEmpresa] = useMutation(DELETE_EMPRESA);
  const listRef = useRef();

  const handleAddEmpresa = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Agregar Empresa',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Nombre de la Empresa">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Nombre del Tutor">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Email del Tutor">' +
        '<input id="swal-input4" class="swal2-input" placeholder="Teléfono">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Dirección">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Área de Prácticas">' +
        '<input id="swal-input7" class="swal2-input" placeholder="Número de Practicantes">',
      focusConfirm: false,
      preConfirm: () => {
        const nombre_empresa = document.getElementById('swal-input1').value;
        const nombre_tutor_empresa = document.getElementById('swal-input2').value;
        const email_tutor_empresa = document.getElementById('swal-input3').value;
        const telefono_empresa = document.getElementById('swal-input4').value;
        const direccion_empresa = document.getElementById('swal-input5').value;
        const area_practicas = document.getElementById('swal-input6').value;
        const num_practicantes = parseInt(document.getElementById('swal-input7').value, 10);
        
        return { 
          nombre_empresa, 
          nombre_tutor_empresa, 
          email_tutor_empresa, 
          telefono_empresa, 
          direccion_empresa, 
          area_practicas, 
          num_practicantes 
        };
      }
    });
  
    if (formValues) {
      try {
        const { nombre_empresa, nombre_tutor_empresa, email_tutor_empresa, telefono_empresa, direccion_empresa, area_practicas, num_practicantes } = formValues;
        const input = {
          nombre_empresa,
          nombre_tutor_empresa,
          email_tutor_empresa,
          telefono_empresa,
          direccion_empresa,
          area_practicas,
          num_practicantes
        };
  
        await createEmpresa({ variables: { input } });
        refetch(); // Refetch the query to update the list
        Swal.fire('¡Éxito!', 'Empresa agregada correctamente.', 'success');
      } catch (error) {
        console.error('Error al agregar empresa:', error);
        Swal.fire('¡Error!', 'Hubo un problema al agregar la empresa.', 'error');
      }
    }
  };
  
  const handleDeleteEmpresa = async (id) => {
    try {
      await deleteEmpresa({ variables: { id } });
      refetch(); // Refetch the query to update the list
      Swal.fire('¡Éxito!', 'Empresa eliminada correctamente.', 'success');
    } catch (error) {
      Swal.fire('¡Error!', 'Hubo un problema al eliminar la empresa.', 'error');
    }
  };

  const generatePDF = () => {
    const input = listRef.current;
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text('Empresas', 10, 10);
      pdf.addImage(imgData, 'PNG', 10, 20);
      pdf.save('empresas.pdf');
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="mb-4">Empresas</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddEmpresa}>
        Agregar Empresa
      </button>
      <button className="btn btn-secondary mb-3 ml-2" onClick={generatePDF}>
        Generar PDF
      </button>
      <div ref={listRef}>
        <ul className="list-group">
          {data.empresas.map(empresa => (
            <li key={empresa.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>Nombre: {empresa.nombre_empresa}</h5>
                <p>Dirección: {empresa.direccion_empresa}</p>
                <p>Nombre del Tutor: {empresa.nombre_tutor_empresa}</p>
                <p>Email del Tutor: {empresa.email_tutor_empresa}</p>
                <p>Teléfono: {empresa.telefono_empresa}</p>
                <p>Área de Prácticas: {empresa.area_practicas}</p>
                <p>Número de Practicantes: {empresa.num_practicantes}</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleDeleteEmpresa(empresa.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Empresa;