import { useState } from "react";
import { Button, Input } from "./ui-kit";

interface ITodoItem {
  text: string;
  done: boolean;
  id: number;
}

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    { id: Date.now(), text: "todo text", done: true },
  ]);

  const onChange = (value: string) => setTodoText(value);
  const addTodo = () => {
    if (todoText.trim()) {
      setTodoList((prevState) => [
        ...prevState,
        { id: Date.now(), text: todoText.trim(), done: false },
      ]);
    }

    setTodoText("");
  };

  const handleCheck = (id: number) => {
    setTodoList((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <Input value={todoText} label="Add your todo" onChange={onChange} />
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
            </li>
          );
        })}
      </ul>
    </div>
  );
};
