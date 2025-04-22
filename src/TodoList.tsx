import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState<string>(""); // `task` is a string
  const [tasks, setTasks] = useState<string[]>([]); // `tasks` is an array of strings
  const [isEditing, setIsEditing] = useState<number | null>(null); // Index of the task being edited

  const addTask = () => {
    if (task.trim() !== "") {
      if (isEditing !== null) {
        // Update the task
        const updatedTasks = tasks.map((t, index) =>
          index === isEditing ? task : t
        );
        setTasks(updatedTasks);
        setIsEditing(null); // Exit edit mode
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask(""); // Clear the input field
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task at the given index
  };

  const editTask = (index: number) => {
    setTask(tasks[index]); // Set the task to the input field
    setIsEditing(index); // Enter edit mode
  };

  return (
    <main className="bg-green-200 flex justify-center items-center flex-col min-h-screen">
      <div className="bg-amber-200 items-center flex flex-col justify-center p-5 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold my-5">Todo List</h1>
        <div className="border-black rounded-xl border-2 text-2xl p-3 flex items-center gap-2">
          <input
            name="todo"
            className="hover:border-none pl-5 focus:outline-none focus:border-transparent"
            type="text"
            placeholder="Enter Your Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="cursor-pointer px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            onClick={addTask}
          >
            {isEditing !== null ? "Update" : "Add"}
          </button>
        </div>
        <ul className="mt-5 w-full max-w-md">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="bg-white p-2 my-1 rounded-md shadow-sm border flex justify-between items-center"
            >
              {t}
              <div className="flex gap-2">
                <button
                  className="cursor-pointer px-2 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                  onClick={() => editTask(index)}
                >
                  Edit
                </button>
                <button
                  className="cursor-pointer px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => removeTask(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default TodoList;
