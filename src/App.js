import React, { useEffect, useState } from "react";

import WebFont from "webfontloader";

import List from "./components/List";

import TextField from "./components/Textfield";

function App() {
  const dummyData = [
    { todo: "feed the dog", status: "pending" },
    { todo: "feed the cat", status: "pending" },
    { todo: "buy new book", status: "pending" },
    { todo: "buy new shoes", status: "pending" },
  ];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
    setTodos(dummyData);
  }, []);

  const handleRemoveItem = (index) => {
    let currentItems = [...todos];
    currentItems.splice(index, 1);
    console.log({ index, currentItems });
    setTodos((prevItems) => currentItems);
  };

  const handleUpdateItem = (index) => {
    let currentItems = [...todos];
    currentItems[index].status = "completed";
    console.log({ index, currentItems });
    setTodos((prevItems) => currentItems);
  };

  const addNewItem = (obj) => {
    let newItems = [...todos];
    newItems.push(obj);
    console.log({ obj, newItems });
    setTodos((prevItems) => newItems);
  };

  if (!todos.length > 0) {
    return <p>getting data</p>;
  }

  return (
    <div className="App">
      <div className="todo-wrapper">
        <TextField addNewItem={addNewItem} />
        <List
          data={todos}
          handleRemoveItem={handleRemoveItem}
          handleUpdateItem={handleUpdateItem}
          addNewItem={addNewItem}
        />
      </div>
    </div>
  );
}

export default App;
