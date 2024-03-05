import React from "react";
import { useForm } from '@mantine/form';

const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        required={true}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
