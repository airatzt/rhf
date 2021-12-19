import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
interface TextInputProps {
  name: string;
}
export type FieldTextProps = TextInputProps & TextFieldProps;

const TextInput: React.FC<FieldTextProps> = (props) => {
  const { name } = props;
  const { control } = useFormContext();

  return <Controller render={({ field }) => <TextField {...field} />} control={control} name={name} />;
};

export default TextInput;
