import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SliderBar from './components/slidebar';
import Estudiantes from './components/Estudiantes';
import Empresas from './components/Empresas';
import Requisitos from './components/Requisitos';
import Carrera from './components/Carrera';
const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <SliderBar />
        <div className="flex-grow-1 p-3">
          <Routes>
            <Route path="/estudiantes" element={<Estudiantes/>} />
            <Route path="/empresas" element={<Empresas/>} />
            <Route path="/requisitos" element={<Requisitos/>} />
            <Route path="/carrera" element={ <Carrera />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;