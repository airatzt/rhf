import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { Form } from "./Form";
import { Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup
  .object({
    name: yup.string().required(),
  })
  .required();

type FormValues = {
  firstName: string;
  name: string;
  sex: string;
};

export default function App() {
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Form<FormValues> onSubmit={onSubmit} validationSchema={validationSchema}>
          <TextInput name="name" />
          <Button type="submit">Submit</Button>
        </Form>
      </Box>
    </Container>
  );
}
