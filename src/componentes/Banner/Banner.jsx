import { useState, useEffect } from "react";

export const Banner = () => {
  const images = [
    "https://bassika.pe/cdn/shop/files/banner_horizontal_77797195-5b57-4607-a52d-3488831fc2a7.jpg?v=1716308998&width=1024",
    "https://www.delascar.com/cdn/shop/files/BANNER_SITIO_WEB-Banner.png?v=1716412032&width=3840",
    "https://media.clarita.com.co/modules/tm_imageslider/views/img/0b501615c097c13564cc218c1c01d91021b78cb9_Banner6.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section
      style={{
        padding: "30px 100px",
      }}
    >
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        style={{ width: "100%", height: "55vh" }}
      />
    </section>
  );
};

export default Banner;
