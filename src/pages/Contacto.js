import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="pagina">
      <h1>Contacto</h1>
      <form className="form" onSubmit={manejarEnvio}>
        <label>
          Nombre
          <input type="text" required />
        </label>
        <label>
          Correo electrónico
          <input type="email" required />
        </label>
        <label>
          Mensaje
          <textarea rows="4" required />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {enviado && <p className="blob__mensaje">¡Gracias! Recibimos tu mensaje.</p>}
    </section>
  );
}
