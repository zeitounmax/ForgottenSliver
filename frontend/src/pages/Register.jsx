import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/auth.register", {
        method: "POST",
        body: JSON.stringify(inputs),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.info(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <h1>S'inscrire</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Pseudonyme"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          Valider
        </button>
        <p>Une erreur est survenue</p>
        <span>
          Vous avez un compte ? <Link to="/login">Se Connecter</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
