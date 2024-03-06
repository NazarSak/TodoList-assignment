import React, { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { Form } from "./form.styled";

const FormTask = ({ handleSubmit, text, setText }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="text"
        value={text}
        required={true}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        type="submit"
        variant="filled"
        color="orange"
        size="md"
        radius="md"
      >
        Add Todo
      </Button>
    </Form>
  );
};

export default FormTask;
