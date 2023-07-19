import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style.scss";

function Write() {
  const [value, setValue] = useState("");
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Titre" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publication</h1>
          <span>
            <b>Status: </b> Projet
          </span>
          <span>
            <b>Visibilité: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            Télécharger une image
          </label>
          <div className="buttons">
            <button type="submit">Sauver le projet</button>
            <button type="submit">Mettre à jour </button>
          </div>
        </div>
        <div className="item">
          <h1>Catégories</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Articles</label>{" "}
          </div>

          <div className="cat">
            <input type="radio" name="dossier" value="dossier" id="dossier" />
            <label htmlFor="art">Dossiers</label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
