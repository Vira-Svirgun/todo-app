import React from "react";
import "./Actions.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ListIcon from "@mui/icons-material/List";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckIcon from "@mui/icons-material/Check";

export const Actions = ({ handleChangeTab, tab }) => {
  return (
    <div className="actions-wrapper">
      <Tabs
        value={tab}
        onChange={(e, tabValue) => {
          handleChangeTab(tabValue);
        }}
      >
        <Tab label={<ListIcon />} />
        <Tab label={<RadioButtonUncheckedIcon />} />
        <Tab label={<CheckIcon />} />
      </Tabs>
    </div>
  );
};
