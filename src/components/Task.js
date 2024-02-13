import React from "react";

function Task({text, category, handleRemoveTask}) {
  const handleRemove = () => { 
    handleRemoveTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemove}>X</button>
    </div>
  );
}

export default Task;