import { TextField } from "@mui/material";
import React from "react";

const TextInput = () => {
  return <TextField label="Label" onChange={(text) => console.log(text)} />;
};

export default TextInput;
