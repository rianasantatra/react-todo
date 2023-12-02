import React, { useState } from "react";

const TextField = ({ addNewItem }) => {
  const [textVal, setTextVal] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setTextVal((prevText) => e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addNewItem({ todo: textVal, status: "pending" });
    setTextVal("");
    console.log("added new item");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={textVal} onChange={(e) => handleOnChange(e)} />
    </form>
  );
};

export default TextField;
