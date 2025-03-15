import React, { useState } from "react";
import People from "../assets/Consulting_Isometric 1.png";

const Application = () => {
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  function writeInTextArea(event) {
    setComentario(event.target.value);
  }

  function Clique() {
    if (comentario.trim() !== "") {
      setComentarios([...comentarios, comentario]);
      setComentario("");
    }
  }

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      {/* Imagem */}
      <img src={People} alt="People" className="img-fluid mb-4 rounded shadow" style={{ maxWidth: "300px" }} />

      {/* Área de Comentário */}
      <textarea
        className="form-control mb-3 w-75"
        rows="3"
        placeholder="Escreva seu comentário..."
        value={comentario}
        onChange={writeInTextArea}
      ></textarea>

      {/* Botão */}
      <button className="btn btn-primary mb-3" onClick={Clique}>
        Comentar
      </button>

      {/* Lista de Comentários */}
      <ul className="list-group w-75">
        {comentarios.map((coment, index) => (
          <li key={index} className="list-group-item">
            {coment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Application;
