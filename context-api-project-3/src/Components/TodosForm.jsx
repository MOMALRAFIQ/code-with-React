import React, { useState } from "react";
import { useTodo } from "../Contexts/ToDoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const Add_single__Todo = (e) => {
    e.preventDefault();
    if(!todo.trim()) return addTodo({id : Date.now() , todo: todo ,completed: false})
      setTodo("");
  };

  return (
    <form  onSubmit= {Add_single__Todo}className="flex">
      <input
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"

      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-pink-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
