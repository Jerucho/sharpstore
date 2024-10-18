import { Navbar } from "../../componentes/Navbar/Navbar";
import { Banner } from "../../componentes/Banner/Banner";
import { Grupo } from "../../componentes/Grupo/Grupo";
import { GaleriaPromociones } from "../../componentes/Promociones/GaleriaPromociones";
import { Titulo } from "../../componentes/Titulo/Titulo";
import Footer from "../../componentes/Footer/Footer";

export const Home = () => {
  const productosVendidos = [
    {
      id: 1,
      nombre: "Camiseta Básica",
      precio: 19.99,
      imagen:
        "https://dondurazno.com/images/Camiseta-blanca-mujer-estampada-950wXautoh-v1.webp",
    },
    {
      id: 2,
      nombre: "Cinturón de Cuero",
      precio: 14.99,
      imagen:
        "https://rockfordpe.vtexassets.com/arquivos/ids/277754/https---s3.amazonaws.com-ecom-imagenes.forus-digital.xyz.peru-ROCKFORD-RK102031466_645_1.jpg?v=638104311955230000",
    },
    {
      id: 3,
      nombre: "Vestido de Verano",
      precio: 49.99,
      imagen:
        "https://m.media-amazon.com/images/I/811OIctfUQL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 4,
      nombre: "Leggings",
      precio: 19.99,
      imagen:
        "https://www.pionier.pe/assets/upload/thumb/producto/1000/5051114080_7.jpg",
    },
    {
      id: 5,
      nombre: "Chaqueta Impermeable",
      precio: 39.99,
      imagen:
        "https://rasecoutdoorsperu.com/cdn/shop/products/chubasquero-ninos-montana-y-trekking-quechua-mh100_2.jpg?v=1660439289s",
    },
  ];

  const productosPromocion = [
    {
      id: 1,
      nombre: "Sudadera con Capucha",
      precio: 29.99,
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_814842-MPE51186925348_082022-O.webp",
    },
    {
      id: 2,
      nombre: "Blusa de Seda",
      precio: 29.99,
      imagen:
        "https://banaty.pe/cdn/shop/files/Copia_de_4174.jpg?v=1725732746&width=1946",
    },
    {
      id: 3,
      nombre: "Bolso de Mano",
      precio: 79.99,
      imagen:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/129814861_1/w=800,h=800,fit=pad",
    },
    {
      id: 4,
      nombre: "Sombrero de Paja",
      precio: 24.99,
      imagen:
        "https://http2.mlstatic.com/D_Q_NP_698176-MPE69871355274_062023-O.webp",
    },
    {
      id: 5,
      nombre: "Pantalones Cortos Deportivos",
      precio: 14.99,
      imagen: "https://m.media-amazon.com/images/I/51AWKhIKDSL._AC_UY1000_.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />
      <Titulo texto="Más vendidos" />
      <Grupo productos={productosVendidos} />
      <Titulo texto="Promociones" />
      <Grupo productos={productosPromocion} />
      <GaleriaPromociones />
      <Footer />
    </>
  );
};
