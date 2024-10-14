import { ProductosCategoria } from "../../componentes/CategoriaProductos/ProductosCategoria";
import { Navbar } from "../../componentes/Navbar/Navbar";
import { Titulo } from "../../componentes/Titulo/Titulo";

export const Productos = () => {
  const productos = {
    hombre: [
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
        nombre: "Sudadera con Capucha",
        precio: 29.99,
        imagen:
          "https://http2.mlstatic.com/D_NQ_NP_814842-MPE51186925348_082022-O.webp",
      },
      {
        nombre: "Pantalones Cortos",
        precio: 24.99,
        imagen:
          "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/130040374_01/w=800,h=800,fit=pad",
      },
      {
        nombre: "Camisa de Vestir",
        precio: 39.99,
        imagen:
          "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/881727076_1/w=1004,h=1500,fit=cover",
      },
      {
        nombre: "Zapatos Deportivos",
        precio: 59.99,
        imagen:
          "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/4fc1af844b6f97a6e4b78aa0db019f44.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      },
      {
        nombre: "Cinturón de Cuero",
        precio: 14.99,
        imagen:
          "https://rockfordpe.vtexassets.com/arquivos/ids/277754/https---s3.amazonaws.com-ecom-imagenes.forus-digital.xyz.peru-ROCKFORD-RK102031466_645_1.jpg?v=638104311955230000",
      },
      {
        nombre: "Gorra",
        precio: 9.99,
        imagen:
          "https://thebox.com.pe/cdn/shop/files/DK-HT-00019-CML-1_2_1024x1024@2x.jpg?v=1719268655",
      },
      {
        nombre: "Reloj de Pulsera",
        precio: 99.99,
        imagen:
          "https://cdn.quicksell.co/-M_vON--5I2BR33hOWwP/products/-NnBlFRqW2-guevF65PB.jpg",
      },
    ],
    mujer: [
      {
        nombre: "Blusa de Seda",
        precio: 29.99,
        imagen:
          "https://banaty.pe/cdn/shop/files/Copia_de_4174.jpg?v=1725732746&width=1946",
      },
      {
        nombre: "Falda Larga",
        precio: 39.99,
        imagen:
          "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/883126221_1/w=1004,h=1500,fit=cover",
      },
      {
        nombre: "Vestido de Verano",
        precio: 49.99,
        imagen:
          "https://m.media-amazon.com/images/I/811OIctfUQL._AC_UF894,1000_QL80_.jpg",
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
        nombre: "Zapatos de Tacón",
        precio: 69.99,
        imagen:
          "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/7caf23d2217de4000eb25fa12cf6ed83.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      },
      {
        nombre: "Bolso de Mano",
        precio: 79.99,
        imagen:
          "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/129814861_1/w=800,h=800,fit=pad",
      },
      {
        nombre: "Bufanda de Lana",
        precio: 14.99,
        imagen:
          "https://http2.mlstatic.com/D_NQ_NP_921477-MLU74162617119_012024-O.webp",
      },
      {
        nombre: "Sombrero de Paja",
        precio: 24.99,
        imagen:
          "https://http2.mlstatic.com/D_Q_NP_698176-MPE69871355274_062023-O.webp",
      },
      {
        nombre: "Collar de Perlas",
        precio: 89.99,
        imagen:
          "https://mioh.pe/cdn/shop/files/1collareleganteconcuentasdeperlasdeimitacionparamujerpararegalo2_1000x1000.jpg?v=1706892230",
      },
    ],
    ninos: [
      {
        nombre: "Camiseta de Algodón",
        precio: 14.99,
        imagen:
          "https://s3.us-east-2.amazonaws.com/sami4tiendas.sami-shop.com/kayser.pe/images/productos/P3-84432.jpg",
      },
      {
        nombre: "Pantalones de Mezclilla",
        precio: 29.99,
        imagen:
          "https://i.pinimg.com/474x/d4/8b/99/d48b99aefe59dbeea7a9985b967cc09e.jpg",
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
        imagen:
          "https://m.media-amazon.com/images/I/51AWKhIKDSL._AC_UY1000_.jpg",
      },
      {
        nombre: "Vestido de Flores",
        precio: 24.99,
        imagen:
          "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/bf0360f31222e86a88405905faefa6e4.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
      },
      {
        nombre: "Zapatos de Niños",
        precio: 34.99,
        imagen:
          "https://hushpuppiespe.vtexassets.com/arquivos/ids/337848-800-auto?v=638460209363430000&width=800&height=auto&aspect=true",
      },
      {
        nombre: "Gorra",
        precio: 9.99,
        imagen:
          "https://kast.pe/cdn/shop/files/Gorra-de-b-isbol-para-ni-os-visera-con-visera-para-el-sol-sombrero-con-visera_1_grande.jpg?v=1705506247",
      },
      {
        nombre: "Mochila Escolar",
        precio: 19.99,
        imagen:
          "https://samsonite.com.pe/cdn/shop/files/d2d478de05bad0511a0597cb711a674338aaea562e4f80697ce90d7eda6ea0fe.jpg?v=1686953040",
      },
      {
        nombre: "Reloj Digital",
        precio: 29.99,
        imagen:
          "https://d3fvqmu2193zmz.cloudfront.net/items_2/uid_commerces.1/uid_items_2.FDLMK6692MOS/500x500/6659D3FE30757-Reloj-Digital-Ni-a-1451.webp",
      },
    ],
  };

  return (
    <>
      <div
        style={{
          padding: "80px 100px",
        }}
      >
        <Navbar />

        <div>
          <Titulo texto="Hombres" />
          <ProductosCategoria categoria={productos.hombre} />
          <Titulo texto="Mujeres" />
          <ProductosCategoria categoria={productos.mujer} />
          <Titulo texto="Niños" />
          <ProductosCategoria categoria={productos.ninos} />
        </div>
      </div>
    </>
  );
};
