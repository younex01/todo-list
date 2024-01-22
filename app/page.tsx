"use client";
import React, {useState} from "react";
import InputFeild from "./components/InputFeild";
import { TodoList } from "./components/TodoList";

export interface Todos{
  id: number;
  todo: string;
  isDone: boolean;
}


export default function Home() {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
    
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}])
      setTodo("");
    }
  
  };

  return (
    <div className='App'>
      <span className='heading'>taskfy</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}
