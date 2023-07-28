import Nu from "../../assets/Nu Kenzie.svg";
import styles from "../Header/style.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src={Nu} alt="logoImg" />
      </div>
    </header>
  );
};
