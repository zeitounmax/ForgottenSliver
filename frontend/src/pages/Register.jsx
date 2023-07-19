import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth">
      <h1>S'inscrire</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button type="submit">Valider</button>
        <p>Une erreur est survenue</p>
        <span>
          Vous avez un compte ? <Link to="/login">Se Connecter</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
