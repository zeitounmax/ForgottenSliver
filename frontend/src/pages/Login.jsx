import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="auth">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <h1>Connexion</h1>
      <logo />
      <form>
        <input required type="text" placeholder="Pseudonyme" />
        <input required type="password" placeholder="Mot de passe" />
        <button type="submit">Valider</button>
        <p>Une erreur est survenu</p>
        <span>
          Tu n'as pas de compte ? <Link to="/register">S'inscrire</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
