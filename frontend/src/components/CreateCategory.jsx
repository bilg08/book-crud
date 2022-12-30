import React from 'react'
import { Create, SimpleForm, TextInput } from "react-admin";

function CreateCategory(props) {
  return (
    <Create title="Create a Category" {...props}>
      <SimpleForm>
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
}

export default CreateCategory
