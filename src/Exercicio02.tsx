import { SetStateAction, useState } from 'react';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);


  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
