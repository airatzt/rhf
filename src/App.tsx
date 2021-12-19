import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { Form } from "./Form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  [key:string]: any
};

export default function App() {
  const onSubmit = (data: FormValues) => console.log(data);
  const fieldsCount = 500;
  const items = [];
  for (let index = 0; index < fieldsCount; index++) {
    items.push(<TextInput name={"name" + index} key={"name" + index} />);
  }
  const generatedSchema = items.reduce((a, v, i) => ({ ...a, ["name" + i]: yup.string().required() }), {});
  const defaultValues= items.reduce((a, v, i) => ({ ...a, ["name" + i]: "name" + i }), {});
  const validationSchema = yup
    .object({
      ...generatedSchema,
    })
    .required();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <p>Fielfd count: {fieldsCount}</p>
        <Form<FormValues> onSubmit={onSubmit} validationSchema={validationSchema} defaultValues={defaultValues}>
          <Button type="submit">Submit</Button>
          <br />
          {items}
        </Form>
      </Box>
    </Container>
  );
}
