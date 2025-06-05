import React, { useState, useEffect } from 'react';
import { CheckIcon, TrashIcon, SunIcon, MoonIcon } from '@heroicons/react/solid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');
  const addTask = () => {
    if (!taskTitle.trim()) {
      alert('Task title cannot be empty.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDescription('');
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <header className="text-center mb-10">
        <h1 className="text-3xl font-semibold">Task Manager</h1>
        <p className="text-gray-500 mt-2">Organize your tasks with ease!</p>
      </header>

      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-black'} transition`}
      >
        {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>

      <div className="mb-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="mb-2 p-3 w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="mb-4 p-3 w-64 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <button
          onClick={addTask}
          className="p-3 w-64 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition dark:bg-indigo-700 dark:hover:bg-indigo-600"
        >
          Add Task
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={`p-2 rounded-full transition duration-200 ${task.completed ? 'bg-green-600 text-white' : 'bg-gray-300'}`}
              >
                <CheckIcon className="h-6 w-6" />
              </button>
              <div>
                <h3
                  className={`text-lg font-medium ${
                    task.completed
                      ? 'line-through text-gray-500 dark:text-gray-400'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {task.title}
                </h3>
                <p
                  className={`text-sm ${
                    task.completed
                      ? 'line-through text-gray-400 dark:text-gray-500'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {task.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
            >
              <TrashIcon className="h-6 w-6" />
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
        {`Total Tasks: ${tasks.filter(task => !task.completed).length}`}
      </div>
    </div>
  );
}

export default App;
