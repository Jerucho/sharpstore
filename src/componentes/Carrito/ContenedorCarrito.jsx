import { ProductoCarrito } from "./ProductoCarrito";
import "./contenedorCarrito.css";
export const ContenedorCarrito = () => {
  const productos = [
    {
      nombre: "Camiseta Básica",
      precio: 19.99,
      imagen:
        "https://dondurazno.com/images/Camiseta-blanca-mujer-estampada-950wXautoh-v1.webp",
    },
    {
      nombre: "Jeans Slim Fit",
      precio: 49.99,
      imagen:
        "https://pieers.com/media/catalog/product/cache/097385f17d397554f16923050d48d089/p/r/prp0b2c0icx_1.jpg",
    },
    {
      nombre: "Chaqueta de Cuero",
      precio: 89.99,
      imagen:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125936720_01/w=800,h=800,fit=pad",
    },
    {
      nombre: "Chaqueta de Mezclilla",
      precio: 59.99,
      imagen:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/133275465_02/w=800,h=800,fit=pad",
    },
    {
      nombre: "Leggings",
      precio: 19.99,
      imagen:
        "https://www.pionier.pe/assets/upload/thumb/producto/1000/5051114080_7.jpg",
    },
    {
      nombre: "Chaqueta Impermeable",
      precio: 39.99,
      imagen:
        "https://rasecoutdoorsperu.com/cdn/shop/products/chubasquero-ninos-montana-y-trekking-quechua-mh100_2.jpg?v=1660439289s",
    },
    {
      nombre: "Sudadera con Estampado",
      precio: 19.99,
      imagen:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/a01db28a2af51234dd96023f224f73a3.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
    },
    {
      nombre: "Pantalones Cortos Deportivos",
      precio: 14.99,
      imagen: "https://m.media-amazon.com/images/I/51AWKhIKDSL._AC_UY1000_.jpg",
    },
  ];
  return (
    <>
      <div className="contenedor-carrito">
        {productos.map((producto, index) => (
          <ProductoCarrito key={index} producto={producto} />
        ))}
      </div>
    </>
  );
};
