import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
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
