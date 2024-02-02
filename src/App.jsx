import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import ListInput from "./components/ListInput";

function App() {
  const [tasks, setTasks] = React.useState([]);
  return (
    <div>
      <Header />
      <ListInput tasks={tasks} setTasks={setTasks} />
      <List tasks={tasks} />
    </div>
  );
}

export default App;
