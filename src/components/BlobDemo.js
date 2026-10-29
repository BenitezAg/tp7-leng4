import { useState } from "react";

export default function BlobDemo() {
  const [blob, setBlob] = useState(null);
  const [mensaje, setMensaje] = useState("");

  // 1) Crear un Blob de texto (.txt)
  const crearBlob = () => {
    const texto = "Hola, este es el contenido de mi archivo creado con un Blob en React.";
    const nuevoBlob = new Blob([texto], { type: "text/plain" });
    setBlob(nuevoBlob);
    setMensaje(`Blob creado. Tipo: ${nuevoBlob.type} - Tamaño: ${nuevoBlob.size} bytes.`);
  };

  // 2) Descargar el Blob como archivo local
  const descargarBlob = () => {
    if (!blob) {
      setMensaje("Primero tenés que crear el Blob de texto.");
      return;
    }
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "archivo.txt";
    enlace.click();
    URL.revokeObjectURL(url);
    setMensaje("Descarga iniciada: archivo.txt");
  };

  // 3) Usar slice() para obtener una porción del Blob
  const usarSlice = async () => {
    if (!blob) {
      setMensaje("Primero tenés que crear el Blob de texto.");
      return;
    }
    const porcion = blob.slice(0, 10, "text/plain");
    const texto = await porcion.text();
    setMensaje(`slice(0, 10) devolvió ${porcion.size} bytes: "${texto}"`);
  };

  return (
    <section className="blob">
      <h1>Ejemplo de uso de Blobs</h1>
      <div className="blob__botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>
      {mensaje && <p className="blob__mensaje">{mensaje}</p>}
    </section>
  );
}
