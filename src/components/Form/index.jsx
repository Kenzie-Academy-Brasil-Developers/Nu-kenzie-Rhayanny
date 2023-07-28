import { Input } from "../Inputs";
import { Select } from "./FormSelect";
import { useState } from "react";
import styles from "../Form/style.module.scss";

export const Form = ({ setNoteList, noteList }) => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [option, setOption] = useState("entrada");

  const addNote = (formData) => {
    setNoteList([...noteList, formData]);
  };

  const submit = (event) => {
    event.preventDefault();
    let valueNumber = Number(value);
    const newNote = {
      id: crypto.randomUUID(),
      description: message,
      value: valueNumber,
      type: option,
    };
    addNote(newNote);
    setValue("");
    setMessage("");
  };

  return (
    <form className={styles.containerForm} onSubmit={submit}>
      <Input
        label="Descrição"
        id="title"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={message}
        setValue={setMessage}
        exemple="Ex: Compra de roupas"
        required
      />

      <Input
        label="Valor (R$)"
        id="number"
        type="number"
        placeholder="1"
        value={value}
        setValue={setValue}
        required
      />

      <Select value={option} setValue={setOption} />

      <button className="btn">Inserir Valor</button>
    </form>
  );
};
