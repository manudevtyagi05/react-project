import React, { useState, useEffect } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks update
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() !== "") {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save immediately
      setTask(""); // Clear input
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save immediately
  };

  const handleEdit = (index) => {
    setTask(tasks[index]); // Set current task for editing
    handleDelete(index); // Remove from list
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>

      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex gap-3 mb-4">
          <input
            onChange={handleTask}
            value={task}
            type="text"
            placeholder="Enter a task..."
            className="flex-grow p-2 text-black rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300"
          >
            ADD
          </button>
        </div>

        {tasks.length > 0 ? (
          <ul className="space-y-3">
            {tasks.map((t, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-700 p-3 rounded-lg shadow-md"
              >
                <p className="flex-grow">{t}</p>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md transition duration-300"
                >
                  EDIT
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition duration-300 ml-2"
                >
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No tasks yet. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default App;
