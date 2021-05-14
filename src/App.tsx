import { ChangeEvent, FC, useState } from 'react';
import TodoTask from './components/TodoTask';
import { Todo } from './interfaces';
import './styles/App.scss';

const App: FC = () => {
  const [name, setName] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
 
  const addTodoItem = (): void => {
    setTodoList([...todoList, { todoName: name }]);
    setName("");
  }

  const removeTodoItem = (todoToBeDeleted: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.todoName !== todoToBeDeleted;
      })
    );
  };

  return (
    <div className="appCont">
      <header>
        <h1>
          TypeScript Todo List
        </h1>
      </header>
      <div className="app">
      <div className='form'  >
      <input
            type="text"
            placeholder="Task name"
            name="taskName"
            value={name}
            onChange={(event: ChangeEvent<HTMLInputElement>): void => setName(event.target.value)}
          />
      
      <button onClick={addTodoItem} type='submit' style={{color:'white'}} >Add Task</button>

      </div>
      <div className='listCont' >
        <h2>
          Stored List
        </h2>
        <div className='todos' >
      {todoList.map((todo: Todo, key) => {
        return <TodoTask key={key} todo={todo} removeTodoItem={removeTodoItem} />;
      })}
      </div>
      </div>

      </div>
    </div> 
  );
}

export default App;
