import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo do Space Lovers" width="70" height="70" />
        <h1>Space Lovers</h1>
      </div>
      <div className={styles.cabecalho__container}>
        <input
          className={styles.cabecalho__input}
          type="text"
          placeholder="O que você procura?"
        />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  );
}
