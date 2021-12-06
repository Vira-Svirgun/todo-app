import React from "react";
import "./Render.css";
import Checkbox from "@mui/material/Checkbox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Todo = ({ todo, handleMarkTodo, index, handleOpenTodo }) => {
  const isFinishedTodo = todo.isFinished && "todo-finished";
  return (
    <div className="todo-container">
      <span>
        <Checkbox
          onClick={(e) => handleMarkTodo(e.target.checked, index)}
          checked={todo.isFinished}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
      </span>
      <div
        className="todo-item"
        onClick={() => handleOpenTodo({ ...todo, index })}
      >
        <span className={isFinishedTodo}>{todo.todoName}</span>
        <ArrowForwardIosIcon fontSize="small" />
      </div>
    </div>
  );
};
export const Render = ({ todo, handleMarkTodo, handleOpenTodo }) => {
  return (
    <div className="render-list">
      {todo.map((todo, index) => (
        <Todo
          todo={todo}
          key={todo.id}
          handleMarkTodo={handleMarkTodo}
          index={index}
          handleOpenTodo={handleOpenTodo}
        />
      ))}
    </div>
  );
};
