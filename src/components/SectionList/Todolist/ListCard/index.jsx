import styles from "../ListCard/style.module.scss";

export const ListCard = ({ description, value, id, type, removeNote }) => {
  return (
    <li
      className={`${styles.listCard} ${
        type === "entrada" ? styles.green : styles.grey
      }`}
    >
      <div>
        <h3 className="title three">{description}</h3>
        <p className="Headline body">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div>
        <p className="Headline body">{type}</p>
        <button className="btnExit" onClick={() => removeNote(id)}>
          Excluir
        </button>
      </div>
    </li>
  );
};
