import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App = () => {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      url:
        "https://media.gettyimages.com/photos/lebron-james-of-the-los-angeles-lakers-reacts-during-a-preseason-game-picture-id1174970091?s=2048x2048",
      age: 36,
      note: "one of the best players I've ever",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
