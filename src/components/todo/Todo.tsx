import React, { FC } from "react";
import { useState } from "react";
import { useAppDispatch } from "../../redux";

import { deleteTodo, editTodo, onSatusChange } from "../../redux/todosSlice";
import { todoType } from "../../types";
import css from "./Todo.module.css";






// type TestStateT = <T>(a: T) => T;
// const useTestState: TestStateT = (a) => {
//   return a;
// };

// const res = useTestState<number>(25);
// const res2 = useTestState("hello");

// console.log(res);
// console.log(res2);


// interface OBJ {
//     a: number,
//     b: number,
//     c?: number
// }

// type sumT = (obj: OBJ) => number;
// const sum: sumT = (obj) => {
//   return obj.a + obj.b + obj.c;
// };

// const res = sum({25, 25, 10});

// console.log(res);





type PropsType = todoType & {
  // testProps: number
};

const Todo: FC<PropsType> = ({ id, title, status }) => {
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState(title ? title : "");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleStatus = () => {
    dispatch(onSatusChange(id));
  };

  const closeEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const eventTarget = e.target as HTMLElement;

    if (eventTarget.parentElement?.parentElement?.parentElement) {
      eventTarget.parentElement.parentElement.parentElement.style.transform =
        "translateX(0)";
    }
  };

  const openEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const eventTarget = e.target as HTMLElement;

    if (eventTarget.parentElement?.parentElement?.parentElement) {
      eventTarget.parentElement.parentElement.parentElement.style.transform =
        "translateX(-50%)";
    }
  };

  const deleteTodoFunc = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // console.log((target as HTMLButtonElement).parentElement);

    const todo = e.target as HTMLElement;

    if (todo.parentElement?.parentElement?.parentElement) {
      todo.parentElement.parentElement.parentElement.style.transition = "0.3s";
      todo.parentElement.parentElement.parentElement.style.transform =
        "translateX(100%)";
    }

    setTimeout(() => {
      dispatch(deleteTodo(id));
    }, 300);
  };

  const editTodoFunc = () => {
    dispatch(editTodo({ id, inputValue }));
  };

  return (
    <div className={css.Todo}>
      <div className="">
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={status}
            onChange={handleStatus}
          />
          <p className={status ? css.completed : ""}>{title}</p>
        </div>

        <div>
          <button onClick={openEdit}>Edit</button>
          <button onClick={(e) => deleteTodoFunc(e)}>Del</button>
        </div>
      </div>

      <div className="">
        <div>
          <input type="text" value={inputValue} onChange={handleChange} />
        </div>

        <div>
          <button
            onClick={(e) => {
              setTimeout(() => {
                closeEdit(e);
              }, 200);
              editTodoFunc();
            }}
          >
            Save
          </button>
          <button onClick={closeEdit}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

type Props = {
  id: number;
  title: string;
  status: boolean;
};

export default Todo;
