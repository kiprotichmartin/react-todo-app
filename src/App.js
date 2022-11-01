import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import UpdateForm from "./components/UpdateForm";
import ToDo from "./components/ToDo";
import SearchToDo from "./components/SearchToDo";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);
  const [filterToDo, setFilterToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [searchTask, setSearchTask] = useState("");

  // Search a task
  ///////////////////////////
  const searchToDo = () => {
    if (searchTask) {
      let filteredTasks = toDo.filter((task) => task.title.includes(searchTask));
      if (filteredTasks.length > 0) {
       setFilterToDo(filteredTasks);  
      } else if (filteredTasks.length === 0) {
        alert("Match not found!");
      }
    } else {
      alert("Search cannot be empty!");
    }
  };

  // Add task
  ///////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
        priority: newPriority,
        status: false,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
      setNewPriority("");
      // setNewPriority("low");
    }
  };

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Reset search
  ///////////////////////////
  const resetSearch = () => {
    setSearchTask("");
    setFilterToDo([]);
  };

  // Change task for update
  ///////////////////////////
  const changeTask = (e, m) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      priority: newPriority,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setToDo(updatedObject);
    setUpdateData("");
    setNewPriority("low");
  };

  return (
    <div className="container App">
      <br />
      <br />
      <h2>ToDo App (ReactJS)</h2>
      <br />
      <br />

      <SearchToDo
        searchToDo={searchToDo}
        searchTask={searchTask}
        setSearchTask={setSearchTask}
        resetSearch={resetSearch}
      />

      {/* <ToDo toDo={filterToDo} /> */}

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
          setNewPriority={setNewPriority}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          newPriority={newPriority}
          setNewPriority={setNewPriority}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display ToDos */}

      {toDo && toDo.length ? "" : "No Tasks..."}

      <ToDo
        toDo={ searchTask ? filterToDo : toDo }
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
