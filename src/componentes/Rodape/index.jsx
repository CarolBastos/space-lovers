import React from "react";
import linkedin from "./linkedin.svg";
import styles from "./Rodape.module.scss";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape__icones}>
        <a
          href="https://www.linkedin.com/in/carol-bastos/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="ícone do linkedin" width="30" height="30" />
        </a>
      </div>
      <p>Desenvolvido por Carol Bastos</p>
    </footer>
  );
}
