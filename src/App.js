import React, { useEffect, useState } from "react";

import List from "./components/List";

function App() {
  const dummyData = [
    { todo: "feed the dog", status: "pending" },
    { todo: "feed the dog", status: "pending" },
    { todo: "feed the dog", status: "pending" },
    { todo: "feed the dog", status: "pending" },
  ];

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(dummyData);
  }, []);

  const handleRemoveItem = (index) => {
    let currentItems = [...todos];
    currentItems.splice(index, 1);
    console.log({ index, currentItems });
    setTodos(currentItems);
  };

  const handleUpdateItem = (index) => {
    let currentItems = [...todos];
    currentItems(index).status = "completed";
    console.log({ index, currentItems });
    setTodos(currentItems);
  };

  if (!todos.length > 0) {
    return <p>getting data</p>;
  }

  return (
    todos.length > 0 && (
      <div className="App">
        <div className="todo-wrapper">
          <List
            data={todos}
            handleRemoveItem={handleRemoveItem}
            handleUpdateItem={handleUpdateItem}
          />
        </div>
      </div>
    )
  );
}

export default App;
