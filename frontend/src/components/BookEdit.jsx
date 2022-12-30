import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  useGetList,
} from "react-admin";

function BookEdit(props) {
  const { data: categories } = useGetList("category");
  return (
    <Edit title={"Create a Book"} {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="author" />
        <SelectInput source="category" choices={categories ? categories : []} />
        <TextInput source="price" />
        <TextInput fullWidth source="content" />
        <DateInput source="createdAt" />
      </SimpleForm>
    </Edit>
  );
}

export default BookEdit;
