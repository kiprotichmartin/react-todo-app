import React from "react";

const SearchToDo = ({searchTask, setSearchTask, searchToDo, resetSearch}) => {

  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={searchTask}
            onChange={(e) => setSearchTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={searchToDo} className="btn btn-lg btn-success mr-20">
            Search
          </button>
          <button onClick={resetSearch} className="btn btn-lg btn-warning">
            Reset
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default SearchToDo;
