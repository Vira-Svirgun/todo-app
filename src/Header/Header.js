import React from "react";
import "./Header.css";
import moment from "moment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { DialogModal } from "./../DialogModal/DialogModal";
import { Display } from "../Display/Display";

export const Header = ({
  handleOpenDialog,
  isOpen,
  handleFieldValue,
  formData,
  handleSubmit,
  isOpenDisplay,
  handleCloseButton,
  handleEditTodo,
  handleRemoveTodo,
  totalCount,
}) => {
  const weekDay = moment().format("dddd");
  const date = moment().date();

  return (
    <div className="todo-header">
      <div className="header-wrapper">
        <div className="todos-count">
          <span className="finished">{totalCount.finished}</span>

          <div className="total-tasks">
            <span>Tasks</span>
            <span>{`/ ${totalCount.total}`}</span>
          </div>
        </div>

        <div>
          <span className="weekDay">{weekDay}</span>
          <span className="date">{date}</span>
        </div>
      </div>

      <div className="add-todo" onClick={handleOpenDialog}>
        <AddCircleIcon color="primary" />
        <span className="icon-background" />
      </div>
      <DialogModal
        handleSubmit={handleSubmit}
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleFieldValue={handleFieldValue}
        formData={formData}
      />
      <Display
        isOpen={isOpenDisplay}
        formData={formData}
        handleCloseButton={handleCloseButton}
        handleEditTodo={handleEditTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
    </div>
  );
};
