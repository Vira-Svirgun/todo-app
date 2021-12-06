import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo.css";
import { Header } from "../Header/Header";
import { Search } from "../Search/Search";
import { Actions } from "../Actions/Actions";
import { Render } from "../Render/Render";

const initialFormData = {
  isEdit: false,
  todoName: "",
  todoNote: "",
  isFinished: false,
  id: "",
  index: null,
};

const getFinishedCount = (todo) =>
  todo.reduce(
    (acc, curr) => {
      acc.total = todo.length;

      if (curr.isFinished) {
        acc.finished = acc.isFinished + 1;
      }
      return acc;
    },
    { total: 0, finished: 0 }
  );

const setFilterTab = (tab, todo) => {
  if (tab === 0) {
    return todo;
  } else if (tab === 1) {
    return todo.filter((todo) => !todo.isFinished);
  } else if (tab === 2) {
    return todo.filter((todo) => todo.isFinished);
  }
};

const Todo = () => {
  const [tab, setTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDisplay, setIsOpenDisplay] = useState(false);
  const [todo, setTodo] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [value, setValue] = useState("");

  const totalCount = getFinishedCount(todo);
  const sortedTodo = setFilterTab(tab, todo);

  const resetAll = () => {
    setIsOpenDisplay(false);
    setFormData(initialFormData);
    setIsOpen(false);
  };

  const handleOpenDialog = () => setIsOpen((prevState) => !prevState);

  const handleChangeTab = (tabValue) => setTab(tabValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.isEdit) {
      const editedTodo = todo;
      editedTodo.splice(formData.index, 1, {
        ...formData,
        isEdit: false,
        index: null,
      });
      setTodo(editedTodo);
    } else {
      setTodo((prevState) => [...prevState, { ...formData, id: uuidv4() }]);
    }

    resetAll();
  };

  const handleFieldValue = (fieldName, value) =>
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }));

  const handleMarkTodo = (isChecked, index) => {
    const updatedTodo = todo.slice();
    updatedTodo.splice(index, 1, { ...todo[index], isFinished: isChecked });
    setTodo(updatedTodo);
  };

  const handleOpenTodo = (todo) => {
    setIsOpenDisplay(true);
    setFormData(todo);
  };

  const handleEditTodo = () => {
    setFormData((prevState) => ({ ...prevState, isEdit: true }));
    setIsOpenDisplay(false);
    handleOpenDialog();
  };

  const handleRemoveTodo = () => {
    setTodo(todo.filter((item) => item.id !== formData.id));
    resetAll();
  };

  const filteredTodo = todo.filter((todo) => {
    if (value == "") {
      return todo;
    } else if (
      todo.todoName.toLowerCase().includes(value.toLowerCase()) ||
      todo.todoNote.toLowerCase().includes(value.toLowerCase())
    ) {
      return todo;
    }
  });

  return (
    <div className="wrapper">
      <Header
        handleOpenDialog={handleOpenDialog}
        isOpen={isOpen}
        handleFieldValue={handleFieldValue}
        formData={formData}
        handleSubmit={handleSubmit}
        handleEditTodo={handleEditTodo}
        isOpenDisplay={isOpenDisplay}
        handleRemoveTodo={handleRemoveTodo}
        handleCloseButton={resetAll}
        totalCount={totalCount}
      />
      <Search todo={todo} filteredTodo={filteredTodo} setValue={setValue} />
      <Actions handleChangeTab={handleChangeTab} tab={tab} />
      <Render
        todo={sortedTodo}
        handleMarkTodo={handleMarkTodo}
        handleOpenTodo={handleOpenTodo}
      />
    </div>
  );
};

export default Todo;
