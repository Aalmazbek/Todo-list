import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../redux";

import { addTodo } from "../../redux/todosSlice";
import css from "./CreateTodo.module.css";

let checkSpaces = (str: string) => str.trim() === "";

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const submit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkSpaces(inputValue)) {
      setInputValue("");
      return;
    }

    dispatch(addTodo(inputValue));
    // props.addTodo(inputValue)
    setInputValue("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={submit} className={css.CreateTodo}>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Add some todo"
      />
      <input type="submit" value="+Add" />
    </form>
  );
};

export default CreateTodo;
