import React from "react";

import "./TeacherItem.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/66192181?s=460&u=2ec162f7ea4ba4cbcaa12fe16d3f467798d29303&v=4"
          alt="Jônatas Silva"
        />
        <div>
          <strong>Jônatas Silva</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
