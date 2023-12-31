import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Articles</h6>
          </Link>
          <Link className="link" to="/?cat=dossier">
            <h6>Dossiers</h6>
          </Link>

          <Link className="link" to="/login">
            <h6>Connexion</h6>
          </Link>
          <Link className="link" to="/register">
            <h6>Enregistrement</h6>
          </Link>
          <span className="write">
            <Link className="link" to="/write">
              Ecrire
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
