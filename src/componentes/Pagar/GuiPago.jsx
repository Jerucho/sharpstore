import "../Pagar/pago.css";
import logoYape from "../../assets/yape.png";
import logoMercadoPago from "../../assets/mp.png";
import logoPlin from "../../assets/plin.png";
const GuiPago = () => {
  return (
    <>
      <div className="ventana-pago">
        <form className="formulario">
          <div className="opciones-pago">
            <button name="yape" type="button">
              <img src={logoYape} alt="logo-yape" />
            </button>
            <button name="mercado-pago" type="button">
              <img
                src={logoMercadoPago}
                alt="logo-mercado-pago"
                id="mercado-pago"
              />
            </button>
            <button name="plin" type="button">
              <img src={logoPlin} alt="logo-plin" />
            </button>
          </div>
          <div className="separador">
            <hr className="linea" />
            <p>o pagar con tarjeta de crédito</p>
            <hr className="linea" />
          </div>
          <div className="info-tarjeta">
            <div className="input_container">
              <label htmlFor="nombrePersona" className="etiqueta">
                Nombre completo del titular de la tarjeta
              </label>
              <input
                id="nombrePersona"
                className="entrada-tarjeta"
                type="text"
                name="input-name"
                title="Inpit title"
                placeholder="Introduce tu nombre completo"
              />
            </div>
            <div className="input_container">
              <label htmlFor="numero-tarjeta" className="etiqueta">
                Numero de Tarjeta
              </label>
              <input
                id="numero-tarjeta"
                className="entrada-tarjeta"
                type="number"
                name="input-name"
                title="Inpit title"
                placeholder="0000 0000 0000 0000"
              />
            </div>
            <div className="input_container">
              <label htmlFor="fecha-vencimiento" className="etiqueta">
                Fecha de vencimiento / CVV
              </label>
              <div className="split">
                <input
                  id="fecha-vencimiento"
                  className="entrada-tarjeta"
                  type="text"
                  name="vencimiento"
                  title="Fecha de vencimiento"
                  placeholder="01/23"
                />
                <input
                  id="codigo-seguridad"
                  className="entrada-tarjeta"
                  type="number"
                  name="cvv"
                  title="CVV"
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>
          <button className="btn-comprar">Procesar</button>
        </form>
      </div>
      <div />
    </>
  );
};

export default GuiPago;
