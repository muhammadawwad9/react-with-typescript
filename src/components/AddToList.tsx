import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const addHandler = (): void => {
    if (!input.name || !input.age || !input.name) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note,
      },
    ]);
    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };
  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={changeHandler}
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        name="age"
        onChange={changeHandler}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.img}
        name="img"
        onChange={changeHandler}
      />
      <textarea
        placeholder="Note"
        value={input.note}
        name="note"
        onChange={changeHandler}
      ></textarea>
      <button className="AddToList-btn" onClick={addHandler}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
