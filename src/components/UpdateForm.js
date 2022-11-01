const UpdateForm = ({
  updateData,
  changeTask,
  updateTask,
  cancelUpdate,
  setNewPriority,
}) => {
  return (
    <>
      {/* Update Task */}
      <div className="row">
        <div className="col-7">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTask(e)}
            className="form-control form-control-lg"
          />
        </div>

        <div className="col">
          <select
            name="priority"
            value={updateData && updateData.priority}
            onChange={(m) => setNewPriority(m.target.value)}
            className="form-control form-control-lg"
          >
            <option value="low">Low</option>
            <option value="mid">Mid</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="col-auto">
          <button onClick={updateTask} className="btn btn-lg btn-success mr-20">
            Update
          </button>
          <button onClick={cancelUpdate} className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default UpdateForm;
