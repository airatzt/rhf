import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";

type FormData = {
  name: string;
  //lastName: string;
};

const Form = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
      <>
    <form onSubmit={onSubmit}>
      <TextInput name="name" label="Name" control={control} />
      <Button type="submit">Submit</Button>
    </form>
    </>
  );
};

export default Form;
