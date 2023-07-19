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
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          nihil soluta sint fugiat sunt doloremque, suscipit maiores est? Culpa
          natus alias reiciendis nobis quo accusantium cupiditate optio quis,
          aperiam quos? Dolore quod, ab voluptas tempore soluta voluptatem
          perspiciatis molestiae mollitia cumque culpa unde esse, laborum
          exercitationem, tempora minima sequi maiores quasi. Labore voluptatem
          consequatur a dolorum blanditiis facilis fugiat numquam? Saepe maxime
          vero officia accusantium, modi illum facere consequatur incidunt
          nesciunt ad vitae libero voluptate unde dolorum odit sapiente autem
          veritatis voluptatum repellat earum. Animi quis atque numquam
          quibusdam officiis? Eius tempore, facilis doloribus et sapiente
          recusandae ut porro, vitae illo voluptate soluta unde ducimus
          voluptatem repellendus nisi dolore, illum vero. Cum quas adipisci
          maiores suscipit mollitia quidem commodi aliquam! Velit, ab? Ipsam
          esse quos debitis ut rem fugit veritatis beatae illum magni ratione
          labore molestiae, sapiente consequatur vero et. Ipsam illo debitis
          nostrum eos modi sunt, pariatur quas quis. Magni sunt dicta cumque
          deserunt aliquid officia repellendus sapiente magnam molestias!
          Dignissimos ipsum ex nulla debitis quibusdam esse vitae veniam ipsam
          deleniti sunt illo amet, quis, iusto quos saepe nam!
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
