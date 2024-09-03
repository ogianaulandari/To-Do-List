import { useState } from 'react';
import sunlight from "../assets/images/sunlight.png";

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add task
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  // Add task using keyboard enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  // Delete task
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-200">
      <div className="bg-white shadow-lg rounded-lg p-10 w-96">
        <div className="flex justify-center items-center mb-4">
          <img src={sunlight} alt="Sunlight" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-center">To Do List</h1>
          <img src={sunlight} alt="Sunlight" className="w-10 h-10 mr-2" />
        </div>
        <div className="mb-4">
          <input
          className='w-full p-2 rounded-md'
            type="text"
            value={task}
            onKeyDown={handleKeyPress}
            placeholder="I need to..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="mt-2 w-full bg-pink-500 text-white p-2 rounded-md"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded-md"
            >
              {task}
              <button
                onClick={() => handleDeleteTask(index)}
                className="bg-red-500 text-white p-1 rounded-full"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
