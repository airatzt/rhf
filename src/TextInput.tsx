import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues, UseControllerProps, useFormContext } from "react-hook-form";
interface TextInputProps {
  name: string;
  control: Control<FieldValues, object>
}
export type FieldTextProps = TextInputProps & TextFieldProps;

const TextInput: React.FC<FieldTextProps> = (props) => {
 const { control, name } = props;

  return (
    <Controller render={({ field }) => <TextField {...field}/>}  control={control}  name={name}/>
  );
};

export default TextInput;
