import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../style.scss";

function Write() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const saveProject = () => {
    fetch("http://localhost:8000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description: value,
        image: "https://picsum.photos/200/300",
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("enregistrement réussi");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateProject = () => {
    fetch("http://localhost:8000/post", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "Nouveau titre", description: value }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info(data);
        alert("Modification réussi");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteProject = () => {
    fetch("http://localhost:8000/post/:id", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: value, description: value }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Suppresion réussie");
        }
      })
      .catch((error) => {
        console.error(error);
        // Traiter l'erreur ici si nécessaire
      });
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tapez votre texte"
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
            <button type="button" onClick={saveProject}>
              Enregistrer
            </button>
            <button type="button" onClick={updateProject}>
              Mettre à jour
            </button>
            <button type="button" onClick={deleteProject}>
              Supprimer
            </button>
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
            <label htmlFor="dossier">Dossiers</label>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
