import { useState, useEffect } from "react";

export const Banner = () => {
  const images = [
    "https://img.freepik.com/vector-gratis/banner-rebajas-verano-plano-foto_23-2148968282.jpg",
    "img2",
    "img3",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section>
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default Banner;
