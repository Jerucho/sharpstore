import React from "react";
import "./promoff.css";

const CompoPromo = () => {
  const images = [
    { src: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/buzo-adicolor-sst.jpg', category: 'Promos' },
    { src: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/buzo-adicolor-sst.jpg', category: 'Promos' },
    { src: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/buzo-adicolor-sst.jpg', category: 'Verano 2025' },
    { src: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/buzo-adicolor-sst.jpg', category: 'Verano 2025' },
    { src: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/buzo-adicolor-sst.jpg', category: '80% OFF' },
    { src: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2a9bff8cb30341c0847bac8200bc5fb3_9366/buzo-adicolor-sst.jpg', category: '80% OFF' },
  ];

  return (
    <div className="container">
      <section className="section">
        <h2>Promosf <span className="red-dot">•</span></h2>
        <div className="grid">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="card">
              <img src={image.src} alt="Promo" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Verano 2025 <span className="red-dot">•</span></h2>
        <div className="grid">
          {images.slice(2, 6).map((image, index) => (
            <div key={index} className="card">
              <img src={image.src} alt="Verano 2025" />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>80% OFF <span className="red-dot">•</span></h2>
        <div className="grid">
          {images.slice(6, 10).map((image, index) => (
            <div key={index} className="card">
              <img src={image.src} alt="80% OFF" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default CompoPromo;
