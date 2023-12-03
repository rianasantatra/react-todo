import React, { useState, useEffect } from "react";

import { AiOutlineCheck } from "react-icons/ai";

import { BsFillTrashFill } from "react-icons/bs";

const ListItem = ({ todos, index, handleRemoveItem, handleUpdateItem }) => {
  return (
    <li>
      <div className="item-wrapper" onClick={() => handleUpdateItem(index)}>
        <span className="status">
          {todos.status == "completed" ? <AiOutlineCheck /> : null}
        </span>
        {todos.todo}
      </div>
      <button onClick={() => handleRemoveItem(index)}>
        <BsFillTrashFill />
      </button>
    </li>
  );
};

const List = ({ data, handleRemoveItem, handleUpdateItem }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(data);
  }, [data]);

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
          key={index}
          index={index}
          handleUpdateItem={handleUpdateItem}
          handleRemoveItem={handleRemoveItem}
          todos={item}
        />
      ))}
    </ul>
  );
};

export default List;
