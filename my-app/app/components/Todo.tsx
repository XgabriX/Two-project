"use client";
import React from "react";
import { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";


export interface todos {
    id: number;
    title: string;
    completed: boolean;
}

const Todo = () => {
    const [todos, setTodos] = useState<todos[]>([]);
    const [todoName, setTodoName] = useState<string>("");

    useEffect(() => {
        const todos = localStorage.getItem("todos");
        if (todos) {
            setTodos(JSON.parse(todos));
        }
    }, []);

    const addTodos = () => {
        const newTodo = {
            id: Math.random(),
            title: todoName,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setTodoName("");
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    };

    const deleteTodo = (id: number) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const checkTodo = (id: number) => {
        const newTodos = todos.map((t) => {
            if (t.id === id) {
                t.completed = !t.completed;
            }
            return t;
        });
        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <div className="flex justify-center items-center flex-col text-center">
            <div className="p-4 flex flex-col space-y-3 items-center text-center">
                <textarea
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                    className="p-4 bg-red-400 rounded  border-solid border-red-950 text-sm text-black text-light"
                />
                <button
                    className="btn btn-error w-24 bg-red-600 shadow-xl text-white text-sm"
                    onClick={addTodos}
                >
                    Add task
                </button>
            </div>
            <div className="flex flex-col w-full justify-center items-center">
                {todos.map((todo) => {
                    return (
                        <div className="flex justify-between items-center text-justify w-full my-1 bg-red-300 p-4 bg-opacity-30 border border-solid border-red-400 rounded">
                            <div className="flex flex-row space-x-2">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => {
                                        checkTodo(todo.id);
                                    }}
                                    className="bg-blue-800 h-4 w-4"
                                />
                                <div
                                    className={`text-sm font-light ml-1 ${todo.completed ? "line-through" : ""
                                        }`}
                                >
                                    {todo.title}
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    deleteTodo(todo.id);
                                }}
                                className="bg-red-700 p-2 rounded hover:bg-red-800 text-white font-bold"
                            >
                                <BsTrash3 />
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Todo;