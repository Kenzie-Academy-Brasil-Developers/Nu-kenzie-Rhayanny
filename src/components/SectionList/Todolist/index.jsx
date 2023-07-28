import { ListCard } from "./ListCard";
export const Todolist = ({ noteList, removeNote }) => {
  return (
    <ul>
      {noteList.length === 0 ? (
        <p className="title two">Você ainda não possui nenhum lançamento</p>
      ) : (
        noteList.map((element) => (
          <ListCard
            key={element.id}
            id={element.id}
            description={element.description}
            value={element.value}
            type={element.type}
            removeNote={removeNote}
          />
        ))
      )}
    </ul>
  );
};
