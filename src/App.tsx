import { ChangeEvent, FC, useState } from 'react';
import { Todo } from './interfaces';
import './styles/App.scss';

const App: FC = () => {
  const [name, setName] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
 
  const addTask = (): void => {
    const newTask = { todoName: name };
    setTodoList([...todoList, newTask]);
    setName("");
  }

  return (
    <div className="appCont">
      <header>
        <h1>
          TypeScript Todo List
        </h1>
      </header>
      <div className="app">
      <form className='form' >
      <input
            type="text"
            placeholder="Task name"
            name="taskName"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
          />
      
      <button onClick={addTask} type='submit' >Add Task</button>

      </form>
      <div className='listCont' >

      </div>

      </div>
    </div> 
  );
}

export default App;
