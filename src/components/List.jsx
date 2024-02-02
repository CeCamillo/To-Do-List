import React from "react";

function List({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <p key={crypto.randomUUID()}>{task}</p>
      ))}
    </div>
  );
}

export default List;
