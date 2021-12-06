import React from "react";
import "./Search.css";

export const Search = ({ todo, filteredTodo, setValue }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
      {filteredTodo.map((todo) => {
        return (
          <div className="todo-block">
            <p>{todo.todoName}</p>
          </div>
        );
      })}
    </div>
  );
};
