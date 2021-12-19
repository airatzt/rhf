import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { Form } from "./Form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  firstName: string;
  name: string;
  sex: string;
};

export default function App() {
  const onSubmit = (data: FormValues) => console.log(data);
  const fieldsCount = 100;
  const items = [];
  for (let index = 0; index < fieldsCount; index++) {
    items.push(<TextInput name={"name" + index} id={"name" + index} />);
  }
  let generatedSchema = items.reduce((a, v, i) => ({ ...a, ["name" + i]: yup.string().required() }), {});
  const validationSchema = yup
    .object({
      name: yup.string().required(),
      ...generatedSchema,
    })
    .required();

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <p>Fielfd count: {fieldsCount}</p>
        <Form<FormValues> onSubmit={onSubmit} validationSchema={validationSchema}>
          <Button type="submit">Submit</Button>
          <br />
          <TextInput name="name" id="name" />

          {items}
        </Form>
      </Box>
    </Container>
  );
}
