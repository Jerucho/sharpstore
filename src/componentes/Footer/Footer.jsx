import React from 'react';
import '../Footer/Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>PRODUCTOS</h4>
                    <ul>
                        <li>Niños</li>
                        <li>Mujer</li>
                        <li>Hombre</li>
                        <li>Promos</li>
                        <li>Verano 2025</li>
                        <li>80% OFF</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>ASISTENCIA</h4>
                    <ul>
                        <li>Pago</li>
                        <li>Envío</li>
                        <li>Mapa de Sitio</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>INFORMACIÓN DE LA EMPRESA</h4>
                    <ul>
                        <li>Acerca de New</li>
                        <li>Trabaja en Nuestro Equipo</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>SÍGUENOS</h4>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" /></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" /></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><img src="https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1729036800&semt=ais_hybrid" /></a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>LIBRO DE RECLAMACIONES</h4>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn.www.gob.pe/uploads/campaign/photo/000/020/965/libro_reclamaciones.png" style={{ width: '50%' }} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
