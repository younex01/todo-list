import { Todos } from "../page";
import { SingleTodo } from "./SingleTodo";

interface Props{
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

export const TodoList = ({todos, setTodos}:Props) => {
  return (
    <div className="todos">
        {todos.map(todo => (
              <SingleTodo
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />

        ))}
    </div>
  )
}
