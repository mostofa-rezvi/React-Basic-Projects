const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="max-w-md rounded-xl flex flex-col items-center justify-start border text-center text-lg pt-2 pb-4 px-4 md:px-6">
        <p>{task}</p>
        <button
          className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Board;
