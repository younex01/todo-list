import { Dispatch, SetStateAction, useRef } from "react";

interface Props{
  todo: string;
  setTodo: Dispatch<SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild = ({todo, setTodo, handleAdd}: Props) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur;
    }}>
        <input type='input'
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task' className='input__box'/>
        <button className="input__submit" type="submit">Go</button>
    </form>
  )
}

export default InputFeild;