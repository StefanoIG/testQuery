import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SliderBar = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-light border-end shadow-sm">
            <div className="p-3 bg-primary text-white text-center">
                <h4>Menu</h4>
            </div>
            <Nav className="flex-column p-3">
                <Nav.Item className="mb-2">
                    <Link to="/estudiantes" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-person-fill me-2"></i> 
                        <span>Estudiantes</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link to="/empresas" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-building me-2"></i> 
                        <span>Empresas</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link to="/requisitos" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-check-circle-fill me-2"></i> 
                        <span>Requisitos</span>
                    </Link>
                </Nav.Item>
                <Nav.Item className="mb-2">
                    <Link to="/carrera" className="nav-link text-dark d-flex align-items-center">
                        <i className="bi bi-award-fill me-2"></i> 
                        <span>Carrera</span>
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default SliderBar;
