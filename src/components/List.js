import React, { useState, useEffect } from "react";

const ListItem = ({ todos, index, handleRemoveItem, handleUpdateItem }) => {
  return (
    <li>
      <span>{todos.todo}</span>
      <button onClick={() => handleRemoveItem(index)}>remove</button>
    </li>
  );
};

const List = ({ data, handleRemoveItem, handleUpdateItem }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(data);
  }, []);

  if (!(todos.length > 0)) {
    return (
      <ul>
        <li>Please insert items</li>
      </ul>
    );
  }

  return (
    <ul>
      {todos.map((item, index) => (
        <ListItem
          key={item.todo}
          index={index}
          handleRemoveItem={handleRemoveItem}
          handleUpdateItem={handleUpdateItem}
          todos={item}
        />
      ))}
    </ul>
  );
};

export default List;
