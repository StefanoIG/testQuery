import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App'; // Asegúrate de importar el componente principal App
import ApolloWrapper from './apollo';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloWrapper>
      <App /> {/* Renderiza el componente App que contiene el Dashboard */}
    </ApolloWrapper>
  </React.StrictMode>
);
