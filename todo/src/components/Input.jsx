import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <div>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1.5 px-2.5 text-lg"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-violet-400 text-white py-2 px-3.5 rounded-lg font-semibold hover:opacity-70"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
