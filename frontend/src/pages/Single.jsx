import React from "react";
import "../style.scss";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>ZeitounMax</span>
            <p>Posté il y a deux jours</p>
          </div>
          <div className="edit">
            <Link to="/write?edit=2">
              <img src={Edit} alt="" />
            </Link>
            <Link to="/write?delete=3">
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>Bonjour Ceci est un texte</h1>
        <p>
          Il est beau le texte.Sinon ça va c'est la dernière semaine et je suis
          assez confiant pour la suite
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
