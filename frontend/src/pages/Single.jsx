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
          <img src="https://pbs.twimg.com/media/EyU5_QVU4AAB1x0.jpg" alt="" />
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
          Allez parait qu'il faut marquer un truc. ça doit faire 5 mois que j'ai
          débuté cette formation. C'est beaucoup de trajet en train , je dois
          être facile à du 50k km au moins.
        </p>
        <p>
          Mais j'ai pu apprendre des choses, comme que j'aime ce métier. Certes
          j'en chie mais aussi j'apprends des trucs et ça me donne d'apprendre
          et évoluer.
        </p>
        <p>
          Mais ça va, j'aurai aimé avoir plus de jours pour améliorer ce
          checkpoint mais je vais pas m'en faire car je vais pouvoir l'améliorer
          et tenter d'intégrer des choses plus complexe.
        </p>
        <p>
          C'était pas évident cette méthode d'apprentisage, mais je suis rester
          là . .Car j'ai envie de réussir. . Maintenant je vais pouvoir dormir
          car j'en pouvais plus du trajet.
        </p>
        <p>
          Merci Romain et Justine pour la patience et cet envie d'apprendre des
          trucs.. Sincérement Merci .. Max
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
