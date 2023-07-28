import Styles from "../TotalMoney/style.module.scss";
export const TotalMoney = ({ noteList }) => {
  const totalValue = noteList.reduce((preValue, note) => {
    let cont = parseFloat(note.value);
    if (note.type === "entrada") {
      return preValue + cont;
    } else {
      return preValue - cont;
    }
  }, 0);

  return (
    <section className={Styles.totalValue}>
      <div>
        <h2 className="title three">Valor total:</h2>
        <p className="title three">
          {totalValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <p className="Headline">O valor se refere ao saldo</p>
    </section>
  );
};
