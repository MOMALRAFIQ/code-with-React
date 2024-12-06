import React, { useEffect, useState } from "react";
import { TodoProvider } from "./Contexts";
import TodoForm from "./Components/TodosForm";
import TodosItems from "./Components/TodosItems";

//  Todo UI

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ ...todo }, ...prev]);
  };
  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prev.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    try {
      const todos = JSON.parse(localStorage.getItem("todos")) ||[];
      if (todos && todos.length > 0) {
        setTodos(todos);
      }
    } catch (error) {
      console.error("Failed to parse todos from localStorage:", error)
      setTodos([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updatedTodo, toggleCompleted, deleteTodo }}
      >
        <div className=" min-h-screen py-8">
          <div className=" title text-gray-800 bg-pink-200  border-white  w-full max-w-2xl mx-auto shadow-md rounded-lg text-center px-4 py-4">
            <h2 className="text-2xl bg-lime-400 rounded-full mt-2 mb-8">
              <span>Manage your Todos</span>
            </h2>
            <div className=" list-of-todos text-2xl bg-lime-400 rounded-full mt-2 mb-4">
              <TodoForm /> {/* todos form here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/* loop n add todoitems */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodosItems todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
