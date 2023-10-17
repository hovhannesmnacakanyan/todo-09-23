import { useState } from "react";
import { Button, Input } from "./ui-kit";
import { getLocalStorageItem } from "./helpers";
import { useSetLocalStorage } from "./hooks/useSetLocalStorage";

interface ITodoItem {
  text: string;
  done: boolean;
  id: number;
}

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState<ITodoItem[]>(
    getLocalStorageItem("todos") || []
  );

  const onChange = (value: string) => setTodoText(value);
  const addTodo = () => {
    if (todoText.trim()) {
      setTodoList((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          text: todoText.trim(),
          done: false,
        },
      ]);
    }

    setTodoText("");
  };

  const handleCheck = (id: number) => {
    setTodoList((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodoList((prevState) => prevState.filter((item) => item.id !== id));
  };

  useSetLocalStorage("todos", todoList);

  return (
    <>
      <Input value={todoText} label="Add your todo..." onChange={onChange} />
      <Button onClick={addTodo}>Add</Button>
      <ul>
        {todoList.map((todoItem) => {
          return (
            <li key={todoItem.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todoItem.done}
                  onChange={() => handleCheck(todoItem.id)}
                />
                {todoItem.text}
              </label>
              <Button onClick={() => handleDelete(todoItem.id)}>Delete</Button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
