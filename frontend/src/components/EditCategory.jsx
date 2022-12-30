import React from "react";

import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

function EditCategory(props) {
  return (
    <Edit title={"Edit a Category"} {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Edit>
  );
}

export default EditCategory;
