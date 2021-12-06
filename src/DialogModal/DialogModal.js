import React from "react";
import "./DialogModal.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const DialogModal = ({
  handleOpenDialog,
  isOpen,
  handleFieldValue,
  formData,
  handleSubmit,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleOpenDialog}>
      <DialogTitle className="dialog-title">
        {formData.isEdit ? "Edit Todo" : "Add new Todo"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Todo"
            variant="outlined"
            value={formData.todoName}
            onChange={(e) => {
              handleFieldValue("todoName", e.target.value);
            }}
          />
          <br />
          <TextField
            label="Note"
            variant="outlined"
            value={formData.todoNote}
            onChange={(e) => {
              handleFieldValue("todoNote", e.target.value);
            }}
            multiline
            minRows={4}
          />
          <DialogActions>
            <Button color="primary" onClick={handleOpenDialog}>
              Close
            </Button>
            <Button disabled={!formData.todoName} type="submit" color="primary">
              {formData.isEdit ? "Edit" : "Add"}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};
