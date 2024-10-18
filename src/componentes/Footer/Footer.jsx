import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
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
          <ul className="redes">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              id="facebook"
            ></a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              id="instagram"
            ></a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              id="tiktok"
            ></a>
          </ul>
        </div>
        <div className="footer-section">
          <h4>LIBRO DE RECLAMACIONES</h4>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.www.gob.pe/uploads/campaign/photo/000/020/965/libro_reclamaciones.png"
              style={{ width: "50%" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
