export const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  exemple,
}) => {
  return (
    <div>
      <label className="Headline body" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        required
      />
      <p className="Headline body">{exemple}</p>
    </div>
  );
};
