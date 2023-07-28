export const Select = ({ value, setValue }) => {
  const selectOpition = (event) => {
    const selectValue = event.target.value;
    setValue(selectValue);
  };
  return (
    <>
      <label className="Headline body">Tipo de valor</label>
      <select value={value} onChange={selectOpition}>
        <option value="entrada">Entrada</option>
        <option value="despesas">Despesas</option>
      </select>
    </>
  );
};
