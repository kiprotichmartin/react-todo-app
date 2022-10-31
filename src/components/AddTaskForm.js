const AddTaskForm = ({
  newTask,
  setNewTask,
  newPriority,
  setNewPriority,
  addTask,
}) => {
  return (
    <>
      {/* Add Task */}
      <div className="row">
        <div className="col-8">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>

        <div className="col">
          <select
            name="priority"
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value)}
            className="form-control form-control-lg"
          >
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
