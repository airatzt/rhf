import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
interface TextInputProps {
  name: string;
}
export type FieldTextProps = TextInputProps & TextFieldProps;

const TextInput: React.FC<FieldTextProps> = (props) => {
  const { name } = props;
  const methods = useFormContext();
  const { control } = methods;
  return (
    <Controller
      render={({ field, fieldState }) => {
        //console.log(fieldState);
        const { error, invalid } = fieldState;
        return <TextField {...field} name={name} helperText={error && error.message} error={fieldState.invalid} />;
      }}
      control={control}
      name={name}
    />
  );
};

export default TextInput;
