import React from "react";

function ListInput({ tasks, setTasks }) {
  const [task, setTask] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="To Do"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
    </form>
  );
}

export default ListInput;
