import { Form } from "../Form";
import { Todolist } from "./Todolist";
import { useState } from "react";
import { TotalMoney } from "../TotalMoney";
import Styles from "../SectionList/styles.module.scss";

export const SectionList = () => {
  const [noteList, setNoteList] = useState([]);

  const removeNote = (removeId) => {
    const newNoteList = noteList.filter((note) => note.id !== removeId);
    setNoteList(newNoteList);
  };

  return (
    <div className="container">
      <section className={Styles.sectionFlex}>
        <div>
          <Form setNoteList={setNoteList} noteList={noteList} />
          {noteList.length > 0 && <TotalMoney noteList={noteList} />}
        </div>
        <div>
          <h2 className="title three ">Resumo financeiro</h2>
          <Todolist
            setNoteList={setNoteList}
            noteList={noteList}
            removeNote={removeNote}
          />
        </div>
      </section>
    </div>
  );
};
